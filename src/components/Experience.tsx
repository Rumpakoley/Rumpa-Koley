import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Work Experience"
      className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-3">
          <span className="w-6 h-[1px] bg-amber-400" />
          <span>Professional History</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-zinc-100">
          Work Experience
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base font-sans leading-relaxed">
          Track record of production execution, full-stack microservices architecture, and high-impact digital systems.
        </p>
      </div>

      {/* Structured Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            id={`experience-item-${exp.id}`}
            className="relative group"
          >
            {/* Timeline Indicator Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-amber-400 group-hover:scale-125 transition-transform" />

            {/* Experience Glass Card */}
            <div className="p-7 rounded-3xl bg-zinc-900/60 border border-white/10 group-hover:border-amber-400/40 transition-all backdrop-blur-xl shadow-sm">
              
              {/* Role, Company, Period Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-100 flex items-center gap-3">
                    {exp.role}
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
                      {exp.type}
                    </span>
                  </h3>
                  <div className="text-amber-400 font-mono text-sm tracking-wide mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Short Overview */}
              <p className="text-sm text-zinc-300 mb-5 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Key Responsibilities */}
              <div className="space-y-2 mb-6">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Core Engineering Deliverables:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies used in this role */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 mr-2">
                  Tech Stack:
                </span>
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 rounded-md font-mono text-[10px] bg-zinc-800 text-zinc-300 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
