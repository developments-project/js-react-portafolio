import React from "react";
import styles from "./Footer.module.css";
import { FaGitlab } from "react-icons/fa";
import { motion } from "framer-motion"; // 1. Importamos motion

const Footer = () => {
  return (
    // La etiqueta <footer> ahora ocupa todo el ancho
    <motion.footer
      id="contacto"
      className={styles.footerBox}
      initial={{ opacity: 0 }} // Una animación más simple de solo desvanecimiento
      whileInView={{ opacity: 1, y: 0 }} // <-- Cambia a 'whileInView'
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Este nuevo div centrará el contenido */}
      <div className={styles.footerContent}>
        <h2>Hablemos</h2>
        <p style={{textAlign:'justify'}} className={styles.intro}>
          Estoy disponible para nuevos retos y oportunidades de trabajo.
          Si crees que puedo aportar valor a tu equipo, conversemos.
        </p>
        <a href="mailto:leonfernando.mx@gmail.com" className={styles.ctaButton}>
          Envíame un correo
        </a>
        <div className={styles.socialLinks}>
          <a
            href="https://gitlab.com/develop.projects/springframework"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
          >
            <FaGitlab />
          </a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Leon Fernando.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
