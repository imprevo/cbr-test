import * as React from 'react';
import { ElementListThree } from '../element-three/ElementListThree';
import { ElementListJson } from '../element-json/ElementListJson';
import { Button } from '../../ui/Button';

export const ElementViewSwitcher: React.FC = () => {
  const [view, setView] = React.useState(true);
  const toggleView = React.useCallback(() => setView(!view), [view, setView]);
  return (
    <>
      <Button onClick={toggleView}>Change view</Button>
      {view ? <ElementListThree /> : <ElementListJson />}
    </>
  );
};
