import { Category, DataPoint, Kind } from "../types/DataPoint";

export const events: DataPoint[] = [
  {
    label: 'Göbekli Tepe',
    link: 'https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe',
    year: '9510 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL,
    visibleOnScale: [10,50]
  },
  {
    label: 'Doggerland submerged',
    link: 'https://en.wikipedia.org/wiki/Doggerland',
    year: '6520 BCE',
    kind: Kind.EVENT,
    category: Category.NATURE,
    visibleOnScale: [10,50]
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
    year: '3605 BCE',
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
    category: Category.ARCHEOLOGICAL
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
    year: '1014 CE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Earliest North American Mound Complex',
    link: 'https://en.wikipedia.org/wiki/Watson_Brake',
    year: '3507 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Nanzhuangtou',
    link: 'https://en.wikipedia.org/wiki/Nanzhuangtou',
    year: '8706 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Oldest dated copper smelting',
    link: 'https://en.wikipedia.org/wiki/Chalcolithic',
    year: '5020 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Domestication of wheat',
    link: 'https://en.wikipedia.org/wiki/Einkorn',
    year: '8650 BCE',
    kind: Kind.RANGE,
    category: Category.ARCHEOLOGICAL,
    range: 700
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
  {
    label: 'Earliest evidence steel making',
    link: 'https://en.wikipedia.org/wiki/Kaman-Kaleh%C3%B6y%C3%BCk',
    year: '1800 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Circumference of Earth calculated',
    link: 'https://en.wikipedia.org/wiki/Earth%27s_circumference',
    year: '240 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Earliest written sources of Gilgamesh epic',
    link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh',
    year: '2100 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
    {
    label: 'Kish tablet: oldest written document',
    link: 'https://en.wikipedia.org/wiki/Kish_tablet',
    year: '3200 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Magellan Expedition',
    link: 'https://en.wikipedia.org/wiki/Magellan_expedition',
    year: '1519 CE',
    kind: Kind.RANGE,
    category: Category.POLITICAL,
    range: 3
  },
  {
    label: 'Last mammoths go extinct',
    link: 'https://en.wikipedia.org/wiki/Wrangel_Island',
    year: '2000 BCE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Byblos: oldest continuously inhabited settlement',
    link: 'https://en.wikipedia.org/wiki/Byblos',
    year: '8025 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'End of African humid period',
    link: 'https://en.wikipedia.org/wiki/African_humid_period',
    year: '3400 BCE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Iliad composed',
    link: 'https://en.wikipedia.org/wiki/Iliad#Date_and_textual_history',
    year: '800 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Destruction of Troy VIIa',
    link: 'https://en.wikipedia.org/wiki/Late_Bronze_Age_Troy',
    year: '1180 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Horse domestication',
    link: 'https://en.wikipedia.org/wiki/Domestication_of_the_horse',
    year: '3495 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Beowulf composed',
    link: 'https://en.wikipedia.org/wiki/Beowulf',
    year: '975 CE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Canterbury Tales written',
    link: 'https://en.wikipedia.org/wiki/The_Canterbury_Tales',
    year: '1387 CE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'University of Oxford founded',
    link: 'https://en.wikipedia.org/wiki/University_of_Oxford',
    year: '1096 CE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Eiffel Tower built',
    link: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
    year: '1887 CE',
    kind: Kind.RANGE,
    category: Category.ARCHEOLOGICAL,
    range: 2
  },
  {
    label: 'Bronze Age Collapse',
    link: 'https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse',
    year: '1203 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Stonehenge 3 II',
    link: 'https://en.wikipedia.org/wiki/Stonehenge#Stonehenge_3_II_(2600_BC_to_2400_BC)',
    year: '2590 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Terracotta Army',
    link: 'https://en.wikipedia.org/wiki/Terracotta_Army',
    year: '210 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Uruk peaks at ~40,000 residents',
    link: 'https://en.wikipedia.org/wiki/Uruk',
    year: '3084 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Plague of Justinian',
    link: 'https://en.wikipedia.org/wiki/Plague_of_Justinian',
    year: '541 CE',
    kind: Kind.RANGE,
    category: Category.NATURE,
    range: 8
  },
  {
    label: 'The Black Death',
    link: 'https://en.wikipedia.org/wiki/Black_Death',
    year: '1346 CE',
    kind: Kind.RANGE,
    category: Category.NATURE,
    range: 7
  },
  {
    label: 'First powered flight',
    link: 'https://en.wikipedia.org/wiki/Wright_brothers#First_powered_flight',
    year: '1903 CE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Methuselah Tree',
    link: 'https://en.wikipedia.org/wiki/Methuselah_(pine_tree)',
    year: '2833 BCE',
    kind: Kind.RANGE,
    category: Category.NATURE,
    range: 4856
  },
  {
    label: 'Cascadia Earthquake',
    link: 'https://en.wikipedia.org/wiki/1700_Cascadia_earthquake',
    year: '1700 CE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Elephant bird goes extinct',
    link: 'https://en.wikipedia.org/wiki/Elephant_bird',
    year: '1028 CE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Horses go extinct in Americas',
    link: 'https://en.wikipedia.org/wiki/Horses_in_the_United_States',
    year: '8275 BCE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Oldest recorded supernova',
    link: 'https://en.wikipedia.org/wiki/History_of_supernova_observation',
    year: '185 CE',
    kind: Kind.EVENT,
    category: Category.NATURE
  },
  {
    label: 'Moai statue carving tradition',
    link: 'https://en.wikipedia.org/wiki/Moai',
    year: '1250 CE',
    kind: Kind.RANGE,
    category: Category.ARCHEOLOGICAL,
    range: 250
  },
  {
    label: 'Iron pillar of Delhi',
    link: 'https://en.wikipedia.org/wiki/Iron_pillar_of_Delhi',
    year: '399 CE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Start of Mayan Long Count Calendar',
    link: 'https://en.wikipedia.org/wiki/Maya_calendar#Long_Count',
    year: '3114 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL
  },
  {
    label: 'Machu Picchu occupied',
    link: 'https://en.wikipedia.org/wiki/Machu_Picchu',
    year: '1438 CE',
    kind: Kind.RANGE,
    category: Category.ARCHEOLOGICAL,
    range: 34
  },
  {
    label: 'North American megafauna extinctions',
    link: 'https://en.wikipedia.org/wiki/Late_Pleistocene_extinctions#North_America',
    year: '10000 BCE',
    kind: Kind.RANGE,
    category: Category.NATURE,
    range: 2400
  },
  {
    label: 'Domestication of Maize',
    link: 'https://en.wikipedia.org/wiki/Maize',
    year: '7000 BCE',
    kind: Kind.EVENT,
    category: Category.ARCHEOLOGICAL,
    visibleOnScale: [10, 50]
  },
];
