import * as React from 'react';
import { useElementActions } from './ElementContext';

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
      <input
        name="name"
        placeholder="name"
        type="text"
        value={name}
        onChange={onChange}
        required
        pattern="[a-zA-Z]+"
      />
      <button type="submit">create element</button>
    </form>
  );
};
