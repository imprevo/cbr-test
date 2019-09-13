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
  const [open, setOpen] = React.useState(true);
  const onToggle = React.useCallback(() => setOpen(!open), [open, setOpen]);

  return (
    <ElementItem
      data={element}
      onRemove={onRemove}
      open={open}
      onToggle={onToggle}
    >
      {element.children.length > 0 && <ElementList list={element.children} />}
    </ElementItem>
  );
};
