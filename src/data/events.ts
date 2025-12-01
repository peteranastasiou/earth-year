import { DateTime } from "luxon";

// Dodgy way to compensate for current year changing
const CURRENT_YEAR = DateTime.now().year;


export interface PrehistoricEvent {
  name: string;
  year: number;
}

export const events: PrehistoricEvent[] = [
  {name: "Earliest evidence of liquid water", year: 4401_000_000 },
  {name: "Earliest fossil evidence of photosynthesis", year: 3400_000_000 },
  {name: "O2 depletes greenhouse gases. Start of the Huronian Glaciation", year: 2500_000_000 },

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

