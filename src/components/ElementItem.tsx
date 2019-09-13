import * as React from 'react';
import { ButtonIcon } from '../ui/ButtonIcon';
import { Tag, Attribute } from '../ui/Tag';
import { TElement } from '../types';
import { AddChildElementModal } from './AddChildElementModal';
import { EditElementModal } from './EditElementModal';
import styles from './ElementItem.module.css';

type Props = {
  data: TElement;
  open: boolean;
  onRemove: () => void;
  onToggle: () => void;
};

export const ElementItem: React.FC<Props> = ({
  children,
  data,
  onRemove,
  onToggle,
  open,
}) => {
  const { id, name, attributes } = data;
  return (
    <span className={styles.element}>
      <span className={styles.target}>
        {children && (
          <ButtonIcon
            name={open ? 'caret-down' : 'caret-right'}
            onClick={onToggle}
          />
        )}
        <Tag selfClosed={!open}>
          {name}
          {attributes.map(({ id, name, value }) => (
            <Attribute key={id} name={name} value={value} />
          ))}
        </Tag>
        <span className={styles.buttons}>
          <AddChildElementModal id={id} name={name} />
          <EditElementModal id={id} name={name} />
          <ButtonIcon name="trash" onClick={onRemove} />
        </span>
      </span>
      {open && (
        <>
          {children}
          <Tag closed>{name}</Tag>
        </>
      )}
    </span>
  );
};
