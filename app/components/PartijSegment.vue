<template>
  <div class="partij-segment"></div>
</template>

<script lang="ts" setup>
const { segment } = defineProps<{
  segment: { color: string; startAngle: number; endAngle: number };
}>();

const cssAngleStart = computed(() => `${segment.startAngle ?? 0}deg`);
const cssAngleEnd = computed(() => `${segment.endAngle ?? 0}deg`);
</script>

<style scoped>
@property --angle-start {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@property --angle-end {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.partij-segment {
  --angle-start: v-bind("cssAngleStart");
  --angle-end: v-bind("cssAngleEnd");

  position: absolute;
  inset: 0;
  transition-property: --angle-start, --angle-end;
  transition-duration: 0.5s;
  background: conic-gradient(
    from 270deg at 50% 100%,
    transparent var(--angle-start),
    v-bind("segment.color") var(--angle-start),
    v-bind("segment.color") var(--angle-end),
    transparent var(--angle-end)
  );
}
</style>
