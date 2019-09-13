import * as React from 'react';
import nanoid from 'nanoid';
import { Button } from '../ui/Button';
import { InputGroup } from '../ui/InputGroup';
import { NameFormControl } from './NameFormControl';
import { ValueFormControl } from './ValueFormControl';
import { TAttributeList, TAttribute } from '../types';

type Props = {
  attributes: TAttributeList;
  onSubmit: (attribute: TAttribute) => void;
  onClose: () => void;
};

export const AddAttributeForm: React.FC<Props> = ({
  attributes,
  onSubmit,
  onClose,
}) => {
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const trimmedName = name.trim();
    const trimmedValue = value.trim();

    if (
      trimmedName &&
      trimmedValue &&
      !attributes.some(attribute => attribute.name === name)
    ) {
      onSubmit({ id: nanoid(), name, value });
      onClose();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <NameFormControl value={name} onChange={setName} autoFocus />
      <ValueFormControl value={value} onChange={setValue} />
      <InputGroup align="between">
        <Button type="submit">Add</Button>
        <Button onClick={onClose}>Cancel</Button>
      </InputGroup>
    </form>
  );
};
