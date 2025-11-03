<template>
  <section class="meerderhedenzoeker">
    <CoalitieDisplay />
    <CoalitieControls />
  </section>
</template>

<style scoped>
.meerderhedenzoeker {
  display: grid;
  gap: 2rem;
  align-items: end;
  padding-block: 5rem;
}

@media (width >= 50rem) {
  .meerderhedenzoeker {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
