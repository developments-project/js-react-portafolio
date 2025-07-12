import React from 'react';
import styles from './Sidebar.module.css';
import { FaTimes } from 'react-icons/fa';

// 1. Aceptamos 'isOpen' y 'toggleSidebar' como props
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    // 2. Usamos 'isOpen' para añadir la clase '.open' condicionalmente
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <h3>Leon Fernando</h3>
        <button className={styles.closeBtn} onClick={toggleSidebar} aria-label="Cerrar menú">
          <FaTimes />
        </button>
      </div>
      <nav className={styles.nav}>
        {/* Cada enlace también cierra el menú en móvil */}
        <a href="#hero" onClick={toggleSidebar}>Inicio</a>
        <a href="#experience" onClick={toggleSidebar}>Experiencia</a>
        <a href="#proyectos" onClick={toggleSidebar}>Proyectos</a>
        <a href="#services" onClick={toggleSidebar}>Servicios</a>
        <a href="#herramientas" onClick={toggleSidebar}>Herramientas</a>
        <a href="#contacto" onClick={toggleSidebar}>Contacto</a>
      </nav>
    </aside>
  );
};

export default Sidebar;