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
        <div className="space-y-1.5 max-w-full">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-zinc-100">
            <Terminal className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <p className="font-mono text-xs text-zinc-400 break-words leading-relaxed">
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
          className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-amber-400/50 transition-all group shrink-0"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      {/* Giant Bottom Watermark Statement with Interactive Character Hover & Click Effects */}
      <div className="pt-16 flex flex-col md:flex-row justify-between items-end gap-6 relative select-none group/footer overflow-visible">
        
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute -bottom-10 left-1/4 -translate-x-1/2 w-[550px] h-[250px] bg-amber-500/[0.04] group-hover/footer:bg-amber-500/[0.12] rounded-full blur-[110px] pointer-events-none transition-all duration-700 -z-10" />

        <div className="relative w-full md:w-auto">
          {/* Watermark Tagline */}
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-zinc-500 mb-2 group-hover/footer:text-amber-400 transition-colors">
            <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" />
            <span>Digital Architect & Full Stack Engineer</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center text-[17vw] sm:text-[14vw] lg:text-[11.5vw] leading-[0.78] font-display font-black tracking-tighter uppercase origin-bottom-left"
          >
            {['R', 'U', 'M', 'P', 'A'].map((letter, index) => (
              <motion.span
                key={index}
                whileHover={{
                  y: -14,
                  scale: 1.08,
                  rotate: index % 2 === 0 ? -1.5 : 1.5,
                  transition: { type: 'spring', stiffness: 350, damping: 15 },
                }}
                whileTap={{ scale: 0.95 }}
                className="watermark-letter font-black select-none inline-block px-[0.02em]"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 space-y-1.5 text-left md:text-right shrink-0 pb-3">
          <p className="hover:text-amber-400 transition-colors font-medium">© {new Date().getFullYear()} Rumpa Koley</p>
          <p className="text-zinc-500">Built with React 19, TypeScript & Tailwind CSS</p>
        </div>
      </div>

    </footer>
  );
};
