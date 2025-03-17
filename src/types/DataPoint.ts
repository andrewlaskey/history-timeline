export enum Kind {
  EVENT = 'event',
  RANGE = 'range'
}

export enum Category {
  PERSON = 'person',
  NATURE = 'nature',
  POLITICAL = 'political',
  ARCHEOLOGICAL = 'archeological'
}

export interface DataPoint {
  label: string;
  year: string;
  range?: number;
  kind: Kind
  category: Category
  link?: string;
  visibleOnScale?: number[];
}