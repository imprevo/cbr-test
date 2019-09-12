import * as React from 'react';
import { Input } from '../ui/Input';
import { FormRow } from '../ui/FormRow';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const NameFormControl: React.FC<Props> = ({ onChange, value }) => {
  return (
    <FormRow label="Name:">
      <Input
        name="name"
        placeholder="Enter name"
        value={value}
        onChange={onChange}
        required
        pattern="[a-zA-Z][a-zA-Z0-9]+"
      />
    </FormRow>
  );
};
