<template>
  <div class="coalitie-display">
    <div class="visual">
      <PartijSegment v-for="segment in segments" :segment />
    </div>
    <div class="counter">
      <span class="sr-only">
        {{ numCoalitieZetels }} zetels ({{ coalitiePartijNames }}).
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { partijen, coalitiePartijen } = usePartijen();

const numCoalitieZetels = computed(() =>
  sum(coalitiePartijen.value.map((partij) => partij.numZetels))
);

const coalitiePartijNames = computed(() =>
  coalitiePartijen.value.map((partij) => partij.name).join(", ")
);

const segments = computed(() => {
  let startAngle = 0;

  return partijen.value.map((partij) => {
    const angle = partij.isInCoalitie ? (180 * partij.numZetels) / 150 : 0;

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
@property --num-coalitie-zetels {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.coalitie-display {
  display: grid;
  grid-template-areas: "stack";
  gap: 0.5rem;
  justify-items: center;
}

.coalitie-display > * {
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
  --num-coalitie-zetels: v-bind("numCoalitieZetels");

  font-size: 3rem;
  font-weight: 700;
  align-self: end;
  transition: --num-coalitie-zetels 0.5s;
  counter-reset: num-coalitie-zetels var(--num-coalitie-zetels);
}

.counter::after {
  content: counter(num-coalitie-zetels);
}
</style>
