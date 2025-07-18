import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './Sidebar.module.css';
import { FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

// 1. Aceptamos 'isOpen' y 'toggleSidebar' como props
const Sidebar = ({ isOpen, toggleSidebar }) => {
    const { translations } = useContext(LanguageContext);

  return (
    // 2. Usamos 'isOpen' para añadir la clase '.open' condicionalmente
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <h3>{translations.sidebar.name}</h3>
        <button className={styles.closeBtn} onClick={toggleSidebar} aria-label="Cerrar menú">
          <FaTimes />
        </button>
      </div>
      <nav className={styles.nav}>
        {/* Cada enlace también cierra el menú en móvil */}
        <a href="#hero" onClick={toggleSidebar}>{translations.sidebar.home}</a>
        <a href="#experiencia" onClick={toggleSidebar}>{translations.sidebar.experience}</a>
        <a href="#proyectos" onClick={toggleSidebar}>{translations.sidebar.projects}</a>
        <a href="#servicios" onClick={toggleSidebar}>{translations.sidebar.services}</a>
        <a href="#herramientas" onClick={toggleSidebar}>{translations.sidebar.toolkit}</a>
        <a href="#contacto" onClick={toggleSidebar}>{translations.sidebar.contact}</a>
      </nav>
      <div className={styles.languageSwitcherContainer}>
        <LanguageSwitcher />
      </div>
    </aside>
  );
};

export default Sidebar;