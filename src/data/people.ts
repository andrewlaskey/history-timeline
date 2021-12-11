import { Category, DataPoint, Kind } from "../types/DataPoint";

export const people: DataPoint[] = [
  {
    label: 'Ötzi the iceman',
    link: 'https://en.wikipedia.org/wiki/%C3%96tzi',
    year: '3275 BCE',
    kind: Kind.RANGE,
    category: Category.PERSON,
    range: 45
  },
  {
    label: 'Tutankhamun',
    link: 'https://en.wikipedia.org/wiki/Tutankhamun',
    year: '1341 BCE',
    kind: Kind.RANGE,
    category: Category.PERSON,
    range: 19
  },
  {
    label: 'Leonardo DaVinci',
    link: 'https://en.wikipedia.org/wiki/Leonardo_da_Vinci',
    year: '1452 CE',
    kind: Kind.RANGE,
    category: Category.PERSON,
    range: 67
  },
  {
    label: 'Cleopatra',
    link: 'https://en.wikipedia.org/wiki/Cleopatra',
    year: '69 BCE',
    kind: Kind.RANGE,
    category: Category.PERSON,
    range: 39
  },
  {
    label: 'Queen Victoria',
    link: 'https://en.wikipedia.org/wiki/Queen_Victoria',
    year: '1819 CE',
    kind: Kind.RANGE,
    category: Category.PERSON,
    range: 81
  },
];