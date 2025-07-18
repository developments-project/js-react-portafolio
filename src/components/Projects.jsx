import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; 
import styles from "./Projects.module.css";
import { FaMobileAlt, FaBrain, FaMicrophoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// 1. Creamos un arreglo SOLO con los datos que NO se traducen
const staticProjectData = [
  {
    tags: ["Java", "Spring Boot", "Kubernetes", "MongoDB"],
    icon: <FaMobileAlt />,
  },
  {
    tags: ["Java", "JADE", "MySQL", "Inteligencia Artificial"],
    icon: <FaBrain />,
  },
  {
    tags: ["Python", "JavaScript", "AWS Lambda"],
    icon: <FaMicrophoneAlt />,
  },
];

const Projects = ({ style }) => {
  const { translations } = useContext(LanguageContext);

  // Verificación para evitar errores si las traducciones aún no han cargado
  if (!translations.projectsData) {
    return null;
  }

  return (
    <motion.section
      id="proyectos"
      style={style}
      className={styles.scrollTarget}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeader}>
        <h2>{translations.sections.projects}</h2>
      </div>
      <div className={styles.projectGrid}>

        {translations.projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectIcon}>

              {staticProjectData[index].icon}
            </div>
            <div className={styles.cardContent}>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tagContainer}>

                {staticProjectData[index].tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;