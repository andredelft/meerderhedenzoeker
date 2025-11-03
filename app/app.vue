<template>
  <NuxtLayout>
    <div class="container">
      <PartijDisplay />
      <PartijControls />
    </div>
  </NuxtLayout>
  <pre>{{ partijen }}</pre>
  <pre>{{ nuxt.payload }}</pre>
</template>

<script lang="ts" setup>
const nuxt = useNuxtApp();
const { partijen } = usePartijen();
</script>

<style>
.container {
  display: grid;
  gap: 2rem;
  align-items: end;
}

@media (width >= 50rem) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
