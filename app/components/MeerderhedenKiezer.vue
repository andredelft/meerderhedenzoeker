<template>
  <section class="meerderheden-kiezer">
    <PartijDisplay />
    <PartijControls />
  </section>
</template>

<style scoped>
.meerderheden-kiezer {
  display: grid;
  gap: 2rem;
  align-items: end;
  padding-block: 5rem;
}

@media (width >= 50rem) {
  .meerderheden-kiezer {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
