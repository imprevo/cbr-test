import * as React from 'react';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { AddElementForm } from './AddElementForm';

export const AddElementModal: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const close = React.useCallback(() => setShow(false), []);
  const open = React.useCallback(() => setShow(true), []);

  return (
    <>
      <Button onClick={open}>Create element</Button>
      <Modal show={show} title="Create element" onClose={close}>
        <AddElementForm onClose={close} />
      </Modal>
    </>
  );
};
