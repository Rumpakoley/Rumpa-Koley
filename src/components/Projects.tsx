import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend / API'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -480 : 480;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      aria-label="Selected Engineering Work"
      className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-3">
            <span className="w-6 h-[1px] bg-amber-400" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-zinc-100 flex items-baseline gap-3">
            Selected Work
            <sup className="text-xs font-mono text-zinc-500 font-normal">
              [0{filteredProjects.length}]
            </sup>
          </h2>
        </div>

        {/* Controls: Filter Pills & Scroll Buttons */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          {/* Minimalist Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-mono text-xs tracking-widest uppercase">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-zinc-100 text-zinc-950 font-bold shadow-md'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll projects left"
              className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-amber-400/50 transition-all hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll projects right"
              className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-amber-400/50 transition-all hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="relative group/track">
        {/* Subtle Edge Fade Indicators */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#09090b] to-transparent z-10 opacity-70 hidden sm:block" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#09090b] to-transparent z-10 opacity-70 hidden sm:block" />

        <div
          ref={scrollContainerRef}
          id="projects-horizontal-scroll-track"
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent scroll-smooth px-1"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="w-[86vw] sm:w-[480px] md:w-[540px] lg:w-[580px] shrink-0 snap-start group relative rounded-3xl overflow-hidden bg-zinc-900/80 border border-white/10 hover:border-amber-400/40 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[480px] sm:min-h-[500px] shadow-2xl"
            >
              {/* Background Cover Image with Grayscale-to-Color Reveal */}
              <div className="absolute inset-0 overflow-hidden bg-zinc-950">
                <img
                  src={project.thumbnailUrl}
                  alt={`${project.title} Preview`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:via-black/40 transition-all duration-500" />
              </div>

              {/* Card Header Overlay */}
              <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-bold bg-amber-400 text-zinc-950 shadow-md">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Floating Round Glass Button */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-amber-400 group-hover:text-zinc-950 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Bottom Meta & Content */}
              <div className="relative z-10 p-6 sm:p-8 mt-auto space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-100 group-hover:text-white transition-colors">
                    “{project.title}”
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed font-sans max-w-xl">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wider bg-zinc-900/80 backdrop-blur-md text-zinc-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-widest uppercase">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
                        aria-label={`Open demo for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.sourceCodeUrl && (
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
