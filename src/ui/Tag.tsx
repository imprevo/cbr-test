import * as React from 'react';
import styles from './Tag.module.css';

type TagProps = {
  closed?: boolean;
  selfClosed?: boolean;
};

export const Tag: React.FC<TagProps> = ({ children, closed, selfClosed }) => (
  <span className={styles.tag}>
    {'<'}
    {closed && '/'}
    {children}
    {selfClosed && ' /'}
    {'>'}
  </span>
);

type AttributeProps = {
  name: string;
  value: string;
};

export const Attribute: React.FC<AttributeProps> = ({ name, value }) => (
  <span className={styles.attribute}>
    {' '}
    {name}="<span className={styles.value}>{value}</span>"
  </span>
);
