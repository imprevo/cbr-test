import * as React from 'react';
import { AttributeList } from './AttributeList';
import { TElement } from '../types';

type Props = {
  data: TElement;
};

export const ElementItem: React.FC<Props> = ({ data }) => {
  const { id, attributes } = data;
  return (
    <>
      <span>{id}</span>
      {attributes.length > 0 && <AttributeList list={attributes} />}
    </>
  );
};
