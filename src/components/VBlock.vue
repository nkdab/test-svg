<template>
  <g :transform="`translate(${x}, ${y})`" @mousedown="onMouseDown">
    <rect height="150" width="150" class="v-block" fill="blue" />
    <circle
      v-for="node in nodes"
      :key="node.id"
      :cx="node.offsetX"
      :cy="node.offsetY"
      :r="node.radius"
      @click="onNodeClick(node)"
      fill="green"
      class="v-block--node"
    />
  </g>
</template>

<script lang="ts">
import Vue from "vue";
import { BlockNode } from "@/types";

export default Vue.extend({
  name: "VBlock",
  props: {
    id: String,
    x: Number,
    y: Number,
  },
  data() {
    return {
      nodes: [
        { id: "top", offsetX: 75, offsetY: 0, radius: 10 },
        { id: "left", offsetX: 0, offsetY: 75, radius: 10 },
        { id: "right", offsetX: 150, offsetY: 75, radius: 10 },
        { id: "bottom", offsetX: 75, offsetY: 150, radius: 10 },
      ] as BlockNode[],
    };
  },
  methods: {
    onNodeClick(node: BlockNode): void {
      this.$emit("nodeclick", this.id, node.id);
    },
    onMouseDown(event: MouseEvent) {
      this.$emit("mousedown", event);
    },
  },
});
</script>

<style>
.v-block {
  cursor: grab;
}
.v-block:active {
  cursor: grabbing;
}
.v-block--node {
  cursor: pointer;
}
</style>
