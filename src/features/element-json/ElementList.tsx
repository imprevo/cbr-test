import * as React from 'react';
import { TIdList, TId } from '../element-core/types';
import {
  useElementActions,
  useElementById,
} from '../element-core/ElementContext';
import { ElementItem } from './ElementItem';

type ElementListProps = {
  list: TIdList;
};

export const ElementList: React.FC<ElementListProps> = ({ list }) => {
  return (
    <>
      {list.map(id => (
        <ElementListItem key={id} id={id} />
      ))}
    </>
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
    <ElementItem data={element} onRemove={onRemove}>
      {element.children.length > 0 && <ElementList list={element.children} />}
    </ElementItem>
  );
};
