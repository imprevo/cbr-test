import * as React from 'react';
import { Button } from '../ui/Button';
import { ButtonIcon } from '../ui/ButtonIcon';
import { Modal } from '../ui/Modal';
import { AddElementForm } from './AddElementForm';
import { TId } from '../types';

type Props = {
  id: TId;
  name: TId;
};

export const AddChildElementModal: React.FC<Props> = ({ id, name }) => {
  const [show, setShow] = React.useState(false);
  const close = React.useCallback(() => setShow(false), []);
  const open = React.useCallback(() => setShow(true), []);

  return (
    <>
      <ButtonIcon name="plus" onClick={open} />
      <Modal
        show={show}
        title={`Create child for element ${name}`}
        onClose={close}
      >
        <AddElementForm id={id} onClose={close} />
      </Modal>
    </>
  );
};
