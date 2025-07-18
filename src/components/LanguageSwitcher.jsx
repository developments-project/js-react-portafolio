import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  // Obtenemos el idioma actual y la función para cambiarlo
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.switcher}>
      <button 
        onClick={() => setLanguage('es')}
        className={language === 'es' ? styles.active : ''}
      >
        ES
      </button>
      <button 
        onClick={() => setLanguage('en')}
        className={language === 'en' ? styles.active : ''}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;