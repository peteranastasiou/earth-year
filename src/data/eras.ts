export interface Era {
  name: string;
  color: string;
  startYear: number;
  endYear: number;
  percent: number;
}

const rawEras: Omit<Era, "percent">[] = [
  {
    name: "Hadean",
    startYear: 4543_000_000,
    endYear: 4000_000_000,
    color: "#91CD8D",
  },
  {
    name: "Eoarchean",
    startYear: 4000_000_000,
    endYear: 3600_000_000,
    color: "#90CFC0",
  },
  {
    name: "Paleoarchean",
    startYear: 3600_000_000,
    endYear: 3200_000_000,
    color: "#90C6D3",
  },
  {
    name: "Mesoarchean",
    startYear: 3200_000_000,
    endYear: 2800_000_000,
    color: "#92B8E0",
  },
  {
    name: "Neoarchean",
    startYear: 2800_000_000,
    endYear: 2500_000_000,
    color: "#A4A2E4",
  },
  {
    name: "Siderian",
    startYear: 2500_000_000,
    endYear: 2300_000_000,
    color: "#BD9CDE",
  },
  {
    name: "Rhyarcian",
    startYear: 2300_000_000,
    endYear: 2050_000_000,
    color: "#D598CE",
  },
  {
    name: "Orosirian",
    startYear: 2050_000_000,
    endYear: 1800_000_000,
    color: "#E89FBA",
  },
  {
    name: "Statherian",
    startYear: 1800_000_000,
    endYear: 1600_000_000,
    color: "#EEA7A0",
  },
  {
    name: "Calymmian",
    startYear: 1600_000_000,
    endYear: 1400_000_000,
    color: "#EFB78C",
  },
  {
    name: "Ectasian",
    startYear: 1400_000_000,
    endYear: 1200_000_000,
    color: "#E8C878",
  },
  {
    name: "Stenian",
    startYear: 1200_000_000,
    endYear: 1000_000_000,
    color: "#D7D66D",
  },
  {
    name: "Tonian",
    startYear: 1000_000_000,
    endYear: 720_000_000,
    color: "#BFD973",
  },
  {
    name: "Cryogenian",
    startYear: 720_000_000,
    endYear: 635_000_000,
    color: "#A5D982",
  },
  {
    name: "Ediacaran",
    startYear: 635_000_000,
    endYear: 539_000_000,
    color: "#8FD99A",
  },
  {
    name: "Cambrian",
    startYear: 539_000_000,
    endYear: 485_000_000,
    color: "#8ED3B6",
  },
  {
    name: "Ordovician",
    startYear: 485_000_000,
    endYear: 444_000_000,
    color: "#8AC9CA",
  },
  {
    name: "Silurian",
    startYear: 444_000_000,
    endYear: 419_000_000,
    color: "#8BBAD3",
  },
  {
    name: "Devonian",
    startYear: 419_000_000,
    endYear: 359_000_000,
    color: "#8FA8D4",
  },
  {
    name: "Carboniferous",
    startYear: 359_000_000,
    endYear: 299_000_000,
    color: "#A295D2",
  },
  {
    name: "Permian",
    startYear: 299_000_000,
    endYear: 252_000_000,
    color: "#B88FC5",
  },
  {
    name: "Triassic",
    startYear: 252_000_000,
    endYear: 201_000_000,
    color: "#CC8AB3",
  },
  {
    name: "Jurassic",
    startYear: 201_000_000,
    endYear: 145_000_000,
    color: "#D5909E",
  },
  {
    name: "Cretaceous",
    startYear: 145_000_000,
    endYear: 66_000_000,
    color: "#DFA48A",
  },
  {
    name: "Paleogene",
    startYear: 66_000_000,
    endYear: 23_030_000,
    color: "#D8B97A",
  },
  {
    name: "Neogene",
    startYear: 23_030_000,
    endYear: 2588_000,
    color: "#C9CB76",
  },
  { name: "Quaternary", startYear: 2588_000, endYear: 0, color: "#8BBAD3" },
];

export const eras: Era[] = rawEras.map((era) => ({
  ...era,
  percent: calcPercent(era),
}));

/**
 * Provides the duration of the era as a percentage of the age of the Earth
 */
function calcPercent(era: Pick<Era, "startYear" | "endYear">): number {
  return (100 * (era.startYear - era.endYear)) / 4543_000_000;
}
