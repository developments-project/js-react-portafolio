import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; 
import styles from "./Hero.module.css";
import profilePhoto from "../assets/profile1.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <motion.section
      id="hero"
      className={styles.heroBox}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={styles.heroContent}>
        <img
          src={profilePhoto}
          alt={translations.hero.name}
          className={styles.profileImage}
        />
        <h1>{translations.hero.name}</h1> 
        <p className={styles.subtitle}>
          {translations.hero.subtitle}
        </p>
        <p style={{textAlign:'justify'}}>
          {translations.hero.bio}
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;