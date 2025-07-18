import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; 
import styles from "./Services.module.css";
import { FaCode, FaCloudUploadAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const staticServicesData = [
  {
    tags: ["Java", "Spring", "Python", "Node.js", "API REST", "Microservicios"],
    icon: <FaCode />,
  },
  {
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
    icon: <FaCloudUploadAlt />,
  },
  {
    tags: [
      "IA",
      "Ciberseguridad (Cisco)",
      "Razonamiento Aproximado",
      "Checkmarx",
    ],
    icon: <FaShieldAlt />,
  },
];

const Services = () => {

  const { translations } = useContext(LanguageContext);

  return (
    <motion.section
      id="servicios"
      className={styles.scrollTarget}
      initial={{ opacity: 0, x: 100 }} // Aparece desde la derecha
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeader}>
        <h2>{translations.sections.toolkit}</h2>
      </div>
      <div className={styles.servicesGrid}>
        {translations.servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{staticServicesData[index].icon}</div>
            <div className={styles.cardContent}>
              <h3>{service.category}</h3>
              <p>{service.description}</p>
              <div className={styles.tagContainer}>
                {staticServicesData[index].tags.map((tag) => (
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

export default Services;
