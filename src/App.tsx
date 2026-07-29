import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
// Certifications and Contact pages removed from navigation; kept as archive files

const routeAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeInOut' } },
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            
            <Route path="resume" element={<ResumePage />} />
            
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
