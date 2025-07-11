import React from "react";
import styles from "./Projects.module.css";
import { FaMobileAlt, FaBrain, FaMicrophoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Añadimos un campo 'image' y 'tags'. Usa capturas de pantalla de tus proyectos.
// He usado placeholders de https://via.placeholder.com
const projectData = [
  {
    title: "Pago de Servicios App BanCoppel",
    description:
      "Desarrollo de microservicios para el pago de servicios de gobierno y tiempo aire en la App BanCoppel.",
    tags: ["Java", "Spring Boot", "Kubernetes", "MongoDB"],
    // 2. Usamos el componente de ícono
    icon: <FaMobileAlt />,
  },
  {
    title: "Detección de Talentos con IA",
    description:
      "Proyecto de innovación para la detección de nuevos talentos usando Razonamiento Aproximado (IA).",
    tags: ["Java", "JADE", "MySQL", "Inteligencia Artificial"],
    icon: <FaBrain />,
  },
  {
    title: "Alexa Skills con AWS",
    description:
      "Desarrollo de Skills para Amazon Alexa, utilizando infraestructura serverless en AWS (Lambda, EC2, S3, RDS).",
    tags: ["Python", "JavaScript", "AWS Lambda"],
    icon: <FaMicrophoneAlt />,
  },
];

const Projects = () => {
  return (
    <motion.section
      id="proyectos"
      className={styles.scrollTarget}
      initial={{ opacity: 0, x: 100 }} // Estado inicial: invisible y 100px a la izquierda
      whileInView={{ opacity: 1, x: 0 }} // Animación al entrar en la vista
      viewport={{ once: false, amount: 0.2 }} // La animación se ejecuta una sola vez cuando el 20% del elemento es visible
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeader}>
        <h2>Mis Proyectos Recientes</h2>
      </div>
      <div className={styles.projectGrid}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {/* 3. Cambiamos la <img> por un <div> para el ícono */}
            <div className={styles.projectIcon}>{project.icon}</div>
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tagContainer}>
                {project.tags.map((tag) => (
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
