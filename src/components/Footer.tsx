import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden relative border-t border-white/[0.08]">
      
      {/* Top Footer Navigation & Details */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
        
        {/* Identity */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-zinc-100">
            <Terminal className="w-5 h-5 text-amber-400" />
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <p className="font-mono text-xs text-zinc-400">
            Full Stack Developer & Systems Engineer • Kolkata, India
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs tracking-widest uppercase text-zinc-400">
          <a href="#projects" className="hover:text-amber-400 transition-colors">Work</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-amber-400 transition-colors">Stack</a>
          <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
          <a href="#education" className="hover:text-amber-400 transition-colors">Education</a>
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="hover:text-amber-400 transition-colors"
          >
            Resume
          </button>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-amber-400/50 transition-all group"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      {/* Giant Bottom Watermark Statement (Mrinmoy Signature) */}
      <div className="pt-12 flex flex-col md:flex-row justify-between items-end gap-6 relative select-none">
        <h2 className="text-[17vw] sm:text-[14vw] lg:text-[11vw] leading-[0.78] font-display font-black tracking-tighter uppercase text-white/[0.04] pointer-events-none origin-bottom-left">
          RUMPA
        </h2>

        <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 space-y-1 text-right shrink-0">
          <p>© {new Date().getFullYear()} Rumpa Koley</p>
          <p>Built with React 19, TypeScript & Tailwind CSS</p>
        </div>
      </div>

    </footer>
  );
};
