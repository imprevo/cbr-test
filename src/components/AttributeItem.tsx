import * as React from 'react';
import { TAttribute } from '../types';

type Props = {
  data: TAttribute;
};

export const AttributeItem: React.FC<Props> = ({ data }) => {
  const { id, name, value } = data;
  return (
    <>
      [{id}] {name} = {value}
    </>
  );
};
