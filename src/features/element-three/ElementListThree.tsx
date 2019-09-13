import * as React from 'react';
import { useElementState } from '../element-core/ElementContext';
import { ElementList } from './ElementList';

export const ElementListThree: React.FC = () => {
  const { root } = useElementState();

  return <ElementList list={root} />;
};
