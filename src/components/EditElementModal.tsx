import * as React from 'react';
import { ButtonIcon } from '../ui/ButtonIcon';
import { Modal } from '../ui/Modal';
import { EditElementForm } from './EditElementForm';
import { TId } from '../types';

type Props = {
  id: TId;
  name: string;
};

export const EditElementModal: React.FC<Props> = ({ id, name }) => {
  const [show, setShow] = React.useState(false);
  const close = React.useCallback(() => setShow(false), []);
  const open = React.useCallback(() => setShow(true), []);

  return (
    <>
      <ButtonIcon name="pen" onClick={open} />
      <Modal show={show} title={`Edit element - ${name}`} onClose={close}>
        <EditElementForm id={id} onClose={close} />
      </Modal>
    </>
  );
};
