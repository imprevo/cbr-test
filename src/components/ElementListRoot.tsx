import * as React from 'react';
import { useElementState } from '../features/element-core/ElementContext';
import { ElementList } from './ElementList';

export const ElementListRoot: React.FC = () => {
  const { root } = useElementState();

  return <ElementList list={root} />;
};
