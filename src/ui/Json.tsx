import * as React from 'react';
import cn from 'classnames';
import styles from './Json.module.css';

export const JsonBlock: React.FC<{ name?: React.ReactNode }> = ({
  children,
  name,
}) => (
  <span className={cn(styles.block, styles.comma)}>
    {name && <JsonKey>{name}</JsonKey>}
    {children}
  </span>
);

export const JsonBlockPadded: React.FC = ({ children }) => (
  <span className={cn(styles.block, styles.padded)}>{children}</span>
);

export const JsonKey: React.FC = ({ children }) => <span>"{children}": </span>;

export const JsonString: React.FC = ({ children }) => (
  <span className={styles.string}>"{children}"</span>
);

export const JsonArray: React.FC = ({ children }) => (
  <span className={styles.comma}>
    <span>[</span>
    {children && <JsonBlockPadded>{children}</JsonBlockPadded>}
    <span>]</span>
  </span>
);

export const JsonObject: React.FC = ({ children }) => (
  <span className={styles.comma}>
    <span>{'{'}</span>
    {children && <JsonBlockPadded>{children}</JsonBlockPadded>}
    <span>{'}'}</span>
  </span>
);
