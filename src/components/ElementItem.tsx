import * as React from 'react';
import { Button } from '../ui/Button';
import { AttributeList } from './AttributeList';
import { TElement } from '../types';
import { EditElementModal } from './EditElementModal';

type Props = {
  data: TElement;
  onRemove: () => void;
};

export const ElementItem: React.FC<Props> = ({ data, onRemove }) => {
  const { id, name, attributes } = data;
  return (
    <>
      <span>{name}</span>
      {attributes.length > 0 && (
        <AttributeList elementId={id} list={attributes} />
      )}
      <EditElementModal id={id} name={name} />
      <Button onClick={onRemove}>remove</Button>
    </>
  );
};
