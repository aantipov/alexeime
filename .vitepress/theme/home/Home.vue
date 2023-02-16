<template>
  <div class="container myprose pt-10">
    <h1 class="home-header">Alexey Antipov</h1>

    <div>
      <div>
        Hi &#128075;<br />
        My name is Alexey and I'm a father of two adorable living beings.<br />
        I find my passion in JavaScript engineering and exercising my leadership skills. <br />
        Love building and trying new things.
      </div>
      <div>
        <img src="./myphoto.jpg" alt="my image" />
      </div>
    </div>

    <section>
      <h2>Projects</h2>

      <a href="https://moiva.io" target="_blank" rel="noopener"> Moiva.io </a>
    </section>

    <section>
      <h2>Social activity</h2>

      <a class="block" href="/blog/">Blog</a>
      <a
        class="block mt-3"
        href="https://www.linkedin.com/in/aantipov"
        target="_blank"
        rel="noopener"
      >
        Linkedin
      </a>
      <a
        class="block mt-3"
        href="https://twitter.com/_aantipov"
        target="_blank"
        rel="noopener"
        >Twitter</a
      >
      <a
        class="block mt-3"
        href="https://github.com/aantipov"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </section>

    <section>
      <h2>Contact</h2>

      <a href="mailto:antipov.alexei@gmail.com"> antipov.alexei@gmail.com </a>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped>
.home-header {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-align: left;
  @apply text-4xl lg:text-6xl;
}
</style>
