import * as React from 'react';
import { Button } from '../ui/Button';
import { useElementActions, useElementById } from './ElementContext';
import { NameFormControl } from './NameFormControl';
import { TId } from '../types';

type Props = {
  id: TId;
  onClose: () => void;
};

export const EditElementForm: React.FC<Props> = ({ id, onClose }) => {
  const element = useElementById(id);
  const { edit } = useElementActions();
  const [name, setName] = React.useState(element.name);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      edit({ ...element, name: trimmedName });
      onClose();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <NameFormControl onChange={onChange} value={name} />
      <Button type="submit">edit element</Button>
    </form>
  );
};
