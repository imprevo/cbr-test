import * as React from 'react';
import { AttributeList } from './AttributeList';
import { TElement } from '../types';

type Props = {
  data: TElement;
  onRemove: () => void;
};

export const ElementItem: React.FC<Props> = ({ data, onRemove }) => {
  const { id, attributes } = data;
  return (
    <>
      <span>{id}</span>
      {attributes.length > 0 && <AttributeList list={attributes} />}
      <button onClick={onRemove}>remove</button>
    </>
  );
};
