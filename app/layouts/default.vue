<template>
  <main>
    <slot />
  </main>
</template>

<script setup>
import "~/assets/style.css";
</script>

<style scoped>
main {
  max-width: 50rem;
  margin: auto;
  padding-inline: 1rem;
}
</style>
