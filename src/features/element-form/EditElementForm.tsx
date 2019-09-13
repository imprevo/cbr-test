import * as React from 'react';
import { Button } from '../../ui/Button';
import { InputGroup } from '../../ui/InputGroup';
import {
  useElementActions,
  useElementById,
} from '../element-core/ElementContext';
import { NameFormControl } from './NameFormControl';
import { TId, TAttribute } from '../element-core/types';
import { AttributeFormControl } from './AttributeFormControl';
import { AddAttributeModal } from './AddAttributeModal';

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
  const onAttributeAdd = (attribute: TAttribute) => {
    setAttributes(attributes.concat(attribute));
  };
  const onAttributeDelete = (name: string) => {
    setAttributes(attributes.filter(attribute => name !== attribute.name));
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

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
      <InputGroup align="center">
        <AddAttributeModal
          attributes={attributes}
          name={name}
          onSubmit={onAttributeAdd}
        />
      </InputGroup>
      <Button type="submit">Save</Button>
    </form>
  );
};
