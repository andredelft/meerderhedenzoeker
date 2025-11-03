<template>
  <div class="controls">
    <div class="partij-button-container">
      <PartijButton v-for="partij in partijen" :partij />
    </div>
    <button class="reset" @click="reset()">Begin opnieuw</button>
  </div>
</template>

<script lang="ts" setup>
const { partijen, reset } = usePartijen();
</script>

<style scoped>
.controls {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.reset {
  font-weight: 700;
  color: #e61e14;
  text-decoration: underline;
  justify-self: center;
}

.partij-button-container {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
}
</style>
