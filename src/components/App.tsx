import * as React from 'react';
import { ElementProvider } from './ElementContext';
import { ElementListRoot } from './ElementListRoot';
import { AddElementForm } from './AddElementForm';

export const App: React.FC = () => (
  <ElementProvider>
    <AddElementForm />
    <ElementListRoot />
  </ElementProvider>
);
