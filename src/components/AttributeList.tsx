import * as React from 'react';
import { TAttributeList, TId } from '../types';
import { AttributeItem } from './AttributeItem';

type Props = {
  list: TAttributeList;
  elementId: TId;
};

export const AttributeList: React.FC<Props> = ({ list, elementId }) => {
  return (
    <ol>
      {list.map(attribute => (
        <li key={attribute.id}>
          <AttributeItem data={attribute} elementId={elementId} />
        </li>
      ))}
    </ol>
  );
};
