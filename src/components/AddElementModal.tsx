import * as React from 'react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { AddElementForm } from './AddElementForm';

export const AddElementModal: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const close = () => setShow(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>add element</Button>
      <Modal show={show} title="Add element" onClose={close}>
        <AddElementForm onClose={close} />
      </Modal>
    </>
  );
};
