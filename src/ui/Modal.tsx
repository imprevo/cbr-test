import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type Props = {
  show: boolean;
  title: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({ children, show, title, onClose }) => {
  React.useEffect(() => {
    if (!show) {
      return;
    }
    function onEsc(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.shadow} />
      <div className={styles.dialog}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.close} type="button" onClick={onClose} />
        {children}
      </div>
    </div>,
    document.body
  );
};
