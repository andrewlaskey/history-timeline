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
        year: '40000 BCE',
        range: 6000,
        category: Category.NATURE
    },
    {
        label: 'Homo erectus goes extinct',
        link: 'https://humanorigins.si.edu/research/whats-hot-human-origins/extinction-homo-erectus',
        kind: Kind.RANGE,
        year: '117000 BCE',
        range: 9000,
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
        label: 'Oldest found Homo sapiens remains',
        link: 'https://en.wikipedia.org/wiki/Jebel_Irhoud',
        kind: Kind.EVENT,
        year: '300000 BCE',
        category: Category.NATURE,
        visibleOnScale: [10, 50]
    },
    {
        label: 'Homo heidelbergensis',
        link: 'https://en.wikipedia.org/wiki/Homo_heidelbergensis',
        kind: Kind.RANGE,
        year: '590000 BCE',
        range: 300000,
        category: Category.NATURE
    },
    {
        label: 'Venus of Willendorf',
        link: 'https://en.wikipedia.org/wiki/Venus_of_Willendorf',
        kind: Kind.RANGE,
        year: '33000 BCE',
        range: 13000,
        category: Category.ARCHEOLOGICAL
    },
    {
        label: 'Lion-man',
        link: 'https://en.wikipedia.org/wiki/Lion-man',
        kind: Kind.RANGE,
        year: '41500 BCE',
        range: 6000,
        category: Category.ARCHEOLOGICAL
    },
    {
        label: 'Possible origin of Seven Sisters myth?',
        link: 'https://youtube.com/watch?v=_qyjKND3dAE&si=XW98ngaGLv8-Cdas',
        kind: Kind.EVENT,
        year: '100000 BCE',
        category: Category.NATURE,
        visibleOnScale: [10, 50]
    },
    {
        label: 'Last Glacial Maximum',
        link: 'https://en.wikipedia.org/wiki/Last_Glacial_Maximum',
        kind: Kind.RANGE,
        year: '26000 BCE',
        range: 6000,
        category: Category.NATURE
    },
    {
        label: 'Late Pleistocene',
        link: 'https://en.wikipedia.org/wiki/Late_Pleistocene',
        kind: Kind.RANGE,
        year: '129000 BCE',
        range: 117300,
        category: Category.POLITICAL
    },
    {
        label: 'Rising Star Cave H. naledi bones',
        link: 'https://en.wikipedia.org/wiki/Rising_Star_Cave',
        kind: Kind.RANGE,
        year: '335000 BCE',
        range: 99000,
        category: Category.NATURE
    },
];