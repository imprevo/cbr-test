import * as React from 'react';
import { useElementActions, useElementById } from './ElementContext';
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
      <input
        name="name"
        placeholder="name"
        type="text"
        value={name}
        onChange={onChange}
        required
        pattern="[a-zA-Z][a-zA-Z0-9]+"
      />
      <button type="submit">edit element</button>
    </form>
  );
};
