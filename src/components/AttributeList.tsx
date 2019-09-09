import * as React from 'react';
import { Attribute } from '../types';
import { AttributeItem } from './AttributeItem';

type Props = {
  list: Attribute[];
};

export const AttributeList: React.FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map(attribute => (
        <li key={attribute.id}>
          <AttributeItem data={attribute} />
        </li>
      ))}
    </ul>
  );
};
