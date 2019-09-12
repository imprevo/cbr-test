import * as React from 'react';
import { Button } from '../ui/Button';
import { useElementActions, useElementById } from './ElementContext';
import { NameFormControl } from './NameFormControl';
import { TId } from '../types';
import { AttributeFormControl } from './AttributeFormControl';

type Props = {
  id: TId;
  onClose: () => void;
};

export const EditElementForm: React.FC<Props> = ({ id, onClose }) => {
  const element = useElementById(id);
  const { edit } = useElementActions();
  const [name, setName] = React.useState(element.name);
  const [attributes, setAttributes] = React.useState(element.attributes);
  const onAttributeValueChange = (name: string, value: string) => {
    setAttributes(
      attributes.map(attribute =>
        name === attribute.name ? { ...attribute, value: value } : attribute
      )
    );
  };
  const onAttributeDelete = (name: string) => {
    setAttributes(attributes.filter(attribute => name !== attribute.name));
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      edit({ ...element, attributes, name: trimmedName });
      onClose();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <NameFormControl onChange={setName} value={name} autoFocus />
      {attributes.map((attribute, index) => (
        <AttributeFormControl
          key={index}
          name={attribute.name}
          value={attribute.value}
          onChange={onAttributeValueChange}
          onDelete={onAttributeDelete}
        />
      ))}
      <Button type="submit">Save</Button>
    </form>
  );
};
