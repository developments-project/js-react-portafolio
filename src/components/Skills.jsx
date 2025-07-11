import React from 'react';
import styles from './Skills.module.css';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDocker, FaGitAlt, FaGithub, FaJira, FaLinux, FaWindows, FaAws 
} from 'react-icons/fa';
import { SiSpring, SiMongodb, SiMysql, SiKubernetes, SiPhp, SiHibernate } from 'react-icons/si';

import { DiDotnet  } from 'react-icons/di'; // Agregamos la importación para el ícono de C#

// Aquí mapeamos tus habilidades del CV a un ícono y un nombre
const skillsData = [
  { icon: <FaJava />, name: 'Java' }, //
  { icon: <SiSpring />, name: 'Spring' }, //
  { icon: <FaPython />, name: 'Python' }, //
  { icon: <DiDotnet  />, name: 'C#' }, //
  { icon: <FaJsSquare />, name: 'JavaScript' }, //
  { icon: <FaHtml5 />, name: 'HTML' }, //
  { icon: <FaCss3Alt />, name: 'CSS' }, //
  { icon: <SiPhp />, name: 'PHP' }, //
  { icon: <FaNodeJs />, name: 'Node.js' }, //
  { icon: <FaReact />, name: 'React' }, //
  { icon: <SiHibernate />, name: 'Hibernate' }, //
  { icon: <SiMysql />, name: 'SQL' }, //
  { icon: <SiMongodb />, name: 'MongoDB' }, //
  { icon: <FaDocker />, name: 'Docker' }, //
  { icon: <SiKubernetes />, name: 'Kubernetes' }, //
  { icon: <FaAws  />, name: 'AWS' }, //
  { icon: <FaGitAlt />, name: 'Git/SVN' }, //
  { icon: <FaGithub />, name: 'Github/Gitlab' }, //
  { icon: <FaJira />, name: 'Jira/Kanban' }, //
  { icon: <FaLinux />, name: 'Linux' }, //
  { icon: <FaWindows />, name: 'Windows/MacOS' }, //
];

const Skills = () => {
  return (
    <section className={styles.skills} id="habilidades">
      <h2>Conocimientos y Herramientas</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;