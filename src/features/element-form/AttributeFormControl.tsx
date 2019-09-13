import * as React from 'react';
import { Input } from '../../ui/Input';
import { FormRow } from '../../ui/FormRow';
import { Button } from '../../ui/Button';
import { InputGroup } from '../../ui/InputGroup';

type Props = {
  onChange: (name: string, value: string) => void;
  onDelete: (name: string) => void;
  name: string;
  value: string;
};

export const AttributeFormControl: React.FC<Props> = ({
  onChange,
  onDelete,
  value,
  name,
}) => {
  return (
    <FormRow label={`Attribute ${name}:`}>
      <InputGroup>
        <Input
          name={`attribute_${name}`}
          placeholder="Enter attribute value"
          value={value}
          onChange={e => onChange(name, e.target.value)}
          required
          pattern="[a-zA-Z0-9]+"
        />
        <Button onClick={() => onDelete(name)}>Delete</Button>
      </InputGroup>
    </FormRow>
  );
};
