import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Projects from './Components/Experience/Project';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import DeveloperProjects from './Components/Experience/DeveloperProjects';
import GraphicDesignerProjects from './Components/Experience/GraphicDesignerProjects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

// Add future flags configuration
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

const App = () => {
  return (
    <ThemeProvider>
      <Router future={router.future}>
        <div className="min-h-screen bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <div>
                      <WorkExperience />
                    </div>
                    <Footer />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/service"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Service />
                  </motion.div>
                }
              />
              <Route
                path="/experience"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <WorkExperience />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Projects />
                  </motion.div>
                }
              />
              <Route
                path="/projects/developer"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <DeveloperProjects />
                  </motion.div>
                }
              />
              <Route
                path="/projects/graphic-designer"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraphicDesignerProjects />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
