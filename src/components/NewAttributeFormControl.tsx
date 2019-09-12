import * as React from 'react';
import { Input } from '../ui/Input';
import { FormRow } from '../ui/FormRow';
import { Button } from '../ui/Button';
import { InputGroup } from '../ui/InputGroup';

type Props = {
  onSubmit: (name: string, value: string) => void;
  onCancel: () => void;
};

export const NewAttributeFormControl: React.FC<Props> = ({
  onSubmit,
  onCancel,
}) => {
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');
  return (
    <FormRow label={`New attribute:`}>
      <InputGroup>
        <Input
          name={`new_attribute_name`}
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          pattern="[a-zA-Z][a-zA-Z0-9]+"
        />
        <Input
          name={`new_attribute_value`}
          placeholder="Enter value"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
          pattern="[a-zA-Z0-9]+"
        />
      </InputGroup>
      <InputGroup align="center">
        <Button onClick={() => onSubmit(name, value)}>Add</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </InputGroup>
    </FormRow>
  );
};
