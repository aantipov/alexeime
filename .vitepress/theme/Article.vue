<template>
  <article class="container pt-10 root">
    <header class="myprose">
      <a href="/blog/">Alexey's Blog</a>
    </header>

    <main class="mt-10 myprose">
      <h1 class="header">{{ data.title }}</h1>

      <Content class="mt-6" />
    </main>

    <Footer />
  </article>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter: data } = useData();
const year = new Date().getFullYear();
</script>

<style scoped>
.root >>> h2 {
  border: none;
}
</style>
