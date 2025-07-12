import React from 'react';
import styles from './EntryScreen.module.css';

// 1. El componente ahora recibe la prop 'onEnter'
const Preloader = ({ onEnter }) => {
  return (
    // 2. Añadimos el evento onClick al div principal
    <div className={styles.preloader} onClick={onEnter}>
      <div className={styles.name}>
        <span>L</span>
        <span>F</span>
        <span>C</span>
        <span>M</span>
      </div>
      <div className={styles.instructions}>
        Click to continue
      </div>
    </div>
  );
};

export default Preloader;