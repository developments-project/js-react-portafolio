import React, { useState, useEffect } from "react";
import "./styles/variables.css";
import "./styles/main.css";
import "./styles/App.css";

import ScrollToTopButton from "./components/ScrollToTopButton";
import InitialPreloader from "./components/InitialPreloader";
import EntryScreen from "./components/EntryScreen";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Footer from "./components/Footer";

function App() {
  const [appState, setAppState] = useState("readyToEnter");

  const [showScrollButton, setShowScrollButton] = useState(false);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // La lógica del temporizador para el preloader se ha eliminado de aquí.
    const checkScrollTop = () => {
      if (!showScrollButton && window.pageYOffset > 400) {
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 400) {
        setShowScrollButton(false);
      }
    };

    if (appState === "loaded") {
      window.addEventListener("scroll", checkScrollTop);
    }

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [appState, showScrollButton]);

  const handleEnter = () => {
    setAppState("initialLoading");
  };

  // Esta función es llamada por el Preloader cuando su animación dinámica termina.
  const handlePreloaderFinish = () => {
    setAppState("loaded");
  };

  switch (appState) {
    case "readyToEnter":
      return <EntryScreen onEnter={handleEnter} />;
    case "initialLoading":
      return <InitialPreloader onAnimationComplete={handlePreloaderFinish} />;
    case "loaded":
      return (
        <div className="App">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Header toggleSidebar={toggleSidebar} />
          </div>
          <div className="page-container">
            <Hero />
            <div className="content-wrapper">
              <main>
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
    default:
      return null;
  }
}

export default App;
