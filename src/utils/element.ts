import { TId, TIdList, TElementRecord } from '../types';

export function isOneOfList(key: TId, list: TIdList): boolean {
  return list.some(id => id === key);
}

export function findAllChildIds(data: TElementRecord, id: TId): TIdList {
  const element = data[id];

  if (!element) {
    return [];
  }

  const { children } = element;

  if (!children.length) {
    return children;
  }

  const childrenOfChildren = children.map(id => findAllChildIds(data, id));

  return children.concat(...childrenOfChildren);
}

export function removeChildById(obj: TElementRecord, key: TId): TElementRecord {
  if (!obj[key]) {
    return obj;
  }

  const allRemovedIds = [key].concat(findAllChildIds(obj, key));

  return Object.values(obj).reduce<TElementRecord>((acc, element) => {
    if (!isOneOfList(element.id, allRemovedIds)) {
      acc[element.id] = {
        ...element,
        children: element.children.filter(
          childId => !isOneOfList(childId, allRemovedIds)
        ),
      };
    }
    return acc;
  }, {});
}
