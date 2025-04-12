import React from 'react';
import styles from './ModalEliminar.module.css';

const ModalEliminar = ({ isOpen, onClose, onConfirm}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Eliminar tarjeta</h2>
        <p className={styles.text}>¿Estás seguro de que querés eliminar esta tarjeta</p>
        <div className={styles.buttons}>
          <button className={styles.delete} onClick={onConfirm}>Eliminar</button>
          <button className={styles.cancel} onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalEliminar
