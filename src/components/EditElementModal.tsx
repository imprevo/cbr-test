import * as React from 'react';
import { Modal } from './Modal';
import { EditElementForm } from './EditElementForm';
import { TId } from '../types';

type Props = {
  id: TId;
  name: string;
};

export const EditElementModal: React.FC<Props> = ({ id, name }) => {
  const [show, setShow] = React.useState(false);
  const close = () => setShow(false);

  return (
    <>
      <button onClick={() => setShow(true)}>edit element</button>
      <Modal show={show} title={`edit ${name}`} onClose={close}>
        <EditElementForm id={id} onClose={close} />
      </Modal>
    </>
  );
};
