import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-bold shadow-sm shadow-amber-500/20">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {PERSONAL_INFO.role} • Kolkata, India
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Education
            </a>
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Resume
            </button>
            <a href="#contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Me"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="ml-2 p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Rumpa Koley. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with React 19, TypeScript, Tailwind CSS, and Express.
          </p>
        </div>
      </div>
    </footer>
  );
};
