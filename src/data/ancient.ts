import { Category, DataPoint, Kind } from "../types/DataPoint";

export const ancient: DataPoint[] = [
    {
        label: 'Humans reach Australia',
        link: 'https://en.wikipedia.org/wiki/Prehistory_of_Australia',
        kind: Kind.RANGE,
        year: '65000 BCE',
        range: 15000,
        category: Category.ARCHEOLOGICAL
    },
    {
        label: 'Humans settle the Americas',
        link: 'https://en.wikipedia.org/wiki/Peopling_of_the_Americas',
        kind: Kind.RANGE,
        year: '20000 BCE',
        range: 5000,
        category: Category.ARCHEOLOGICAL
    },
    {
        label: 'Homo florensiensis goes extinct',
        link: 'https://en.wikipedia.org/wiki/Homo_floresiensis',
        kind: Kind.RANGE,
        year: '60000 BCE',
        range: 10000,
        category: Category.NATURE
    },
    {
        label: 'Neanderthal goes extinct',
        link: 'https://en.wikipedia.org/wiki/Neanderthal_extinction',
        kind: Kind.RANGE,
        year: '41000 BCE',
        range: 6000,
        category: Category.NATURE
    },
    {
        label: 'Lascaux cave paintings',
        link: 'https://en.wikipedia.org/wiki/Lascaux',
        kind: Kind.RANGE,
        year: '22000 BCE',
        range: 5000,
        category: Category.ARCHEOLOGICAL
    },
    {
        label: 'Homo sapiens',
        link: 'https://en.wikipedia.org/wiki/Human#Evolution',
        kind: Kind.RANGE,
        year: '300000 BCE',
        range: 300000,
        category: Category.NATURE
    },
    {
        label: 'Homo heidelbergensis',
        link: 'https://en.wikipedia.org/wiki/Homo_heidelbergensis',
        kind: Kind.RANGE,
        year: '590000 BCE',
        range: 300000,
        category: Category.NATURE
    }
];