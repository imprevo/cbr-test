import * as React from 'react';
import styles from './ButtonIcon.module.css';

type Props = {
  name: string;
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent) => void;
};

export const ButtonIcon: React.FC<Props> = ({
  name,
  type = 'button',
  onClick,
}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      <i className={`fa fa-${name}`} />
    </button>
  );
};
