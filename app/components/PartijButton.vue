<template>
  <button
    class="partij-button"
    :class="{ 'in-coalitie': partij.isInCoalitie }"
    @click="toggleCoalitie(partij)"
  >
    {{ partij.name }}
  </button>
</template>

<script lang="ts" setup>
const { toggleCoalitie } = usePartijen();

defineProps<{ partij: Partij }>();
</script>

<style scoped>
.partij-button {
  border-radius: 100vw;
  padding: 0.4rem;
  font-weight: 700;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  background: hsl(0, 0%, 95%);
}

.partij-button:not(.in-coalitie):hover {
  background: hsl(0, 0%, 85%);
}

.in-coalitie {
  background: v-bind("partij.color");
  color: white;
}
</style>
