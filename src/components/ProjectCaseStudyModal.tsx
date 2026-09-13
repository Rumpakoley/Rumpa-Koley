import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers, Sparkles, Target, Award, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="case-study-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 rounded-3xl shadow-2xl border border-white/10 overflow-y-auto text-zinc-100"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase bg-amber-400/10 text-amber-400 border border-amber-400/20 font-bold">
              {project.category}
            </span>
            <span className="font-mono text-xs text-zinc-500">Technical Case Study</span>
          </div>

          <button
            id="close-case-study-btn"
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 hover:border-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Short Summary */}
          <div>
            <h2 id="case-study-title" className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-100 tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
              {project.shortDescription}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.liveDemoUrl && (
                <a
                  id="case-study-live-demo-link"
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  id="case-study-github-repo-link"
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Preview Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-80 bg-zinc-950">
            <img
              src={project.thumbnailUrl}
              alt={`${project.title} Interface preview`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('cloudinary.com')) {
                  target.src = 'https://res.cloudinary.com/dpdtsaalf/image/upload/w_1200,f_auto,q_auto/v1787910634/WhatsApp_Image_2026-08-27_at_9.05.33_PM_vwnozh.jpg';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics If available */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl bg-zinc-900/80 border border-white/10 text-center">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-amber-400">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Grid of Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-rose-400 font-display font-bold text-sm">
                <Target className="w-4 h-4" />
                <h3>The Problem & Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-display font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <h3>The Engineering Solution</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-zinc-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              Key Architectural Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-4 rounded-xl bg-zinc-900/50 border border-white/5"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-zinc-100 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              Technical Architecture & Stack Implementation
            </h3>
            <div className="p-5 rounded-2xl bg-zinc-900 text-zinc-300 font-mono text-xs leading-relaxed border border-white/10">
              <p>{caseStudy.architecture}</p>
            </div>
          </div>

          {/* Direct Contributions */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-zinc-100 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Direct Engineering Contributions
            </h3>
            <ul className="space-y-2 font-sans">
              {caseStudy.contribution.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300"
                >
                  <span className="text-amber-400 font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Outcome */}
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              Measurable Outcome & Performance
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-sans">
              {caseStudy.outcome}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 px-8 py-4 bg-zinc-950/95 backdrop-blur-xl border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full font-mono text-xs tracking-widest uppercase text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
