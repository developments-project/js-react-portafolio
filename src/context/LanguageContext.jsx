import React, { useState, createContext } from 'react';
import { es } from '../translations/es';
import { en } from '../translations/en';

// 1. Creamos el Contexto
export const LanguageContext = createContext();

// 2. Creamos el Proveedor
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  // Elegimos el objeto de traducción correcto basado en el estado
  const translations = language === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};