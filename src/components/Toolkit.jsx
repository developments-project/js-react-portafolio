import React from "react";
import styles from "./Toolkit.module.css";
// 1. Importamos los íconos
import { FaServer, FaCloud, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";

const toolkitData = [
  {
    category: "Backend",
    description:
      "Construcción de la lógica de servidor y APIs robustas para aplicaciones de alto rendimiento.",
    tags: [
      "Java",
      "Spring Framework",
      "Python",
      "C#",
      "SQL",
      "MongoDB",
      "Hibernate",
      "Node.js",
    ],
    // 2. Usamos el componente de ícono
    icon: <FaServer />,
  },
  {
    category: "Cloud & DevOps",
    description:
      "Infraestructura, despliegue y automatización para asegurar la escalabilidad y disponibilidad de las aplicaciones.",
    tags: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Jenkins",
    ],
    icon: <FaCloud />,
  },
  {
    category: "Frontend",
    description:
      "Desarrollo de interfaces de usuario interactivas y accesibles para complementar la lógica de negocio.",
    tags: ["JavaScript", "PHP", "HTML", "CSS"],
    icon: <FaDesktop />,
  },
];

const Toolkit = () => {
  return (
    <motion.section
      id="herramientas"
      className={styles.scrollTarget}
      initial={{ opacity: 0, x: -100 }} // Aparece desde la derecha
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeader}>
        <h2>Mi Conjunto de Herramientas</h2>
      </div>
      <div className={styles.toolkitGrid}>
        {toolkitData.map((kit, index) => (
          <div key={index} className={styles.toolkitCard}>
            <div className={styles.toolkitIcon}>{kit.icon}</div>
            <div className={styles.cardContent}>
              <h3>{kit.category}</h3>
              <p>{kit.description}</p>
              <div className={styles.tagContainer}>
                {kit.tags.map((tag) => (
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

export default Toolkit;
