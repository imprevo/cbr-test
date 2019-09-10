export type TId = string;

export type TIdList = TId[];

export type TAttribute = {
  id: TId;
  name: string;
  value: string;
};

export type TAttributeList = TAttribute[];

export type TElement = {
  id: TId;
  attributes: TAttributeList;
  children: TIdList;
};

export type TElementRecord = Record<TId, TElement>;

export type TElementData = {
  data: TElementRecord;
  root: TIdList;
};
