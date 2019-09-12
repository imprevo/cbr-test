import * as React from 'react';
import { TIdList, TId } from '../types';
import { ElementItem } from './ElementItem';
import { useElementActions, useElementById } from './ElementContext';

type ElementListProps = {
  list: TIdList;
};

export const ElementList: React.FC<ElementListProps> = ({ list }) => {
  return (
    <ul>
      {list.map(id => (
        <li key={id}>
          <ElementListItem id={id} />
        </li>
      ))}
    </ul>
  );
};

type ElementListItemProps = {
  id: TId;
};

export const ElementListItem: React.FC<ElementListItemProps> = ({ id }) => {
  const element = useElementById(id);
  const { remove } = useElementActions();
  const onRemove = React.useCallback(() => remove(id), [remove, id]);

  return (
    <>
      <ElementItem data={element} onRemove={onRemove} />
      {element.children.length > 0 && <ElementList list={element.children} />}
    </>
  );
};
