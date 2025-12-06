import { DateTime } from "luxon";

// Dodgy way to compensate for current year changing
const CURRENT_YEAR = DateTime.now().year;


export interface PrehistoricEvent {
  name: string;
  year: number;
  endYear?: number;
  link?: string;
}

export const events: PrehistoricEvent[] = [
  {name: "A Mars-sized body called Theia impacted the proto-Earth, creating debris which accreted to form the Moon", link: "https://en.wikipedia.org/wiki/Origin_of_the_Moon", year: 4425_000_000 },
  {name: "Earliest evidence of liquid water", link: "https://en.wikipedia.org/wiki/Origin_of_water_on_Earth", year: 4404_000_000 },
  {name: "Earliest known life form evidence captured in zircon grain", link: "https://en.wikipedia.org/wiki/Earliest_known_life_forms", year: 4100_000_000 },
  {name: "Late Heavy Bombardment starts", link: "https://en.wikipedia.org/wiki/Late_Heavy_Bombardment", year: 4100_000_000 },
  {name: "Late Heavy Bombardment ends", link: "https://en.wikipedia.org/wiki/Late_Heavy_Bombardment", year: 3800_000_000 },
  {name: "Earliest fossil evidence of photosynthesis", link: "https://en.wikipedia.org/wiki/Evolution_of_photosynthesis", year: 3400_000_000 },
  {name: "Start of the Huronian Glaciation", link: "https://en.wikipedia.org/wiki/Huronian_glaciation", year: 2500_000_000 },
  {name: "Start of the Great Oxidation Event", link: "https://en.wikipedia.org/wiki/Great_Oxidation_Event", year: 2460_000_000 },
  {name: "End of the Huronian Glaciation", link: "https://en.wikipedia.org/wiki/Huronian_glaciation", year: 2200_000_000 },
  {name: "Earliest evidence of photosynthesis found in cyanobacteria", year: 1750_000_000 },

  // AI generated, need checking
  { "name": "Permian-Triassic extinction event", "year": 252_000_000 },
  { "name": "First dinosaurs appear", "year": 235000000 },
  { "name": "First true mammals appear", "year": 225000000 },
  { "name": "Pangaea begins to break apart", "year": 200000000 },
  { "name": "Sauropods and theropods diversify", "year": 180000000 },
  { "name": "First birds (Archaeopteryx) appear", "year": 150000000 },
  { "name": "Flowering plants (angiosperms) appear", "year": 140000000 },
  { "name": "Modern birds begin diversification", "year": 120000000 },
  { "name": "Tyrannosaurus rex exists", "year": 68000000 },
  { "name": "Cretaceous-Paleogene extinction event", "year": 66000000 },


  {name: "The Great Pyramid of Giza is constructed", year: 2560+CURRENT_YEAR },
  {name: "Use of Iron Spreads", year: 1100+CURRENT_YEAR },
  {name: "First recorded Olympic Games", year: 776+CURRENT_YEAR },
  {name: "Paper is invented in the Han dynasty", year: 200+CURRENT_YEAR },
  {name: "Jesus is born", year: 4+CURRENT_YEAR },
];

