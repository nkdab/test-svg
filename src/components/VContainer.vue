<template>
  <svg class="v-container" @mousemove="onDrag" @mouseup="endDrag">
    <v-block
      v-for="block in blocks"
      :key="block.id"
      :id="block.id"
      :x="block.x"
      :y="block.y"
      @mousedown="startDrag(block.id, $event)"
      @nodeclick="addLine"
    />
    <v-line
      v-for="line in lines"
      :key="line.id"
      :target="line.targetPoint"
      :source="line.sourcePoint"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import VBlock from "@/components/VBlock.vue";
import { Block } from "@/store/models/Block";
import { Line } from "@/store/models/Line";
import VLine from "@/components/VLine.vue";

export default Vue.extend({
  name: "VContainer",
  components: { VLine, VBlock },
  props: {
    msg: String,
  },
  data() {
    return {
      draggingBlock: "",
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      chosenNode: "",
      chosenNodeBlock: "",
    };
  },
  computed: {
    blocks() {
      return Block.all();
    },
    lines() {
      return Line.all();
    },
  },
  methods: {
    startDrag(blockId: Block["id"], event: MouseEvent) {
      this.draggingBlock = blockId;
      const block = this.blocks.find((b) => b.id === blockId);
      if (!block) return;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.offsetX = block.x - this.startX;
      this.offsetY = block.y - this.startY;
    },
    onDrag(event: MouseEvent) {
      if (this.draggingBlock) {
        const block = this.blocks.find((b) => b.id === this.draggingBlock);
        if (!block) return;
        Block.update({
          where: this.draggingBlock,
          data: {
            x: event.clientX + this.offsetX,
            y: event.clientY + this.offsetY,
          },
        });
      }
    },
    endDrag() {
      this.draggingBlock = "";
    },
    async addLine(block: string, node: string) {
      if (this.chosenNodeBlock === block && this.chosenNode === node) {
        this.chosenNode = "";
        this.chosenNodeBlock = "";
        return;
      }
      if (this.chosenNodeBlock && this.chosenNode) {
        await Line.insert({
          data: {
            id: `${this.chosenNodeBlock}${this.chosenNode}-${block}${node}`,
            sourceId: this.chosenNodeBlock,
            sourceNode: this.chosenNode,
            targetId: block,
            targetNode: node,
          },
        });
        this.chosenNode = "";
        this.chosenNodeBlock = "";
        return;
      }
      this.chosenNode = node;
      this.chosenNodeBlock = block;
    },
  },
});
</script>

<style>
.v-container {
  min-height: calc(100vh - 50px);
  min-width: 100vw;
}
</style>
