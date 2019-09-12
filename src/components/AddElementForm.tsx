import * as React from 'react';
import { useElementActions } from './ElementContext';

export const AddElementForm = () => {
  const { add } = useElementActions();
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    add({ parentId: null });
  };
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">create element</button>
    </form>
  );
};
