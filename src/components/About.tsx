import React from 'react';
import { Code, Database, Layout, ShieldCheck, Zap, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Layout,
      title: 'Frontend Engineering',
      description: 'Creating accessible, responsive, and pixel-precise user interfaces with React, TypeScript, and Tailwind CSS.',
    },
    {
      icon: Database,
      title: 'Backend & Data Architecture',
      description: 'Designing modular REST APIs, secure authentication flows, and relational / document database schemas with PostgreSQL & MongoDB.',
    },
    {
      icon: Zap,
      title: 'Performance & Optimization',
      description: 'Prioritizing bundle reduction, network caching, sub-100ms response targets, and 95+ Lighthouse benchmark scores.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Growth Mindset',
      description: 'Constantly testing new ecosystem standards, contributing to open-source, and sharpening algorithmic problem solving.',
    },
  ];

  return (
    <section id="about" aria-label="About Me" className="py-20 bg-white dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wide uppercase mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crafting resilient software with end-to-end technical empathy.
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative / Bio */}
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am a <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer</strong> driven by a passion for dissecting complex problems and translating them into elegant, reliable digital products. My journey began with algorithmic problem solving and quickly evolved into engineering full-stack production systems.
            </p>
            <p>
              Whether structuring efficient PostgreSQL relations, tuning Express middleware pipelines, or refining micro-interactions in React, I bridge the gap between backend scalability and delightful, accessible user interfaces. I value clear code architecture, comprehensive testing, and transparent documentation.
            </p>
            <p>
              Beyond routine code development, I actively stay abreast of modern cloud practices, contribute to collaborative developer workflows, and solve data structure challenges. I believe that true engineering craftsmanship lives at the intersection of technical rigor and thoughtful human-centered design.
            </p>

            {/* Quick Quote / Personal Principle */}
            <div className="pt-2">
              <blockquote className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border-l-4 border-amber-500 text-sm italic text-slate-700 dark:text-slate-300">
                "Great software is not just about writing code that machines can execute; it's about building systems that humans can maintain, scale, and love using."
              </blockquote>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  id={`about-pillar-${idx}`}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600/60 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
