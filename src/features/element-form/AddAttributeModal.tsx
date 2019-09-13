import * as React from 'react';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { AddAttributeForm } from './AddAttributeForm';
import { TAttributeList, TAttribute } from '../element-core/types';

type Props = {
  name: string;
  attributes: TAttributeList;
  onSubmit: (attribute: TAttribute) => void;
};

export const AddAttributeModal: React.FC<Props> = ({
  name,
  attributes,
  onSubmit,
}) => {
  const [show, setShow] = React.useState(false);
  const close = React.useCallback(() => setShow(false), []);
  const open = React.useCallback(() => setShow(true), []);

  return (
    <>
      <Button onClick={open}>Add attribute</Button>
      <Modal show={show} title={`Add attribute - ${name}`} onClose={close}>
        <AddAttributeForm
          attributes={attributes}
          onSubmit={onSubmit}
          onClose={close}
        />
      </Modal>
    </>
  );
};
