import * as React from 'react';
import { Input } from '../../ui/Input';
import { FormRow } from '../../ui/FormRow';
import { InputGroup } from '../../ui/InputGroup';

type Props = {
  onChange: (name: string) => void;
  value: string;
  autoFocus?: boolean;
};

export const ValueFormControl: React.FC<Props> = ({
  onChange,
  value,
  autoFocus,
}) => {
  return (
    <FormRow label="Value:">
      <InputGroup>
        <Input
          name="value"
          placeholder="Enter value"
          value={value}
          onChange={e => onChange(e.target.value)}
          required
          pattern="[a-zA-Z0-9]+"
          autoFocus={autoFocus}
        />
      </InputGroup>
    </FormRow>
  );
};
