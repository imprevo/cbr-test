export type Id = string;

export type Attribute = {
  id: Id;
  name: string;
  value: string;
};

export interface Element {
  id: Id;
  attributes: Attribute[];
  children: Element[];
}
