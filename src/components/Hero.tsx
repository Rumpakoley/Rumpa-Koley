import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Download, Sparkles, Terminal, CheckCircle2, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle Background Glow Elements (clean, non-clashing) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 dark:bg-amber-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-yellow-500/10 dark:bg-yellow-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Developer Name & Title */}
            <h1
              id="hero-developer-name"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-300">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              <span className="text-amber-500 dark:text-amber-400 font-mono">›</span>
              <h2>{PERSONAL_INFO.role}</h2>
            </div>

            {/* Value Proposition */}
            <p
              id="hero-value-prop"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              {PERSONAL_INFO.headline} I specialize in translating complex architectural requirements into seamless, accessible frontend interfaces and resilient full-stack cloud services.
            </p>

            {/* Primary & Secondary CTAs (SRS Mandate) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 dark:bg-amber-400 dark:hover:bg-amber-300 transition-all shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all border border-slate-200 dark:border-slate-700 shadow-xs hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Contact Me</span>
              </button>

              <button
                id="hero-resume-cta"
                type="button"
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Social Verification & Links */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rumpa Koley GitHub Profile"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rumpa Koley LinkedIn Profile"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send email to Rumpa Koley"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="hidden sm:inline-block text-xs text-slate-400 dark:text-slate-600">•</span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-500 dark:text-slate-400">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Right Column: Professional Profile Visual & Terminal Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              id="hero-visual-container"
              className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40 overflow-hidden"
            >
              {/* Card Window Header */}
              <div className="px-4 py-3 bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  <span>developer@rumpa:~$</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal / Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                <div>
                  <span className="text-slate-400 select-none">$ </span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">whoami</span>
                  <p className="mt-1 text-slate-600 dark:text-slate-400 pl-4 border-l-2 border-amber-300 dark:border-amber-800/80">
                    "Rumpa Koley — Full Stack Developer"
                  </p>
                </div>

                <div>
                  <span className="text-slate-400 select-none">$ </span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">cat skills.json</span>
                  <div className="mt-1 text-xs text-slate-600 dark:text-slate-400 pl-4 border-l-2 border-amber-300 dark:border-amber-800/80">
                    <p className="text-amber-600 dark:text-amber-400">"frontend": ["React 19", "TypeScript", "Tailwind CSS"],</p>
                    <p className="text-emerald-600 dark:text-emerald-400">"backend": ["Node.js", "Express", "REST APIs"],</p>
                    <p className="text-yellow-600 dark:text-yellow-400">"database": ["PostgreSQL", "MongoDB", "Redis"]</p>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 select-none">$ </span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">system.status</span>
                  <div className="mt-1 flex flex-wrap gap-2 pl-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2 className="w-3 h-3" /> Ready to Deploy
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                      <Sparkles className="w-3 h-3" /> 99.9% Uptime Mindset
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="p-4 bg-slate-50/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-base font-bold text-amber-500 dark:text-amber-400">15+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Projects Built</div>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-base font-bold text-yellow-500 dark:text-yellow-400">2+ Yrs</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Experience</div>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Clean Code</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
