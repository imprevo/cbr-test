import * as React from 'react';
import styles from './Button.module.css';

type Props = {
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent) => void;
};

export const Button: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
