import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Experience.module.css";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const staticExperienceData = [
  {
    tags: [
      "Java",
      "Spring Framework",
      "Kubernetes",
      "MongoDb",
      "SonarQube",
      "Gitlab",
    ],
    logo: "https://logo.clearbit.com/bancoppel.com",
  },
  {
    tags: ["Java", "Spring Boot", "JPA", "Hibernate", "Oracle DB", "SVN"],
    logo: "https://logo.clearbit.com/lmpolanco.com",
  },
  {
    tags: ["PHP", "HTML", "CSS", "C#", "SQL Server"],
    logo: <FaBriefcase />,
  },
];

const Experience = ({ style }) => {
  const { translations } = useContext(LanguageContext);

  if (!translations.experienceData) {
    return null;
  }

  return (
    <motion.section
      id="experiencia"
      style={style}
      className={styles.scrollTarget}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeader}>
        <h2>{translations.sections.experience}</h2>
      </div>
      <div className={styles.experienceGrid}>
        {translations.experienceData.map((job, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.experienceVisual}>
              {typeof staticExperienceData[index].logo === "string" ? (
                <img
                  src={staticExperienceData[index].logo}
                  alt={`${job.company} logo`}
                  className={styles.companyLogo}
                />
              ) : (
                staticExperienceData[index].logo
              )}
            </div>
            <div className={styles.cardContent}>
              <h3>{job.company}</h3>
              <p className={styles.jobInfo}>
                {job.role} | {job.period}
              </p>
              <p>{job.description}</p>
              <div className={styles.tagContainer}>
                {staticExperienceData[index].tags.map((tag) => (
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
