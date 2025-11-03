<template>
  <section class="main">
    <slot />
  </section>
</template>

<script setup>
import "~/assets/style.css";
</script>

<style scoped>
.main {
  max-width: 50rem;
  margin: auto;
  padding: 5rem 1rem;
}
</style>
