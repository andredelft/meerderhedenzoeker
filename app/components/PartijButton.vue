<template>
  <button
    class="partij-button"
    :class="{ visible: partij.isVisible }"
    @click="toggle(partij)"
  >
    {{ partij.name }}
  </button>
</template>

<script lang="ts" setup>
const { toggle } = usePartijen();

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

.partij-button:not(.visible):hover {
  background: hsl(0, 0%, 85%);
}

.visible {
  background: v-bind("partij.color");
  color: white;
}
</style>
