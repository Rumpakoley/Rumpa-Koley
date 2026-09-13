import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { Layers, Server, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ['#27272a', '#ffffff']);

  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.28em] my-[0.05em] inline-block select-none"
    >
      {word}
    </motion.span>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Exact statement modeled after Mrinmoy's cinematic structure
  const manifestoText =
    "Rumpa is an India-based full-stack developer, software engineer, and systems architect. Specializing in TypeScript, modern React architectures, and distributed backend services, she brings a clean, high-performance visual signature to her applications. Driven by the belief that clean code and systematic design can empower millions, she handles both frontend fidelity and database scalability, constantly refining her craft with every new system she builds.";

  const words = manifestoText.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="about" aria-label="About" className="relative bg-[#09090b] border-t border-white/[0.08] scroll-mt-20">
      
      {/* 200vh Scroll-Track for Word-by-Word Scroll Reveal (Mrinmoy Signature) */}
      <div ref={containerRef} className="h-[200vh] relative w-full">
        <div className="sticky top-0 h-screen flex items-center justify-center pt-24 sm:pt-28 pb-8 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full relative">
            
            {/* Ambient Background Circular Watermark Accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/[0.03] rounded-full pointer-events-none -z-10" />
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[240px] h-[240px] border border-white/[0.02] rounded-full pointer-events-none -z-10" />

            {/* Left Column: Portrait Card */}
            <div className="hidden lg:block lg:col-span-5 h-[360px] xl:h-[420px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl relative group max-w-[340px] xl:max-w-[380px]">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Column: Scroll-Illuminated Words */}
            <div className="lg:col-span-7 flex flex-col justify-center relative">
              
              {/* Phone / Mobile Portrait Header */}
              <div className="flex items-center gap-3.5 mb-4 lg:hidden">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20 shadow-lg shrink-0 bg-zinc-900">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-center grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-400">Full Stack Developer</p>
                </div>
              </div>

              {/* Dynamic Word Light-Up */}
              <h2 className="flex flex-wrap text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] xl:text-[2.1rem] leading-[1.32] lg:leading-[1.36] font-sans font-medium tracking-tight">
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  return (
                    <Word
                      key={i}
                      word={word}
                      range={[start, end]}
                      progress={scrollYProgress}
                    />
                  );
                })}
              </h2>

            </div>

          </div>

        </div>
      </div>

      {/* 3-Column Domain Expertise Grid */}
      <div className="border-t border-white/[0.08] px-6 sm:px-10 lg:px-16 py-24 max-w-7xl mx-auto">
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
