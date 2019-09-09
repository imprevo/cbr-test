import * as React from 'react';
import { Attribute } from '../types';

type Props = {
  data: Attribute;
};

export const AttributeItem: React.FC<Props> = ({ data }) => {
  const { id, name, value } = data;
  return (
    <>
      [{id}] {name} = {value}
    </>
  );
};
