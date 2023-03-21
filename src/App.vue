<template>
  <div id="app">
    <v-container msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VContainer from "./components/VContainer.vue";
import { Block } from "@/store/models/Block";

export default Vue.extend({
  name: "App",
  components: {
    VContainer,
  },
  created() {
    const initialData = [
      { id: "block-1", x: 10, y: 30 },
      { id: "block-2", x: 100, y: 200 },
      { id: "block-3", x: 10, y: 400 },
      { id: "block-4", x: 100, y: 600 },
    ] as Block[];

    Block.insert({ data: initialData });
  },
  methods: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
