import * as React from 'react';
import { ElementProvider } from './ElementContext';
import { ElementListRoot } from './ElementListRoot';

export const App: React.FC = () => (
  <ElementProvider>
    <ElementListRoot />
  </ElementProvider>
);
