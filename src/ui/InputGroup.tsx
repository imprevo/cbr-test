import * as React from 'react';
import cn from 'classnames/bind';
import styles from './InputGroup.module.css';

const cx = cn.bind(styles);

type Props = {
  align?: 'center' | 'between';
};

export const InputGroup: React.FC<Props> = ({
  children,
  align = 'between',
}) => {
  return <div className={cx('input-group', `align-${align}`)}>{children}</div>;
};
