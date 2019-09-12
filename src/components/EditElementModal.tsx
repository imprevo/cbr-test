import * as React from 'react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
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
      <Button onClick={() => setShow(true)}>edit element</Button>
      <Modal show={show} title={`Edit element - ${name}`} onClose={close}>
        <EditElementForm id={id} onClose={close} />
      </Modal>
    </>
  );
};
