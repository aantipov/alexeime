<template>
  <article class="container pt-10 root">
    <header class="myprose">
      <a href="/blog/">Alexey's Blog</a>
    </header>

    <main class="mt-10 myprose">
      <h1 class="header">{{ data.title }}</h1>

      <div class="text-center -mt-6 opacity-70">
        {{ date }}
        <span class="mx-3"> / </span>
        {{ readTime }}
      </div>

      <Content class="mt-6" />
    </main>

    <Footer />
  </article>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { useReadTime } from "./useReadTime";
const { frontmatter: data } = useData();
const date = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  day: "numeric",
}).format(new Date(data.value.date));
const readTime = useReadTime();
</script>

<style scoped>
.root :deep(h2) {
  border: none;
}
</style>
