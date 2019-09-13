import * as React from 'react';
import { TIdList, TId } from '../features/element-core/types';
import {
  useElementActions,
  useElementById,
} from '../features/element-core/ElementContext';
import { ElementItem } from './ElementItem';
import styles from './ElementList.module.css';

type ElementListProps = {
  list: TIdList;
};

export const ElementList: React.FC<ElementListProps> = ({ list }) => {
  return (
    <ul className={styles.list}>
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
    <ElementItem data={element} onRemove={onRemove}>
      {element.children.length > 0 && <ElementList list={element.children} />}
    </ElementItem>
  );
};
