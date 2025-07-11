import React from "react";
import styles from "./Experience.module.css"; // Usaremos un nuevo CSS para esta sección
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "BanCoppel",
    role: "Desarrollador Backend Java",
    period: "2022 – 2025",
    description:
      "Participé en el proyecto de Pago de servicios de gobierno y tiempo aire, desde el requerimiento inicial hasta producción, pasando por análisis, diseño, CI/CD y soporte post-salida.",
    tags: [
      "Java",
      "Spring Framework",
      "Kubernetes",
      "MongoDb",
      "SonarQube",
      "Gitlab",
    ],
    logo: "https://logo.clearbit.com/bancoppel.com", // API que busca logos de empresas
  },
  {
    company: "Laboratorios Medico Polanco",
    role: "Desarrollador Java",
    period: "2022",
    description:
      "Desarrollo y administración de aplicaciones Web ERP. Creación de Webservices (API Rest) y Microservicios para sistemas de imagenología, patología y call center.",
    tags: ["Java", "Spring Boot", "JPA", "Hibernate", "Oracle DB", "SVN"],
    logo: "https://logo.clearbit.com/lmpolanco.com",
  },
  {
    company: "Freelance",
    role: "Desarrollador Fullstack",
    period: "2020 - 2021",
    description:
      "Desarrollo de sitios web y sistemas a medida para diversos clientes, incluyendo constructoras y bibliotecas.",
    tags: ["PHP", "HTML", "CSS", "C#", "SQL Server"],
    logo: <FaBriefcase />,
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experiencia"
      className={styles.scrollTarget}
      initial={{ opacity: 0, x: -100 }} // <-- Aparece desde la izquierda
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeader}>
        <h2>Experiencia Profesional</h2>
      </div>
      <div className={styles.experienceGrid}>
        {experienceData.map((job, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.experienceVisual}>
              {/* Lógica condicional para mostrar logo (string) o ícono (objeto) */}
              {typeof job.logo === "string" ? (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className={styles.companyLogo}
                />
              ) : (
                job.logo
              )}
            </div>
            <div className={styles.cardContent}>
              <h3>{job.company}</h3>
              <p className={styles.jobInfo}>
                {job.role} | {job.period}
              </p>
              <p>{job.description}</p>
              <div className={styles.tagContainer}>
                {job.tags.map((tag) => (
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

export default Experience;
