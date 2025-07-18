import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; 
import styles from "./Toolkit.module.css";
// 1. Importamos los íconos
import { FaServer, FaCloud, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";

const staticToolkitData = [
  {
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
    icon: <FaServer />,
  },
  {
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
    tags: ["JavaScript", "PHP", "HTML", "CSS"],
    icon: <FaDesktop />,
  },
];

const Toolkit = () => {

  const { translations } = useContext(LanguageContext);

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
        <h2>{translations.sections.toolkit}</h2>
      </div>
      <div className={styles.toolkitGrid}>
        {translations.toolkitData.map((kit, index) => (
          <div key={index} className={styles.toolkitCard}>
            <div className={styles.toolkitIcon}>{staticToolkitData[index].icon}</div>
            <div className={styles.cardContent}>
              <h3>{kit.category}</h3>
              <p>{kit.description}</p>
              <div className={styles.tagContainer}>
                {staticToolkitData[index].tags.map((tag) => (
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
