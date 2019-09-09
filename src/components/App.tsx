import React from 'react';
import { useElements } from '../hooks/useElements';
import { ElementList } from './ElementList';

export const App: React.FC = () => {
  const { state } = useElements();
  return <ElementList list={state.data} />;
};
