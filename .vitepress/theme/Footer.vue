<template>
  <footer class="flex justify-center mt-8 py-8">
    <p>© 2009-{{ year }} Alexey Antipov</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
