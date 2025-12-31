import { DateTime } from "luxon";

// Dodgy way to compensate for current year changing
const CURRENT_YEAR = DateTime.now().year;
const MA = 1000_000; // Million

export interface PrehistoricEvent {
  name: string;
  year: number;
  endYear?: number;
  localDate?: string;
  isPast?: boolean;
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
  {
    name: "Perdepes",
    year: 348 * MA,
    link: "https://en.wikipedia.org/wiki/Pederpes",
  },
  {
    name: "Arthropleura",
    year: 345 * MA,
    link: "https://en.wikipedia.org/wiki/Arthropleura",
  },
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
  { name: "Estemmenosuchus", year: 267 * MA, link: "https://en.wikipedia.org/wiki/Estemmenosuchus" },
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
  {name: "Lystrosaurus", year: 255 * MA, link: "https://en.wikipedia.org/wiki/Lystrosaurus"},
  {
    name: 'Permian-Triassic extinction event "The Great Dying". Extinction of 70% land vertibrates, 90% marine species. Probably volcanic eruptions.',
    year: 251.9 * MA,
  },
  {name: "Ichthyopterygia", year: 251 * MA, link: "https://en.wikipedia.org/wiki/Ichthyopterygia"},
  {
    name: "Earliest known frog",
    year: 250 * MA,
    link: "https://en.wikipedia.org/wiki/Triadobatrachus",
  },
  {name: "Thalattoarchon", year: 244.6 * MA, link: "https://en.wikipedia.org/wiki/Thalattoarchon"},
  { name: "First true mammals appear", year: 225 * MA },
  {name: "Melanorosaurus", year: 216.5 * MA, link: "https://en.wikipedia.org/wiki/Melanorosaurus"},
  {name: "Plesiosaur", year: 203 * MA, link: "https://en.wikipedia.org/wiki/Plesiosaur"},
  { name: "Pangaea begins to break apart", year: 200 * MA },
  {name: "Mussaurus", year: 193 * MA, link: "https://en.wikipedia.org/wiki/Mussaurus"},
  {name: "Dilophosaurus", year: 186 * MA, link: "https://en.wikipedia.org/wiki/Dilophosaurus"},
  {name: "Omeisaurus", year: 168.2 * MA, link: "https://en.wikipedia.org/wiki/Omeisaurus"},
  {name: "Brachiosaurus", year: 155.6 * MA, link: "https://en.wikipedia.org/wiki/Brachiosaurus"},
  {name: "Stegosaurus", year: 155 * MA, link: "https://en.wikipedia.org/wiki/Stegosaurus"},
  {name: "Kentrosaurus", year: 152 * MA, link: "https://en.wikipedia.org/wiki/Kentrosaurus"},
  {name: "Diplodocus", year: 152.07 * MA, link: "https://en.wikipedia.org/wiki/Diplodocus"},
  {name: "Archaeopteryx", year: 150.8 * MA, link: "https://en.wikipedia.org/wiki/Archaeopteryx"},
  {name: "Flowering plants (angiosperms) appear", year: 140 * MA},
  {name: "Baryonyx", year: 130 * MA, link: "https://en.wikipedia.org/wiki/Baryonyx"},
  { name: "Birds begin diversification", year: 120 * MA, link: "https://en.wikipedia.org/wiki/Evolution_of_birds" },
  {name: "Deinonychus", year: 115 * MA, link: "https://en.wikipedia.org/wiki/Deinonychus"},
  {name: "Spinosaurus", year: 100 * MA, link: "https://en.wikipedia.org/wiki/Spinosaurus"},
  {name: "Giganotosaurus", year: 99.6 * MA, link: "https://en.wikipedia.org/wiki/Giganotosaurus"},
  {name: "Mosasaurus", year: 82.7 * MA, link: "https://en.wikipedia.org/wiki/Mosasaurus"},
  {name: "Velociraptor", year: 75 * MA, link: "https://en.wikipedia.org/wiki/Velociraptor"},
  {name: "Parasaurolophus", year: 76.5 * MA, link: "https://en.wikipedia.org/wiki/Parasaurolophus"},
  {name: "Tyrannosaurus", year: 69 * MA, link: "https://en.wikipedia.org/wiki/Tyrannosaurus"},
  {name: "Triceratops", year: 68 * MA, link: "https://en.wikipedia.org/wiki/Triceratops"},
  {name: "Ankylosaurus", year: 68 * MA, link: "https://en.wikipedia.org/wiki/Ankylosaurus"},
  {name: "Quetzalcoatlus", year: 68 * MA, link: "https://en.wikipedia.org/wiki/Quetzalcoatlus"},
  {name: "The Cretaceous-Paleogene extinction event (asteroid collision) ends the dinosaur age", year: 66 * MA, link: "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event"},
  {name: "Purgatorius", year: 65 * MA, link: "https://en.wikipedia.org/wiki/Purgatorius"},
  {name: "First grasses", year: 65 * MA, link: "https://en.wikipedia.org/wiki/Poaceae"},
  {name: "Titanoboa", year: 60 * MA, link: "https://en.wikipedia.org/wiki/Titanoboa"},
  {name: "Barylambda", year: 60 * MA, link: "https://en.wikipedia.org/wiki/Barylambda"},

  {name: "Australia splits from Antarctica", year: 53 * MA, link: "https://en.wikipedia.org/wiki/Antarctica"},
  {name: "Palaeotherium", year: 43.5 * MA, link: "https://en.wikipedia.org/wiki/Palaeotherium"},
  {name: "Basilosaurus", year: 41.3 * MA, link: "https://en.wikipedia.org/wiki/Basilosaurus"},
  {name: "Antarctica ices over", year: 34 * MA},
  {name: "Australopithecus", year: 4 *MA},
  {name: "Diprotodon", year: 2.5 * MA, link: "https://en.wikipedia.org/wiki/Diprotodon"},
  {name: "Thylacoleo", year: 1.77 * MA, link: "https://en.wikipedia.org/wiki/Thylacoleo"},
  {name: "Woolly Mammoth", year: 0.4 * MA, link: "https://en.wikipedia.org/wiki/Woolly_mammoth"},

  {name: "Neanderthals", year: 0.24*MA},
  
  {name: "Early Homo sapiens appear in Africa", year: 300_000},
  {name: "Extinction of Neanderthals ", year: 0.04*MA},
  {name: "End of the Last Ice Age", year: 12_000},
  {
    name: "The Great Pyramid of Giza is constructed (2560 BCE)",
    year: 2560 + CURRENT_YEAR,
  },
  { name: "Use of Iron Spreads (1100 BCE)", year: 1100 + CURRENT_YEAR },
  { name: "First recorded Olympic Games (776 BCE)", year: 776 + CURRENT_YEAR },
  { name: "Paper is invented in the Han dynasty (200 BCE)", year: 200 + CURRENT_YEAR },
  { name: "Jesus is born (~4 CE)", year: 4 + CURRENT_YEAR },
  { name: "Fall of the Western Roman Empire (476 CE)", year: CURRENT_YEAR - 476 },
  { name: "European Renaissance (~1400 CE)", year: CURRENT_YEAR - 1400 },
  { name: "Industrial Revolution (1760 CE)", year: CURRENT_YEAR - 1760 },
  { name: `Present day (${CURRENT_YEAR} CE)`, year: 0 },
];
