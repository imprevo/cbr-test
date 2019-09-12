import * as React from 'react';
import styles from './FormRow.module.css';

type Props = {
  label: React.ReactNode;
};

export const FormRow: React.FC<Props> = ({ children, label }) => {
  return (
    <label className={styles.label}>
      {label}
      {children}
    </label>
  );
};
