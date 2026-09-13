import React from 'react';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, CheckCircle, Trophy, BookOpen } from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

export const EducationAndAchievements: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education and Certifications"
      className="py-20 bg-white dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education (7 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wide uppercase mb-3">
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              Education & Engineering Foundation
            </h2>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  id={`education-${edu.id}`}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600/60 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mt-0.5">
                        {edu.institution}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          {edu.grade}
                        </span>
                      </div>

                      {/* Academic Highlights */}
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Coursework */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                          Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
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

          {/* Right Column: Achievements & Certifications (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wide uppercase mb-3">
              Credentials & Honors
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              Certifications & Achievements
            </h2>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  id={`achievement-${ach.id}`}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600/60 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 shrink-0">
                      {ach.category === 'Hackathon' ? (
                        <Trophy className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {ach.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                          {ach.date}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1.5">
                        Issued by: {ach.issuer}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                        {ach.description}
                      </p>

                      {ach.credentialUrl && (
                        <a
                          href={ach.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
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

      </div>
    </section>
  );
};
