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

      {/* Giant Bottom Watermark Statement with Interactive Character Hover Effects */}
      <div className="pt-16 flex flex-col md:flex-row justify-between items-end gap-6 relative select-none group/footer">
        
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute -bottom-10 left-0 w-[400px] h-[200px] bg-amber-500/[0.03] group-hover/footer:bg-amber-500/[0.08] rounded-full blur-[100px] pointer-events-none transition-all duration-700 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center text-[17vw] sm:text-[14vw] lg:text-[11.5vw] leading-[0.78] font-display font-black tracking-tighter uppercase origin-bottom-left"
        >
          {['R', 'U', 'M', 'P', 'A'].map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{
                y: -10,
                scale: 1.06,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="watermark-letter font-black select-none transition-all duration-300 inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 space-y-1 text-right shrink-0 pb-2">
          <p className="hover:text-amber-400 transition-colors">© {new Date().getFullYear()} Rumpa Koley</p>
          <p className="text-zinc-500">Built with React 19, TypeScript & Tailwind CSS</p>
        </div>
      </div>

    </footer>
  );
};
