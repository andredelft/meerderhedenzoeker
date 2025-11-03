<template>
  <NuxtLayout>
    <div class="container">
      <PartijDisplay />
      <PartijControls />
    </div>
  </NuxtLayout>
</template>

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
