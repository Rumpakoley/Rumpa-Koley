import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Theme, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { Experience } from './components/Experience';
import { EducationAndAchievements } from './components/EducationAndAchievements';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as Theme;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-amber-400 selection:text-zinc-950 overflow-x-clip relative">
      {/* Global Ambient DevOps Continuous Infinity Loop Background (Entire Website) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          className="w-[850px] sm:w-[1100px] lg:w-[1300px] h-[550px] sm:h-[700px] lg:h-[800px] flex items-center justify-center opacity-70"
        >
          <img
            src="/infinity-loop.png"
            alt="Continuous Infinity Loop Watermark"
            className="w-full h-full object-contain filter invert opacity-[0.035] select-none pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Sticky Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections in Canonical User Journey Order */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero & Identity */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Section 2: About Me & Philosophy */}
        <About />

        {/* Section 3: Technical Skills & Stack */}
        <Skills />

        {/* Section 4: Projects Showcase */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 5: Experience */}
        <Experience />

        {/* Section 6: Education & Achievements */}
        <EducationAndAchievements />

        {/* Section 7: Contact & Professional Links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Interactive Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ATS-Friendly Printable & Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
