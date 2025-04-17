export interface Era {
  name: string;
  color: string;
  startYear: number;
  endYear: number;
  widthPercent: number;
}

const rawEras: Omit<Era, "widthPercent">[] = [
  { name: "Hadean", startYear: 4543_000_000, endYear: 4000_000_000, color: "#493548" },
  { name: "Eoarchean", startYear: 4000_000_000, endYear: 3600_000_000, color: "#4a425b" },
  { name: "Paleoarchean", startYear: 3600_000_000, endYear: 3200_000_000, color: "#4b4e6d" },
  { name: "Mesoarchean", startYear: 3200_000_000, endYear: 2800_000_000, color: "#5b6e80" },
  { name: "Neoarchean", startYear: 2800_000_000, endYear: 2500_000_000, color: "#6a8d92" },
  { name: "Siderian", startYear: 2500_000_000, endYear: 2300_000_000, color: "#759f92" },
  { name: "Rhyarcian", startYear: 2300_000_000, endYear: 2050_000_000, color: "#80b192" },
  { name: "Orosirian", startYear: 2050_000_000, endYear: 1800_000_000, color: "#91cd8d" },
  { name: "Statherian", startYear: 1800_000_000, endYear: 1600_000_000, color: "#a1e887" },
  { name: "Calymmian", startYear: 1600_000_000, endYear: 1400_000_000, color: "#493548" },
  { name: "Ectasian", startYear: 1400_000_000, endYear: 1200_000_000, color: "#4a425b" },
  { name: "Stenian", startYear: 1200_000_000, endYear: 1000_000_000, color: "#4b4e6d" },
  { name: "Tonian", startYear: 1000_000_000, endYear: 720_000_000, color: "#5b6e80" },
  { name: "Cryogenian", startYear: 720_000_000, endYear: 635_000_000, color: "#6a8d92" },
  { name: "Ediacaran", startYear: 635_000_000, endYear: 539_000_000, color: "#759f92" },
  { name: "Cambrian", startYear: 539_000_000, endYear: 485_000_000, color: "#80b192" },
  { name: "Ordovician", startYear: 485_000_000, endYear: 444_000_000, color: "#91cd8d" },
  { name: "Silurian", startYear: 444_000_000, endYear: 419_000_000, color: "#a1e887" },
  { name: "Devonian", startYear: 419_000_000, endYear: 359_000_000, color: "#493548" },
  { name: "Carboniferous", startYear: 359_000_000, endYear: 299_000_000, color: "#4a425b" },
  { name: "Permian", startYear: 299_000_000, endYear: 252_000_000, color: "#4b4e6d" },
  { name: "Triassic", startYear: 252_000_000, endYear: 201_000_000, color: "#5b6e80" },
  { name: "Jurassic", startYear: 201_000_000, endYear: 145_000_000, color: "#6a8d92" },
  { name: "Cretaceous", startYear: 145_000_000, endYear: 66_000_000, color: "#759f92" },
  { name: "Paleogene", startYear: 66_000_000, endYear: 23_030_000, color: "#80b192" },
  { name: "Neogene", startYear: 23_030_000, endYear: 2588_000, color: "#91cd8d" },
  { name: "Quaternary", startYear: 2588_000, endYear: 0, color: "#a1e887" },
];

export const eras: Era[] = rawEras.map((era) => ({
  ...era,
  widthPercent: calcWidthPercent(era),
}));

/**
 * Provides the duration of the era as a percentage of the age of the Earth
 */
function calcWidthPercent(era: Pick<Era, "startYear" | "endYear">): number {
  return (100 * (era.startYear - era.endYear)) / 4543_000_000;
}
