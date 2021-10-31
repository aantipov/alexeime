<template>
  <div class="container myprose pt-10">
    <h1 class="home-header">Alexey Antipov</h1>

    <div>
      <div>
        Hi &#128075;<br />
        My name is Alexey and I'm a father of two adorable living beings.<br />
        I find my passion in JavaScript engineering. <br />
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

      <a class="block" href="https://medium.com/@aantipov">
        medium.com/@aantipov
      </a>
      <a class="block mt-3" href="https://www.linkedin.com/in/aantipov">
        linkedin.com/in/aantipov
      </a>
      <a class="block mt-3" href="https://twitter.com/_aantipov">
        twitter.com/_aantipov
      </a>
      <a class="block mt-3" href="https://github.com/aantipov">
        github.com/aantipov
      </a>
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
  font-size: 3.5rem;
  text-align: left;
}
.myprose h1 {
  font-weight: 500;
}
</style>
