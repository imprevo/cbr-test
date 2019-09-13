import * as React from 'react';
import { ElementProvider } from '../features/element-core/ElementContext';
import { ElementListRoot } from '../features/element-three/ElementListRoot';
import { AddElementModal } from '../features/element-form/AddElementModal';

export const App: React.FC = () => (
  <ElementProvider>
    <AddElementModal />
    <ElementListRoot />
  </ElementProvider>
);
