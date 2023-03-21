<template>
  <line
    :x1="source.x"
    :y1="source.y"
    :x2="target.x"
    :y2="target.y"
    style="stroke: rgb(255, 0, 0); stroke-width: 2"
  ></line>
</template>

<script lang="ts">
import Vue from "vue";
import { LinePoint } from "@/types";

export default Vue.extend({
  name: "VLine",
  props: {
    source: {
      type: Object as () => LinePoint,
      required: true,
    },
    target: {
      type: Object as () => LinePoint,
      required: true,
    },
  },
});
</script>

<style scoped></style>
