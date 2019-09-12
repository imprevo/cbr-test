import * as React from 'react';
import { Input } from '../ui/Input';
import { FormRow } from '../ui/FormRow';
import { Button } from '../ui/Button';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
};

export const AttributeFormControl: React.FC<Props> = ({
  onChange,
  value,
  name,
}) => {
  return (
    <FormRow label={`Attribute ${name}:`}>
      <Input
        name={`attribute_${name}`}
        placeholder="Enter attribute value"
        value={value}
        onChange={onChange}
        required
        pattern="[a-zA-Z0-9]+"
      />
    </FormRow>
  );
};
