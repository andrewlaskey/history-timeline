import { Category, DataPoint, Kind } from "../types/DataPoint";

export const events: DataPoint[] = [
  {
    label: 'Göbekli Tepe',
    link: 'https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe',
    year: '9500 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Doggerland submerged',
    link: 'https://en.wikipedia.org/wiki/Doggerland',
    year: '6500 BCE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Giza Pyramid built',
    link: 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',
    year: '2600 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Megalithic Temples of Malta',
    link: 'https://en.wikipedia.org/wiki/Megalithic_Temples_of_Malta',
    year: '3600 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'World War II',
    link: 'https://en.wikipedia.org/wiki/World_War_II',
    year: '1939 CE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 6
  },
  {
    label: 'Moon Landing',
    link: 'https://en.wikipedia.org/wiki/Moon_landing',
    year: '1969 CE',
    kind: Kind.EVENT,
    category: Category.POLITICAL
  },
  {
    label: 'Pompeii eruption',
    link: 'https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79_AD',
    year: '79 CE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Minoan eruption',
    link: 'https://en.wikipedia.org/wiki/Minoan_eruption',
    year: '1642 BCE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
];