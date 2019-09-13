import * as React from 'react';
import { useElementState } from '../element-core/ElementContext';
import { ElementList } from './ElementList';
import { JsonArray, JsonBlock } from '../../ui/Json';

export const ElementListJson: React.FC = () => {
  const { root } = useElementState();

  return (
    <JsonBlock>
      <JsonArray>{root.length > 0 && <ElementList list={root} />}</JsonArray>
    </JsonBlock>
  );
};
