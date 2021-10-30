<template>
  <div class="container prose pt-10">
    <h1 class="header">Alexey Antipov</h1>
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

    <section class="projects">
      <h2>Projects</h2>
      <p>
        <a href="https://moiva.io" target="_blank" rel="noopener"> Moiva.io </a>
      </p>
    </section>

    <section class="social">
      <h2>Social activity</h2>
      <p>
        <a href="https://medium.com/@aantipov"> medium.com/@aantipov </a>
      </p>

      <p>
        <a href="https://www.linkedin.com/in/aantipov">
          linkedin.com/in/aantipov
        </a>
      </p>
      <p>
        <a href="https://twitter.com/_aantipov"> twitter.com/_aantipov </a>
      </p>

      <p>
        <a href="https://github.com/aantipov"> github.com/aantipov </a>
      </p>
    </section>

    <section class="contact">
      <h2>Contact</h2>
      <p>
        <a href="mailto:antipov.alexei@gmail.com"> antipov.alexei@gmail.com </a>
      </p>
    </section>

    <div class="footer">
      <p>© 2009-{{ year }} Alexey Antipov</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style>
h1.header {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 3.5rem;
  font-weight: 500;
}
.icon-link {
  @apply flex;
}
</style>
