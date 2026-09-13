import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, CheckCircle, Trophy } from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

export const EducationAndAchievements: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education and Certifications"
      className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Education */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-3">
              <span className="w-6 h-[1px] bg-amber-400" />
              <span>Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-100">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                id={`education-${edu.id}`}
                className="p-7 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-amber-400/40 transition-all backdrop-blur-xl space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/20 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-100">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-mono text-amber-400 mt-0.5">
                      {edu.institution}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mt-2 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {edu.location}
                      </span>
                      <span className="font-semibold text-emerald-400">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Academic Highlights */}
                    <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-zinc-300">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Coursework */}
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block mb-2 font-bold">
                        Key Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-0.5 rounded-md font-mono text-[10px] bg-zinc-800 text-zinc-300 border border-white/5"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements & Certifications */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-3">
              <span className="w-6 h-[1px] bg-amber-400" />
              <span>Honors & Proofs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-100">
              Certifications
            </h2>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                id={`achievement-${ach.id}`}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-amber-400/40 transition-all backdrop-blur-xl group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 shrink-0">
                    {ach.category === 'Hackathon' ? (
                      <Trophy className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-display font-bold text-base text-zinc-100 group-hover:text-amber-400 transition-colors">
                        {ach.title}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {ach.date}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-amber-400/90 mb-2">
                      Issuer: {ach.issuer}
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3">
                      {ach.description}
                    </p>

                    {ach.credentialUrl && (
                      <a
                        href={ach.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-amber-400 hover:text-amber-300 hover:underline"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
