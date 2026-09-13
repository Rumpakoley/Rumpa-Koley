import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Layers, Server, ShieldCheck, Aperture } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  // Original bio statement
  const manifestoText =
    "Rumpa is a full-stack developer and software engineer with a deep passion for building resilient, high-performance web systems. Specializing in TypeScript, modern React architectures, and distributed backend services, she brings an architectural precision and user-first visual signature to every application. Driven by clean code and systematic design, she handles both frontend fidelity and database scalability, constantly engineering digital experiences that humans can trust and love using.";

  const words = manifestoText.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Reaches 100% complete illumination by 80% scroll so the entire bio stays fully highlighted
    const progress = Math.min(latest / 0.82, 1);
    setActiveWordIndex(Math.floor(progress * (words.length + 1)));
  });

  return (
    <section id="about" aria-label="About" className="relative bg-[#09090b] border-t border-white/[0.08] scroll-mt-20">
      
      {/* Background Rotating Aperture (Mrinmoy Signature) */}
      <div className="sticky top-0 h-0 overflow-visible pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-10 -right-[10%] text-white/[0.02]"
        >
          <Aperture size={800} strokeWidth={0.5} />
        </motion.div>
      </div>

      {/* 240vh Scroll-Track for Word-by-Word Scroll Reveal */}
      <div ref={containerRef} className="h-[240vh] relative w-full z-10">
        <div className="sticky top-0 h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto overflow-hidden">
          
          {/* Top subtle progress bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400/40 origin-left z-50"
            style={{ scaleX: scrollYProgress }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full relative">
            
            {/* Left Column: Portrait Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block lg:col-span-4 aspect-[4/5] max-h-[460px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl relative group"
            >
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Column: Scroll-Illuminated Words */}
            <div className="lg:col-span-8 flex flex-col justify-center relative">
              
              {/* Phone / Mobile Standalone Portrait Card */}
              <div className="lg:hidden flex flex-col items-start gap-3 mb-5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
                  About
                </span>
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden relative bg-zinc-900 border border-white/15 shadow-xl shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter grayscale contrast-105"
                  />
                </div>
              </div>

              {/* Dynamic Word Light-Up with Full Bio Illumination */}
              <h3 className="flex flex-wrap text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.4rem] leading-[1.32] lg:leading-[1.36] font-space font-medium tracking-tight text-white">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      opacity: i < activeWordIndex ? 1 : 0.08,
                      y: i < activeWordIndex ? 0 : 6,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="mr-[0.28em] my-[0.06em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>

              {/* Dynamic Scroll Indicator that fades out when all words are illuminated */}
              <motion.div
                animate={{ opacity: activeWordIndex >= words.length ? 0 : 0.6 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mt-6 font-mono text-[10px] tracking-widest uppercase text-zinc-400"
              >
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-amber-400"
                >
                  ↓
                </motion.span>
                <span>Keep scrolling to reveal</span>
              </motion.div>

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
