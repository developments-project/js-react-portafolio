import React from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';

// 1. Aceptamos 'toggleSidebar' como prop
const Header = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      {/* 2. El botón llama a la función cuando se le hace clic */}
      <button className={styles.menuBtn} onClick={toggleSidebar} aria-label="Abrir menú">
        <FaBars />
      </button>
    </header>
  );
};

export default Header;