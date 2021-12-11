import { Category, DataPoint, Kind } from "../types/DataPoint";

export const states: DataPoint[] = [
  {
    label: 'Roman Empire',
    link: 'https://en.wikipedia.org/wiki/Roman_Empire',
    year: '27 BCE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 422
  },
  {
    label: 'Inca Empire',
    link: 'https://en.wikipedia.org/wiki/Inca_Empire',
    year: '1438 CE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 95
  },
  {
    label: 'Egypt Old Kingdom',
    link: 'https://en.wikipedia.org/wiki/Old_Kingdom_of_Egypt',
    year: '2686 BCE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 505
  },
];