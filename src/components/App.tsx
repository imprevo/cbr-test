import * as React from 'react';
import { ElementProvider } from '../features/element-core/ElementContext';
import { ElementListRoot } from './ElementListRoot';
import { AddElementModal } from '../features/element-form/AddElementModal';

export const App: React.FC = () => (
  <ElementProvider>
    <AddElementModal />
    <ElementListRoot />
  </ElementProvider>
);
