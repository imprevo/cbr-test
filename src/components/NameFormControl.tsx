import * as React from 'react';
import { Input } from '../ui/Input';
import { FormRow } from '../ui/FormRow';
import { InputGroup } from '../ui/InputGroup';

type Props = {
  onChange: (name: string) => void;
  value: string;
  autoFocus?: boolean;
};

export const NameFormControl: React.FC<Props> = ({
  onChange,
  value,
  autoFocus,
}) => {
  return (
    <FormRow label="Name:">
      <InputGroup>
        <Input
          name="name"
          placeholder="Enter name"
          value={value}
          onChange={e => onChange(e.target.value)}
          required
          pattern="[a-zA-Z][a-zA-Z0-9]+"
          autoFocus={autoFocus}
        />
      </InputGroup>
    </FormRow>
  );
};
