import * as React from 'react';
import { ButtonIcon } from '../ui/ButtonIcon';
import { Tag, Attribute } from '../ui/Tag';
import { TElement } from '../types';
import { AddChildElementModal } from './AddChildElementModal';
import { EditElementModal } from './EditElementModal';
import styles from './ElementItem.module.css';

type Props = {
  data: TElement;
  onRemove: () => void;
};

export const ElementItem: React.FC<Props> = ({ children, data, onRemove }) => {
  const [open, setOpen] = React.useState(true);
  const onToggle = React.useCallback(() => setOpen(!open), [open, setOpen]);

  const { id, name, attributes } = data;
  const showOpen = open && children;

  return (
    <span className={styles.element}>
      <span className={styles.target}>
        {children && (
          <ButtonIcon
            name={open ? 'caret-down' : 'caret-right'}
            onClick={onToggle}
          />
        )}
        <Tag selfClosed={!showOpen}>
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
      {showOpen && (
        <>
          {children}
          <Tag closed>{name}</Tag>
        </>
      )}
    </span>
  );
};
