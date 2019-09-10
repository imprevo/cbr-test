import * as React from 'react';
import { TAttributeList } from '../types';
import { AttributeItem } from './AttributeItem';

type Props = {
  list: TAttributeList;
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
