import * as React from 'react';
import { ElementProvider } from './ElementContext';
import { ElementListRoot } from './ElementListRoot';
import { AddElementModal } from './AddElementModal';

export const App: React.FC = () => (
  <ElementProvider>
    <AddElementModal />
    <ElementListRoot />
  </ElementProvider>
);
