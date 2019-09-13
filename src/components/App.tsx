import * as React from 'react';
import { ElementProvider } from '../features/element-core/ElementContext';
import { AddElementModal } from '../features/element-form/AddElementModal';
import { ElementViewSwitcher } from '../features/element-view-switcher/ElementSwitcher';

export const App: React.FC = () => (
  <ElementProvider>
    <AddElementModal />
    <ElementViewSwitcher />
  </ElementProvider>
);
