import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaCloudUploadAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const servicesData = [
  {
    category: "Desarrollo Backend",
    description:
      "Creación de APIs RESTful, microservicios y lógica de negocio robusta para aplicaciones de alto rendimiento y escalabilidad.",
    tags: ["Java", "Spring", "Python", "Node.js", "API REST", "Microservicios"],
    icon: <FaCode />,
  },
  {
    category: "Arquitectura Cloud & DevOps",
    description:
      "Diseño e implementación de soluciones en la nube (AWS, GCP, Azure) y gestión de contenedores para despliegues eficientes.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
    icon: <FaCloudUploadAlt />,
  },
  {
    category: "Inteligencia Artificial & Ciberseguridad",
    description:
      "Implementación de modelos de IA y soluciones de ciberseguridad para optimizar procesos y proteger aplicaciones.",
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
        <h2>Servicios</h2>
      </div>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <div className={styles.cardContent}>
              <h3>{service.category}</h3>
              <p>{service.description}</p>
              <div className={styles.tagContainer}>
                {service.tags.map((tag) => (
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
