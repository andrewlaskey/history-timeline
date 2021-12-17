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
    label: 'Roman Republic',
    link: 'https://en.wikipedia.org/wiki/Roman_Empire',
    year: '509 BCE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 482
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
  {
    label: 'Egypt Middle Kingdom',
    link: 'https://en.wikipedia.org/wiki/Middle_Kingdom_of_Egypt,
    year: '2055 BCE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 405
  },
  {
    label: 'Egypt New Kingdom',
    link: 'https://en.wikipedia.org/wiki/New_Kingdom_of_Egypt',
    year: '1550 BCE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 473
  },
  {
    label: 'Mongol Empire',
    link: 'https://en.wikipedia.org/wiki/Mongol_Empire',
    year: '1206 CE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 88
  },
  {
    label: 'First Persian Empire',
    link: 'https://en.wikipedia.org/wiki/Achaemenid_Empire',
    year: '553 BCE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 220
  }
];
