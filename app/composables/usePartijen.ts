export type Partij = {
  name: string;
  numZetels: number;
  color: string;
  isInCoalitie: boolean;
};

const partijData = [
  { name: "D66", color: "#64DC7A", numZetels: 26 },
  { name: "PVV", color: "#6ED3F0", numZetels: 26 },
  { name: "VVD", color: "#3375C5", numZetels: 22 },
  { name: "GL/PvdA", color: "#C12B2A", numZetels: 20 },
  { name: "CDA", color: "#0E662C", numZetels: 18 },
  { name: "JA21", color: "#273C8C", numZetels: 9 },
  { name: "FVD", color: "#7E174D", numZetels: 7 },
  { name: "BBB", color: "#B1C73C", numZetels: 4 },
  { name: "DENK", color: "#2AB0A1", numZetels: 3 },
  { name: "SGP", color: "#E36F1E", numZetels: 3 },
  { name: "SP", color: "#E02525", numZetels: 3 },
  { name: "PvdD", color: "#BDA830", numZetels: 3 },
  { name: "CU", color: "#2E71B8", numZetels: 3 },
  { name: "50PLUS", color: "#9E6EB0", numZetels: 2 },
  { name: "Volt", color: "#6A3CA8", numZetels: 1 },
];

export function usePartijen() {
  const coalitieRecord = useState<Record<string, boolean>>(
    "coalitie-record",
    () => ({})
  );

  const partijen = computed<Partij[]>(() =>
    partijData.map((partij) => ({
      ...partij,
      isInCoalitie: coalitieRecord.value[partij.name] || false,
    }))
  );

  const coalitiePartijen = computed<Partij[]>(() =>
    partijen.value.filter((partij) => partij.isInCoalitie)
  );

  function toggleCoalitie(partij: Partij) {
    coalitieRecord.value[partij.name] = !coalitieRecord.value[partij.name];
  }

  function emptyCoalitie() {
    coalitieRecord.value = {};
  }

  return { partijen, coalitiePartijen, toggleCoalitie, emptyCoalitie };
}
