<script setup>
import { computed } from "vue";
import { useRoute } from "vitepress";
import Home from "./Home.vue";

const route = useRoute();
const isIndex = computed(() => route.path.replace(/index.html$/, "") === "/");
</script>

<template>
  <div class="antialiased">
    <Home v-if="isIndex" />
    <Content v-else class="prose max-w-none pt-10 pb-8" />
  </div>
</template>
