import React, { useEffect } from 'react';
import { X, Download, Printer } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Top Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/80 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-400 font-bold tracking-wider">[CV_DOC]</span>
            <h2 id="resume-title" className="text-sm font-semibold tracking-wide text-zinc-100 uppercase font-display">
              Curriculum Vitae / Resume
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              ATS Standard
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Print resume"
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <a
              id="resume-download-btn"
              href="/api/resume/download"
              download="Rumpa_Koley_Full_Stack_Developer_Resume.txt"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all duration-300 shadow-md shadow-amber-400/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download TXT</span>
            </a>

            <button
              id="close-resume-btn"
              type="button"
              onClick={onClose}
              aria-label="Close resume dialog"
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable ATS-Friendly Document View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-zinc-950 text-zinc-300 selection:bg-amber-400 selection:text-black font-sans">
          <div className="max-w-3xl mx-auto space-y-7">
            
            {/* Header / Identity */}
            <div className="border-b pb-6 border-white/10 text-center sm:text-left sm:flex sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-xs font-mono font-bold text-amber-400 mt-1 uppercase tracking-wider">
                  {PERSONAL_INFO.role}
                </div>
              </div>

              <div className="mt-4 sm:mt-0 text-xs text-zinc-400 space-y-1 sm:text-right font-mono">
                <div>{PERSONAL_INFO.email}</div>
                <div>{PERSONAL_INFO.location}</div>
                <div className="flex sm:justify-end gap-3 text-amber-400 font-semibold">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline underline-offset-4">GitHub</a>
                  <span>•</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline underline-offset-4">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2 border-b border-white/10 pb-1.5 flex items-center gap-2">
                <span className="text-amber-400">//</span> Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                Passionate, results-driven Full Stack Developer with experience in architecting and delivering high-performance, accessible, and responsive web applications. Strong foundation in TypeScript, React, Node.js/Express, modern state management, and database architectures (PostgreSQL, MongoDB). Proven ability to translate complex business specifications into intuitive user interfaces and reliable backend microservices.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2 border-b border-white/10 pb-1.5 flex items-center gap-2">
                <span className="text-amber-400">//</span> Technical Skills
              </h2>
              <div className="text-xs space-y-1.5 text-zinc-300">
                <p><strong className="text-zinc-100">Languages:</strong> TypeScript, JavaScript (ES6+), Python, SQL, C/C++, HTML5, CSS3</p>
                <p><strong className="text-zinc-100">Frontend:</strong> React 19, Next.js, Vite, Tailwind CSS, Redux Toolkit, Zustand, Motion, Web Accessibility (WCAG)</p>
                <p><strong className="text-zinc-100">Backend & APIs:</strong> Node.js, Express.js, REST APIs, GraphQL, WebSockets, JWT, System Design</p>
                <p><strong className="text-zinc-100">Databases:</strong> PostgreSQL, MongoDB, Redis, Prisma ORM, Drizzle ORM</p>
                <p><strong className="text-zinc-100">DevOps & Tools:</strong> Git, GitHub, Docker, Postman, Linux/Bash, CI/CD Actions</p>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-3 border-b border-white/10 pb-1.5 flex items-center gap-2">
                <span className="text-amber-400">//</span> Experience
              </h2>
              <div className="space-y-5">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white">
                      <div>
                        <span>{exp.role}</span> <span className="text-zinc-500 font-light">@</span> <span className="text-amber-400 font-medium">{exp.company}</span>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5 list-disc list-inside text-zinc-400 text-xs">
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
              <h2 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-3 border-b border-white/10 pb-1.5 flex items-center gap-2">
                <span className="text-amber-400">//</span> Key Engineering Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS.slice(0, 3).map((p) => (
                  <div key={p.id} className="text-xs sm:text-sm">
                    <div className="font-semibold text-white flex items-center justify-between">
                      <span>{p.title}</span>
                      <span className="text-[10px] font-mono text-zinc-500">{p.technologies.slice(0, 3).join(', ')}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      {p.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2 border-b border-white/10 pb-1.5 flex items-center gap-2">
                <span className="text-amber-400">//</span> Education
              </h2>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-semibold text-white">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-[11px] text-zinc-500">{edu.period}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {edu.institution} • <span className="text-amber-400 font-mono">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2 border-b border-white/10 pb-1.5 flex items-center gap-2">
                <span className="text-amber-400">//</span> Certifications & Achievements
              </h2>
              <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1.5">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.id}>
                    <strong className="text-zinc-200">{ach.title}</strong> — {ach.issuer} <span className="font-mono text-zinc-500">({ach.date})</span>
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
