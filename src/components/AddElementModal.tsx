import * as React from 'react';
import { Modal } from '../ui/Modal';
import { AddElementForm } from './AddElementForm';

export const AddElementModal: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const close = () => setShow(false);
  return (
    <>
      <button onClick={() => setShow(true)}>add element</button>
      <Modal show={show} title="add" onClose={close}>
        <AddElementForm onClose={close} />
      </Modal>
    </>
  );
};
