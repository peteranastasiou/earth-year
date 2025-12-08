import { DateTime } from "luxon";

// Dodgy way to compensate for current year changing
const CURRENT_YEAR = DateTime.now().year;
const MA = 1000_000; // Million

export interface PrehistoricEvent {
  name: string;
  year: number;
  endYear?: number;
  localDate?: string;
  link?: string;
}

export const events: PrehistoricEvent[] = [
  {
    name: "A Mars-sized body called Theia impacted the proto-Earth, creating debris which accreted to form the Moon",
    link: "https://en.wikipedia.org/wiki/Origin_of_the_Moon",
    year: 4425 * MA,
  },
  {
    name: "Earliest evidence of liquid water",
    link: "https://en.wikipedia.org/wiki/Origin_of_water_on_Earth",
    year: 4404 * MA,
  },
  {
    name: "Earliest known life form evidence captured in zircon grain",
    link: "https://en.wikipedia.org/wiki/Earliest_known_life_forms",
    year: 4100 * MA,
  },
  {
    name: "Late Heavy Bombardment starts",
    link: "https://en.wikipedia.org/wiki/Late_Heavy_Bombardment",
    year: 4100 * MA,
  },
  {
    name: "Late Heavy Bombardment ends",
    link: "https://en.wikipedia.org/wiki/Late_Heavy_Bombardment",
    year: 3800 * MA,
  },
  {
    name: "Earliest fossil evidence of photosynthesis",
    link: "https://en.wikipedia.org/wiki/Evolution_of_photosynthesis",
    year: 3400 * MA,
  },
  {
    name: "Start of the Huronian Glaciation",
    link: "https://en.wikipedia.org/wiki/Huronian_glaciation",
    year: 2500 * MA,
  },
  {
    name: "Start of the Great Oxidation Event",
    link: "https://en.wikipedia.org/wiki/Great_Oxidation_Event",
    year: 2460 * MA,
  },
  {
    name: "End of the Huronian Glaciation",
    link: "https://en.wikipedia.org/wiki/Huronian_glaciation",
    year: 2200 * MA,
  },
  {
    name: "Earliest evidence of photosynthesis found in cyanobacteria",
    year: 1750 * MA,
  },

  {
    name: "Major diversification of living things in the oceans: arthropods, molluscs, echinoderms, etc",
    year: 535 * MA,
  },
  { name: "First crustaceans", year: 511 * MA },
  { name: "Earliest known jellyfish", year: 500 * MA },
  { name: "Jawless fish", year: 485 * MA },
  { name: "First signs of teeth in fish", year: 410 * MA },
  { name: "Coelacanth", year: 409 * MA },
  { name: "First sharks", year: 400 * MA },
  {
    name: "First lichens, stoneworts, harvestmen, mites, hexapods (springtails) and ammonoids",
    year: 395 * MA,
  },
  {
    name: "Tiktaalik, a lobe-finned fish with some anatomical features similar to early tetrapods",
    year: 375 * MA,
  },
  {
    name: "Acanthostega is one of the earliest vertebrates capable of walking",
    year: 365 * MA,
  },
  { name: "First crabs and ferns", year: 360 * MA },
  { name: "First large sharks", year: 350 * MA },
  { name: "Diversification of amphibians", year: 350 * MA },
  { name: "First stem-reptiles", year: 335 * MA },
  {
    name: "Synapsids (proto-mammals) separate from sauropsids (reptiles)",
    year: 320 * MA,
  },
  {
    name: "Carboniferous rainforest collapse major extinction",
    year: 305 * MA,
  },
  { name: "Dimetrodon", year: 295 * MA, link: "https://en.wikipedia.org/wiki/Dimetrodon"},
  { name: "Earliest beetles", year: 280 * MA },
  {
    name: "Gorgonopsians",
    year: 265 * MA,
    link: "https://en.wikipedia.org/wiki/Gorgonopsia",
  },
  {
    name: "Moschops",
    year: 265 * MA,
    link: "https://en.wikipedia.org/wiki/Moschops",
  },
  {
    name: 'Permian-Triassic extinction event "The Great Dying". Extinction of 70% land vertibrates, 90% marine species. Probably volcanic eruptions.',
    year: 251.9 * MA,
  },
  {
    name: "Earliest known frog",
    year: 250 * MA,
    link: "https://en.wikipedia.org/wiki/Triadobatrachus",
  },

  // // AI generated, need checking
  // { name: "First dinosaurs appear", year: 225 * MA },
  // { name: "First true mammals appear", year: 225 * MA },
  // { name: "Pangaea begins to break apart", year: 200 * MA },
  // { name: "Sauropods and theropods diversify", year: 180 * MA },
  // { name: "First birds (Archaeopteryx) appear", year: 150 * MA },
  // { name: "Flowering plants (angiosperms) appear", year: 140 * MA },
  // { name: "Modern birds begin diversification", year: 120 * MA },
  // { name: "Tyrannosaurus rex exists", year: 68 * MA },
  // { name: "Cretaceous-Paleogene extinction event", year: 66 * MA },

  {
    name: "The Great Pyramid of Giza is constructed",
    year: 2560 + CURRENT_YEAR,
  },
  { name: "Use of Iron Spreads", year: 1100 + CURRENT_YEAR },
  { name: "First recorded Olympic Games", year: 776 + CURRENT_YEAR },
  { name: "Paper is invented in the Han dynasty", year: 200 + CURRENT_YEAR },
  { name: "Jesus is born", year: 4 + CURRENT_YEAR },
];
