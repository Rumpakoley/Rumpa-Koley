import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Code2, Server, Database, Cpu, ShieldCheck, Sparkles, Zap, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Engineer manifesto statement split by words for scroll illumination (Mrinmoy signature)
  const manifestoText = "Rumpa is a full-stack developer and software engineer with a deep passion for building resilient, high-performance web systems. Specializing in TypeScript, modern React architectures, and distributed backend services, she brings an architectural precision and user-first visual signature to every application. Driven by clean code and systematic design, she handles both frontend fidelity and database scalability, constantly engineering digital experiences that humans can trust and love using.";
  const words = manifestoText.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const idx = Math.floor(latest * words.length * 1.05);
      setActiveWordIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, words.length]);

  return (
    <section id="about" aria-label="About and Philosophy" className="relative border-t border-white/[0.08] bg-[#09090b] z-10">
      
      {/* Scroll-Driven Sticky Philosophy Reveal Container */}
      <div ref={containerRef} className="h-[240vh] relative w-full">
        <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col justify-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
          
          {/* Top Progress Track */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-amber-400 origin-left z-50"
            style={{ scaleX: scrollYProgress }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Visual Portrait / Identity Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block lg:col-span-4 rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 relative group shadow-2xl h-[380px]"
            >
              {/* Portrait Image with Cinematic Grayscale-to-Color / Vignette */}
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
              />

              {/* Ambient Dark Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30 pointer-events-none" />

              {/* Content Overlaid on Card */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Bar */}
                <div className="flex items-center justify-between font-mono text-[11px] tracking-widest uppercase text-zinc-300">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">Manifesto</span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-amber-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Identity & Status */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-display font-bold text-white tracking-wide">
                        {PERSONAL_INFO.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                      Full Stack Developer & Systems Designer • Kolkata, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Scroll-Revealed Words */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-5 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-amber-400" />
                <span>Engineering Manifesto</span>
              </div>

              {/* Dynamic Word Light-Up */}
              <h3 className="flex flex-wrap text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.38] font-sans font-medium tracking-tight">
                {words.map((word, idx) => {
                  const isLit = idx < activeWordIndex;
                  return (
                    <motion.span
                      key={idx}
                      animate={{
                        opacity: isLit ? 1 : 0.14,
                        y: isLit ? 0 : 2,
                        color: isLit ? '#ffffff' : '#71717a',
                      }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="mr-[0.3em] my-[0.1em] inline-block transition-all"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h3>

              {/* Scroll Guidance Indicator */}
              <motion.div
                animate={{ opacity: activeWordIndex >= words.length ? 0 : 0.6 }}
                className="flex items-center gap-2 mt-6 font-mono text-[11px] tracking-widest uppercase text-zinc-400"
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
                </motion.div>
                <span>Keep scrolling to reveal philosophy</span>
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      {/* 3-Column Domain Expertise Grid (Underneath Scroll Reveal) */}
      <div className="border-t border-white/[0.08] px-6 sm:px-8 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Core Architecture */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-amber-400">
              <Layers className="w-4 h-4" />
              <h4>Core Engineering</h4>
            </div>
            <ul className="space-y-3.5 text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
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
            <ul className="space-y-3.5 text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
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
            <ul className="space-y-3.5 text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
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
