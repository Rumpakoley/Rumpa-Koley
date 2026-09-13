import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Code2, Server, Database, Cpu, ShieldCheck, Sparkles, Zap, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About and Philosophy" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      
      {/* Top Manifesto & Portrait Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-24">
        
        {/* Desktop Left Column: Visual Portrait Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:col-span-4 rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 relative group shadow-2xl h-[420px]"
        >
          {/* Clean Portrait Image */}
          <img
            src={PERSONAL_INFO.avatarUrl}
            alt={PERSONAL_INFO.name}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Column: Manifesto Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col justify-center"
        >
          {/* Phone / Mobile Portrait Header */}
          <div className="flex items-center gap-4 mb-6 lg:hidden">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-amber-400/40 shadow-xl shrink-0 bg-zinc-900">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-amber-400 flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Engineering Manifesto</span>
              </div>
              <h3 className="font-display font-bold text-xl text-zinc-100">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-zinc-400">Full Stack Developer & Systems Designer</p>
            </div>
          </div>

          {/* Desktop Section Tag */}
          <div className="hidden lg:flex font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-6 items-center gap-2">
            <span className="w-6 h-[1px] bg-amber-400" />
            <span>Engineering Manifesto</span>
          </div>

          {/* Core Statement with Luxury Typography */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.45] font-sans font-light text-zinc-300 tracking-tight">
            Rumpa is a <strong className="text-white font-semibold">full-stack developer</strong> and software engineer with a deep passion for building <span className="text-amber-400 font-medium underline underline-offset-8 decoration-amber-400/30">resilient, high-performance web systems</span>. Specializing in <strong className="text-white font-semibold">TypeScript</strong>, modern <strong className="text-white font-semibold">React architectures</strong>, and distributed backend services, she brings an architectural precision and user-first visual signature to every application. Driven by clean code and systematic design, she handles both frontend fidelity and database scalability, constantly engineering digital experiences that humans can trust and love using.
          </p>

          <div className="mt-8 flex items-center gap-6 font-mono text-xs text-zinc-400 uppercase tracking-widest">
            <span className="text-amber-400 font-bold">// Core Focus:</span>
            <span>Scalability • Type Safety • Performance</span>
          </div>
        </motion.div>

      </div>

      {/* 3-Column Domain Expertise Grid */}
      <div className="border-t border-white/[0.08] pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Core Architecture */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-amber-400">
              <Layers className="w-4 h-4" />
              <h4>Core Engineering</h4>
            </div>
            <ul className="space-y-3.5 text-base sm:text-lg font-medium tracking-tight text-zinc-300">
              <li className="hover:text-amber-400 transition-colors">Component-Driven Frontend Architecture</li>
              <li className="hover:text-amber-400 transition-colors">Modular REST & Express API Design</li>
              <li className="hover:text-amber-400 transition-colors">Relational & Document DB Schema Tuning</li>
              <li className="hover:text-amber-400 transition-colors">Real-Time WebSocket State Sync</li>
              <li className="hover:text-amber-400 transition-colors">WCAG 2.1 AA Accessibility Standards</li>
            </ul>
          </div>

          {/* Column 2: Stack & Tools */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-amber-400">
              <Server className="w-4 h-4" />
              <h4>Production Stack</h4>
            </div>
            <ul className="space-y-3.5 text-base sm:text-lg font-medium tracking-tight text-zinc-300">
              <li className="hover:text-amber-400 transition-colors">React 19 & Next.js</li>
              <li className="hover:text-amber-400 transition-colors">TypeScript & Node.js</li>
              <li className="hover:text-amber-400 transition-colors">PostgreSQL & MongoDB</li>
              <li className="hover:text-amber-400 transition-colors">Tailwind CSS & Framer Motion</li>
              <li className="hover:text-amber-400 transition-colors">Docker, Git & Vercel Cloud</li>
            </ul>
          </div>

          {/* Column 3: Philosophy & Standards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <h4>Quality Standards</h4>
            </div>
            <ul className="space-y-3.5 text-base sm:text-lg font-medium tracking-tight text-zinc-300">
              <li className="hover:text-amber-400 transition-colors">Sub-100ms P95 API Response Targets</li>
              <li className="hover:text-amber-400 transition-colors">95+ Google Lighthouse Benchmark Scores</li>
              <li className="hover:text-amber-400 transition-colors">Automated CI/CD Test Verification</li>
              <li className="hover:text-amber-400 transition-colors">Zero Unhandled Promise Rejections</li>
              <li className="hover:text-amber-400 transition-colors">99.9% Uptime Production Mindset</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
};
