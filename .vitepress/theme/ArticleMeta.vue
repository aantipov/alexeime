<template>
  <div class="text-center -mt-6 opacity-70">
    {{ post.date.string }}
    <span class="mx-3"> / </span>
    {{ post.readTime }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vitepress";
import { data as posts } from "../posts.data";
const { path } = useRoute();
const post = posts.find(({ href }) => href === path) as {
  readTime: string;
  date: { string: string };
};
</script>

<style scoped>
.root :deep(h2) {
  border: none;
}
</style>
