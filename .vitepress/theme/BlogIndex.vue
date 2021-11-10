<template>
  <div class="container pt-10">
    <header class="myprose">
      <a href="/blog/">Alexey's Blog</a>
    </header>

    <section class="mt-10 myprose">
      <h1 class="header">Posts</h1>

      <article>
        <h2>
          <a href="/blog/state-management--separation-of-concerns/"
            >State Management: separation of concerns</a
          >
        </h2>
        <p>
          State Management in Frontend is complicated and approaches are not yet
          settled. In search for a silver bullet, libraries authors come up with
          different API styles. Developers continue to struggle. Should they,
          though? Is the issue a lack of a perfect library?
        </p>

        <a
          class="link"
          aria-label="read more"
          href="/blog/state-management--separation-of-concerns/"
          >Read more →</a
        >
      </article>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
h2 {
  border: none;
}
</style>
