<template>
  <article class="container pt-10 root">
    <header class="myprose">
      <a href="/blog/">Alexey's Blog</a>
    </header>

    <main class="mt-10 myprose">
      <h1 class="header">{{ frontmatter.title }}</h1>

      <div class="h-9">
        <ClientOnly>
          <ArticleMeta />
        </ClientOnly>
      </div>

      <Content />
    </main>

    <Footer />
  </article>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import ArticleMeta from "./ArticleMeta.vue";
const { frontmatter } = useData();
</script>

<style scoped>
.root :deep(h1) {
  @apply mb-4;
}
.root :deep(h2) {
  border: none;
}
</style>
