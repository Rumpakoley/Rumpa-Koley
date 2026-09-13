import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Top Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <h2 id="resume-title" className="text-base font-bold text-slate-900 dark:text-white">
              Curriculum Vitae / Resume
            </h2>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-medium">
              Verified ATS Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Print resume"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <a
              id="resume-download-btn"
              href="/api/resume/download"
              download="Rumpa_Koley_Full_Stack_Developer_Resume.txt"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            <button
              id="close-resume-btn"
              type="button"
              onClick={onClose}
              aria-label="Close resume dialog"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable ATS-Friendly Document View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Header / Identity */}
            <div className="border-b pb-4 border-slate-200 dark:border-slate-800 text-center sm:text-left sm:flex sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                  {PERSONAL_INFO.role}
                </div>
              </div>

              <div className="mt-3 sm:mt-0 text-xs text-slate-500 dark:text-slate-400 space-y-1 sm:text-right font-mono">
                <div>{PERSONAL_INFO.email}</div>
                <div>{PERSONAL_INFO.location}</div>
                <div className="flex sm:justify-end gap-3 text-indigo-600 dark:text-indigo-400">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                  <span>•</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Passionate, results-driven Full Stack Developer with experience in architecting and delivering high-performance, accessible, and responsive web applications. Strong foundation in TypeScript, React, Node.js/Express, modern state management, and database architectures (PostgreSQL, MongoDB). Proven ability to translate complex business specifications into intuitive user interfaces and reliable backend microservices.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Technical Skills
              </h2>
              <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <p><strong>Languages:</strong> TypeScript, JavaScript (ES6+), Python, SQL, C/C++, HTML5, CSS3</p>
                <p><strong>Frontend:</strong> React 19, Next.js, Vite, Tailwind CSS, Redux Toolkit, Zustand, Motion, Web Accessibility (WCAG)</p>
                <p><strong>Backend & APIs:</strong> Node.js, Express.js, REST APIs, GraphQL, WebSockets, JWT, System Design</p>
                <p><strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Prisma ORM, Drizzle ORM</p>
                <p><strong>DevOps & Tools:</strong> Git, GitHub, Docker, Postman, Linux/Bash, CI/CD Actions</p>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
                Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white">
                      <div>
                        <span>{exp.role}</span> — <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{exp.company}</span>
                      </div>
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400 font-mono">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-600 dark:text-slate-300 text-xs">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Highlight */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
                Key Engineering Projects
              </h2>
              <div className="space-y-3">
                {PROJECTS.slice(0, 3).map((p) => (
                  <div key={p.id} className="text-xs sm:text-sm">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{p.title}</span>
                      <span className="text-[11px] font-mono text-slate-500">{p.technologies.slice(0, 3).join(', ')}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {p.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Education
              </h2>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-xs text-slate-500">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {edu.institution} • {edu.grade}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Certifications & Achievements
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.id}>
                    <strong>{ach.title}</strong> — {ach.issuer} ({ach.date})
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
