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
    year: '2560 BCE',
    kind: Kind.RANGE,
    category: Category.ARCHEOLOGICAL,
    range: 27
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
  {
    label: 'Hawaii settled',
    link: 'https://en.wikipedia.org/wiki/Hawaii#First_human_settlement_%E2%80%93_Ancient_Hawai%CA%BBi_(1000%E2%80%931778)',
    year: '1000 CE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Earliest North American Mound Complex',
    link: 'https://en.wikipedia.org/wiki/Watson_Brake',
    year: '3500 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Nanzhuangtou',
    link: 'https://en.wikipedia.org/wiki/Nanzhuangtou',
    year: '8700 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Oldest dated copper smelting',
    link: 'https://en.wikipedia.org/wiki/Chalcolithic',
    year: '5000 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Cultivation of barley and wheat',
    link: 'https://en.wikipedia.org/wiki/Prehistory#Neolithic',
    year: '7000 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Colosseum built',
    link: 'https://en.wikipedia.org/wiki/Colosseum',
    year: '70 CE',
    kind: Kind.RANGE,
    category: Category.ARCHEOLOGICAL,
    range: 10
  },
  {
    label: 'U.S. Slavery',
    link: 'https://en.wikipedia.org/wiki/Slavery_in_the_United_States',
    year: '1619 CE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 246
  },
];