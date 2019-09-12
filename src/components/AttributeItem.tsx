import * as React from 'react';
import { TAttribute, TId } from '../types';
import { useAttributeActions } from './ElementContext';

type Props = {
  data: TAttribute;
  elementId: TId;
};

export const AttributeItem: React.FC<Props> = ({ data, elementId }) => {
  const { remove } = useAttributeActions();
  const { id, name, value } = data;
  return (
    <>
      [{id}] {name} = {value}
      <button onClick={() => remove(elementId, id)}>remove</button>
    </>
  );
};
