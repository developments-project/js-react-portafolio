import React, { useState, useEffect } from 'react';
import './styles/variables.css';
import './styles/main.css';
import './App.css';

// Tus componentes
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Toolkit from './components/Toolkit';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
// No necesitamos los preloaders para esta prueba, los puedes añadir luego si quieres
// import InitialPreloader from './components/InitialPreloader';
// import EntryScreen from './components/EntryScreen';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  // Estado para controlar la barra lateral
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Función para abrir/cerrar la barra lateral
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollButton && window.pageYOffset > 400){
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 400){
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollButton]);

  return (
    <div className="App"> 
      {/* Le pasamos el estado 'isOpen' y la función 'toggleSidebar' */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="main-content">
        {/* Le pasamos la función 'toggleSidebar' al Header */}
        <Header toggleSidebar={toggleSidebar} />
        <div className="content-wrapper">
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Toolkit />
            <Services />
          </main>
        </div>
        <Footer />
      </div>
      
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
}

export default App;