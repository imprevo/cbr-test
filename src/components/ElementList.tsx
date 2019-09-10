import * as React from 'react';
import { TIdList } from '../types';
import { ElementItem } from './ElementItem';
import { useElementState, useElementAction } from './ElementContext';

type Props = {
  list: TIdList;
};

export const ElementList: React.FC<Props> = ({ list }) => {
  const { data } = useElementState();
  const { remove } = useElementAction();

  return (
    <ol>
      {list.map(id => {
        const element = data[id];
        return (
          <li key={id}>
            <ElementItem data={element} onRemove={remove} />
            {element.children.length > 0 && (
              <ElementList list={element.children} />
            )}
          </li>
        );
      })}
    </ol>
  );
};
