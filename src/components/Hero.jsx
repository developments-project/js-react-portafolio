import React from "react";
import styles from "./Hero.module.css";
import profilePhoto from "../assets/profile1.jpg"; // Asegúrate de tener tu foto aquí
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // La etiqueta <section> ahora ocupa todo el ancho
    <motion.section
      id="hero"
      className={styles.heroBox}
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y 20px abajo
      whileInView={{ opacity: 1, y: 0 }} // <-- Cambia a 'whileInView'
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // Duración y tipo de transición
    >
      {/* Este nuevo div centrará el contenido */}
      <div className={styles.heroContent}>
        <img
          src={profilePhoto}
          alt="Leon Fernando"
          className={styles.profileImage}
        />
        <h1>Leon Fernando</h1>
        <p className={styles.subtitle}>
        Desarrollador Fullstack
        </p>
        <p style={{textAlign:'justify'}}>
        Soy un profesional apasionado por los desafíos, el aprendizaje continuo y la aplicación de soluciones innovadoras a problemas tecnologicos complejos.
        Con más de cinco años de experiencia, domino el ciclo completo de desarrollo de software, desde el diseño inicial hasta la implementación de proyectos robustos en producción 
        con resultados efectivos y eficientes.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
