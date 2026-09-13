import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Database, Cpu, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen relative flex flex-col justify-between pt-24 md:pt-32 pb-8 md:pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-yellow-600/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        {/* Availability Badge */}
        <div
          id="hero-status-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 font-mono text-[11px] tracking-widest uppercase shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.availability}</span>
        </div>

        {/* Location & Quick Links */}
        <div className="flex items-center gap-6 font-mono text-[11px] tracking-widest uppercase text-zinc-400">
          <span className="hidden sm:inline-block opacity-60">{PERSONAL_INFO.location}</span>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Giant Editorial Brutalist Headline */}
      <div className="my-auto py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 md:space-y-4"
        >
          <div className="flex items-center gap-3 font-mono text-xs md:text-sm tracking-widest uppercase text-amber-400">
            <span className="w-8 h-[1px] bg-amber-400" />
            <span>Architect & Engineer</span>
          </div>

          <h1 className="font-display font-extrabold tracking-tighter uppercase leading-[0.88] text-[13vw] sm:text-[10vw] lg:text-[7.5vw] text-zinc-100">
            Full Stack
            <br />
            <span className="stroke-text-lg tracking-tight hover:text-zinc-100 transition-colors duration-500">
              Developer
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Interactive Visual Showcase Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Main Terminal & Live Code Preview Window */}
          <div className="lg:col-span-8 rounded-3xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />
            
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 font-mono text-[11px] tracking-widest text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 opacity-60">rumpa.config.ts</span>
              </div>
              <span className="text-amber-400/90 font-semibold">PRODUCTION ACTIVE</span>
            </div>

            {/* Code & Bio Content */}
            <div className="my-6 space-y-4 font-mono text-xs sm:text-sm leading-relaxed text-zinc-300">
              <div>
                <span className="text-zinc-500">$ </span>
                <span className="text-amber-400">export default</span>{' '}
                <span className="text-zinc-100 font-bold">defineEngineer</span>({'{'}
              </div>
              <div className="pl-5 space-y-1.5 border-l border-white/10">
                <p>
                  <span className="text-zinc-400">name:</span>{' '}
                  <span className="text-amber-300">"{PERSONAL_INFO.name}"</span>,
                </p>
                <p>
                  <span className="text-zinc-400">mission:</span>{' '}
                  <span className="text-zinc-200">
                    "Crafting ultra-responsive React applications, resilient Express microservices, and database pipelines with end-to-end technical craftsmanship."
                  </span>,
                </p>
                <p>
                  <span className="text-zinc-400">coreStack:</span>{' '}
                  <span className="text-emerald-400">["React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]</span>,
                </p>
                <p>
                  <span className="text-zinc-400">uptimeMindset:</span>{' '}
                  <span className="text-amber-400">99.9%</span>
                </p>
              </div>
              <div>{'}'});</div>
            </div>

            {/* Quick Action CTAs inside Hero */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs tracking-widest uppercase font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
              >
                <span>Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs tracking-widest uppercase text-zinc-200 bg-zinc-800/80 hover:bg-zinc-800 border border-white/10 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Contact Me</span>
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Highlights Bento Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-amber-400/40 transition-all">
              <div className="flex items-center justify-between text-zinc-400 mb-4 font-mono text-[10px] tracking-widest uppercase">
                <span>Production Experience</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-100 mb-1">
                  5+ <span className="text-amber-400 text-2xl font-normal font-sans">Projects</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Delivered modern web applications, REST architectures, and cloud services.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-amber-400/40 transition-all">
              <div className="flex items-center justify-between text-zinc-400 mb-4 font-mono text-[10px] tracking-widest uppercase">
                <span>Code Rigor</span>
                <Cpu className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-100 mb-1">
                  100% <span className="text-emerald-400 text-2xl font-normal font-sans">Type-Safe</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Full TypeScript compliance, clean MVC architecture, and WCAG AA accessibility.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Exploration Footer */}
      <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
        <div className="font-mono text-[11px] tracking-widest uppercase max-w-md text-zinc-400 leading-relaxed">
          Crafting visual signatures & scalable architectures with human-centered empathy at the core of every line of code.
        </div>

        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-zinc-400 hover:text-amber-400 transition-colors group cursor-pointer"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-amber-400/50"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};
