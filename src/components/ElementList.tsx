import * as React from 'react';
import { Element } from '../types';
import { ElementItem } from './ElementItem';

type Props = {
  list: Element[];
};

export const ElementList: React.FC<Props> = ({ list }) => {
  return (
    <ol>
      {list.map(element => (
        <li key={element.id}>
          <ElementItem data={element} />
          {element.children.length > 0 && (
            <ElementList list={element.children} />
          )}
        </li>
      ))}
    </ol>
  );
};
