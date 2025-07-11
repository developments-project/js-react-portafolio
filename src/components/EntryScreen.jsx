import React from 'react';
import styles from './EntryScreen.module.css';

// 1. El componente ahora recibe la prop 'onEnter'
const Preloader = ({ onEnter }) => {
  return (
    // 2. Añadimos el evento onClick al div principal
    <div className={styles.preloader} onClick={onEnter}>
      <div className={styles.name}>
        <span>L</span>
        <span>E</span>
        <span>O</span>
        <span>N</span>
        <span> </span>
        <span>F</span>
        <span>E</span>
        <span>R</span>
        <span>N</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>O</span>
      </div>
      <div className={styles.instructions}>
        Click to continue
      </div>
    </div>
  );
};

export default Preloader;