import * as React from 'react';
import styles from './InputGroup.module.css';

export const InputGroup: React.FC = ({ children }) => {
  return <div className={styles.input}>{children}</div>;
};
