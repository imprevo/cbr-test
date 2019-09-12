import * as React from 'react';
import { Button } from '../ui/Button';
import { useElementActions } from './ElementContext';
import { NameFormControl } from './NameFormControl';

type Props = {
  onClose: () => void;
};

export const AddElementForm: React.FC<Props> = ({ onClose }) => {
  const { add } = useElementActions();
  const [name, setName] = React.useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      add({ parentId: null, name: trimmedName });
      onClose();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <NameFormControl onChange={onChange} value={name} autoFocus />
      <Button type="submit">create element</Button>
    </form>
  );
};
