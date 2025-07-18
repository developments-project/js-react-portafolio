import React, { useState, useEffect } from 'react';
import styles from './InitialPreloader.module.css';
import { FaHtml5, FaJava, FaPython, FaPhp, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus, SiDotnet, SiPostgresql } from 'react-icons/si';

// Arreglo de datos con todos los tiempos optimizados para una cadencia realista
const languagesData = [
  { name: 'HTML', icon: <FaHtml5 className={styles.htmlIcon}/>, color: '#E34F26', code: [
    { line: <><span className={styles['html-tag']}>{'<!DOCTYPE html>'}</span></>, delay: 0.5, duration: 0.8, steps: 15 },
    { line: <><span className={styles['html-tag']}>{'<html>'}</span></>, delay: 1.5, duration: 0.5, steps: 6 },
    { line: <>{'  '}<span className={styles['html-tag']}>{'<head>'}</span></>, delay: 2.2, duration: 0.6, steps: 7 },
    { line: <>{'    '}<span className={styles['html-tag']}>{'<title>'}</span><span className={styles['html-text']}>Portfolio</span><span className={styles['html-tag']}>{'</title>'}</span></>, delay: 3.0, duration: 1.2, steps: 23 },
    { line: <>{'  '}<span className={styles['html-tag']}>{'</head>'}</span></>, delay: 4.4, duration: 0.7, steps: 8 },
    { line: <>{'  '}<span className={styles['html-tag']}>{'<body>'}</span></>, delay: 5.3, duration: 0.8, steps: 9 },
    { line: <>{'    '}<span className={styles['html-tag']}>{'<h1>'}</span><span className={styles['html-text']}>¡Hola, bienvenido!</span><span className={styles['html-tag']}>{'</h1>'}</span></>, delay: 6.3, duration: 1.5, steps: 26 },
    { line: <>{'  '}<span className={styles['html-tag']}>{'</body>'}</span></>, delay: 8.0, duration: 0.8, steps: 9 },
    { line: <>{'  '}<span className={styles['html-tag']}>{'</html>'}</span></>, delay: 9.0, duration: 0.8, steps: 9 },
  ]},
{ name: 'Java', icon: <FaJava className={styles.javaIcon}/>, color: '#FF3B30', code: [
    { line: <><span className={styles['java-keyword']}>class </span><span className={styles['.java-className']}>Main{'{'}</span></>, delay: 0.5, duration: 0.8, steps: 10 },
    { line: <>{''}<span className={styles['java-keyword']}>public static void </span><span className={styles['java-methodName']}>main()</span>{'{'}</>, delay: 1.5, duration: 1, steps: 15},
    { line: <>{''} <span className={styles['java-text']}>System.out.println</span><span>(</span><span className={styles['java-string']}>"Bienvenido"</span><span>);</span></>, delay: 3.0, duration: 1.2, steps: 15 },
    { line: <>{' }'}</>, delay: 4.5, duration: 0.5, steps: 7 },
    { line: <>{'}'}</>, delay: 5.0, duration: 0.5, steps: 10 },
  ]},
  { name: 'Python', icon: <FaPython className={styles.pythonIcon}/>, color: '#F7DF1E', code: [
    { line: <><span className={styles['py-keyword']}>def</span> <span className={styles['py-function']}>main</span>():</>, delay: 0.5, duration: 0.8, steps: 10 },
    { line: <>{'  '}<span className={styles['py-function']}>print</span>(<span className={styles['py-string']}>"¡Hola, bienvenido!"</span>)</>, delay: 1.5, duration: 1.5, steps: 25 },
    { line: <>{''}</>, delay: 3.2, duration: 0.4, steps: 1 },
    { line: <><span className={styles['java-keyword']}>if</span> __name__ == "__main__":</>, delay: 3.8, duration: 1.8, steps: 27 },
    { line: <>{'  '}main()</>, delay: 5.8, duration: 0.5, steps: 12 },
  ]},
  { name: 'C++', icon: <SiCplusplus className={styles.cppIcon}/>, color: '#006fc4', code: [
    { line: <><span className={styles['cpp-preprocessor']}>#include{'<iostream>'}</span></>, delay: 0.5, duration: 1.2, steps: 19 },
    { line: <><span className={styles['cpp-keyword']}>int </span>main(){'{'}</>, delay: 1.9, duration: 1.0, steps: 12 },
    { line: <>{''} std::cout {'<<'} <span className={styles['cpp-string']}>"¡Bienvenido!"</span>;</>, delay: 3.1, duration: 1.5, steps: 28 },
    { line: <>{'}'}</>, delay: 4.6, duration: 0.5, steps: 12 },
  ]},
  { name: 'PHP', icon: <FaPhp className={styles.phpIcon}/>, color: '#636799', code: [
    { line: <><span className={styles['php-tag']}>{'<?php'}</span></>, delay: 0.5, duration: 0.5, steps: 5 },
    { line: <>{'  '}<span className={styles['php-echo']}>echo</span> <span className={styles['java-string']}>"¡Hola, bienvenido!"</span>;</>, delay: 1.2, duration: 1.8, steps: 27 },
    { line: <><span className={styles['php-tag']}>{'?>'}</span></>, delay: 3.2, duration: 0.5, steps: 12 },
  ]},
  { name: 'JavaScript', icon: <FaJsSquare className={styles.jsIcon}/>, color: '#F7DF1E', code: [
    { line: <><span className={styles['js-console']}>console.log</span>(</>, delay: 0.5, duration: 1.0, steps: 12 },
    { line: <>{'  '}<span className={styles['js-string']}>"¡Hola, bienvenido!"</span></>, delay: 1.7, duration: 1.5, steps: 15 },
    { line: <>{');'}</>, delay: 2.9, duration: 0.5, steps: 12 },
  ]},
  { name: 'SQL', icon: <SiPostgresql className={styles.sqlIcon}/>, color: '#4083C5', code: [
    { line: <><span className={styles['sql-keyword']}>SELECT</span> <span className={styles['sql-string']}>'¡Hola, bienvenido!'</span>;</>, delay: 0.5, duration: 2.0, steps: 28 },
  ]},
{ name: 'C#', icon: <SiDotnet className={styles.csIcon}/>, color: '#5734d4', code: [ 
    { line: <><span className={styles['cs-keyword']}>using</span> System;</>, delay: 0.5, duration: 1, steps: 12 }, 
    { line: <><span className={styles['cs-keyword']}>class</span> <span className={styles['cs-className']}>Program</span> {'{'}</>, delay: 1.7, duration: 1.2, steps: 16 }, 
    { line: <>{' '}Console.WriteLine(</>, delay: 3.1, duration: 1.5, steps: 20 }, 
    { line: <>{'  '}<span className={styles['cs-string']}>"¡Hola, bienvenido!"</span>);</>, delay: 4.8, duration: 1, steps: 15 }, 
    { line: <>{' }'}</>, delay: 5.8, duration: 0.5, steps: 7 }, 
    { line: <>{'}'}</>, delay: 6.5, duration: 0.5, steps: 12 }, ]} ];

const InitialPreloader = ({ onAnimationComplete }) => {
  const [selectedLanguage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * languagesData.length);
    return languagesData[randomIndex];
  });

  const [percentage, setPercentage] = useState(0);
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const lastLine = selectedLanguage.code[selectedLanguage.code.length - 1];
    const typingDuration = lastLine.duration || 1; // Usamos la duración de la línea, o 1s por defecto
    const totalDuration = (lastLine.delay + typingDuration) * 1000;

    const percentageInterval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) { clearInterval(percentageInterval); return 100; }
        return prev + 1;
      });
    }, totalDuration / 100);

    const dotsInterval = setInterval(() => {
      setDots(prevDots => (prevDots % 3) + 1);
    }, 500);
    
    const completionTimer = setTimeout(() => {
      onAnimationComplete();
    }, totalDuration + 900);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(percentageInterval);
      clearTimeout(completionTimer);
    };
  }, [selectedLanguage, onAnimationComplete]);

  if (!selectedLanguage) {
    return null;
  }

  return (
    <div className={styles.preloader}>
      <div 
        className={styles.neonBorderBox}
        style={{ '--neon-color': selectedLanguage.color }}
      >
        <div className={styles.codeContainer}>
          <div className={styles.languageHeader}>
            {selectedLanguage.icon} <h4>{selectedLanguage.name}</h4>
          </div>
          {selectedLanguage.code.map((item, index) => (
            <pre 
              key={index} 
              className={styles.codeLine} 
                          style={{ 
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              animationTimingFunction: `steps(${item.steps}, end)`
            }}
            >
              {item.line}
            </pre>
          ))}
        </div>
      </div>
      <div className={styles.counter}>
        Developing page{'.'.repeat(dots)} {percentage}%
      </div>
    </div>
  );
};

export default InitialPreloader;