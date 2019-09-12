import * as React from 'react';
import styles from './Input.module.css';

type Props = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  pattern: string;
};

export const Input: React.FC<Props> = ({
  name,
  placeholder,
  value,
  onChange,
  required,
  pattern,
}) => {
  return (
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
      required={required}
      pattern={pattern}
    />
  );
};
