<template>
  <div class="container pt-10">
    <header class="myprose">
      <a href="/blog/">Alexey's Blog</a>
    </header>

    <section class="mt-10 myprose">
      <h1 class="header">Posts</h1>

      <article v-for="article in articles">
        <a :href="article.link" class="link">
          <h2>
            {{ article.title }}
          </h2>

          <p>{{ article.descr }}</p>
        </a>
      </article>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { data as posts } from "../posts.data";

const articles = posts.map(({ title, href, summary }) => ({
  title,
  link: href,
  descr: summary,
}));
</script>

<style scoped>
article {
  @apply mb-20;
}
h2 {
  border: none;
  @apply font-medium mb-4;
}
article a {
  text-decoration: none;
  @apply font-normal;
  color: #374151;
}
article:hover h2,
article:hover a {
  @apply text-blue-700;
}
</style>
