import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logo}>Portafolio</a>
        <nav>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#herramientas">Herramientas</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;