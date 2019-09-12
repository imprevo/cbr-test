import * as React from 'react';
import { AddElementForm } from './AddElementForm';
import { Modal } from './Modal';

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
