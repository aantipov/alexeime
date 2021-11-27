<template>
  <div class="antialiased">
    <Home v-if="isIndex" />
    <BlogList v-else-if="isBlogIndex" />
    <Article v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import Home from "./home/Home.vue";
import BlogList from "./BlogIndex.vue";
import Article from "./Article.vue";

const route = useRoute();
const isIndex = computed(() => route.path.replace(/index.html$/, "") === "/");
const isBlogIndex = computed(
  () => route.path.replace(/index.html$/, "") === "/blog/"
);
</script>
