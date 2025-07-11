import React from 'react';
import styles from './ScrollToTopButton.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  // 1. Creamos una función que maneja el scroll
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Le decimos que vaya a la posición 0 (el tope)
      behavior: 'smooth' // Le pedimos que lo haga con una animación suave
    });
  };

  return (
    // 2. Cambiamos la <a> por un <button> y le asignamos la función al onClick
    <button onClick={handleScrollToTop} className={styles.scrollToTop} aria-label="Volver al inicio">
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;