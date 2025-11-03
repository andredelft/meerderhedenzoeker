<template>
  <div class="partij-display">
    <div class="visual">
      <PartijSegment v-for="segment in segments" :segment />
    </div>
    <div class="counter">
      <span class="sr-only">
        {{ totalVisibleZetels }} zetels ({{ visiblePartijenNames }}).
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { partijen } = usePartijen();

const totalVisibleZetels = computed(() =>
  sum(
    partijen.value
      .filter((partij) => partij.isVisible)
      .map((partij) => partij.numZetels)
  )
);

const visiblePartijenNames = computed(() =>
  partijen.value
    .filter((partij) => partij.isVisible)
    .map((partij) => partij.name)
    .join(", ")
);

const segments = computed(() => {
  let startAngle = 0;

  return partijen.value.map((partij) => {
    const angle = partij.isVisible ? (180 * partij.numZetels) / 150 : 0;

    const segment = {
      color: partij.color,
      startAngle,
      endAngle: startAngle + angle,
    };

    startAngle += angle;

    return segment;
  });
});
</script>

<style scoped>
@property --zetel-aantal {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.partij-display {
  display: grid;
  grid-template-areas: "stack";
  gap: 0.5rem;
  justify-items: center;
}

.partij-display > * {
  grid-area: stack;
}

.visual {
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  background-color: hsl(0 0% 95%);
  clip-path: shape(
    from 0 100%,
    arc to 100% 100% of 50% 100% cw,
    line to 75% 100%,
    arc to 25% 100% of 25% 50%
  );
}

.counter {
  --total-visible-zetels: v-bind("totalVisibleZetels");

  font-size: 3rem;
  font-weight: 700;
  align-self: end;
  transition: --total-visible-zetels 0.5s;
  counter-reset: total-visible-zetels var(--total-visible-zetels);
}

.counter::after {
  content: counter(total-visible-zetels);
}
</style>
