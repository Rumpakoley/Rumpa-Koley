import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend / API'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      aria-label="Selected Engineering Work"
      className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
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

        {/* Minimalist Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs tracking-widest uppercase">
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
      </div>

      {/* Asymmetric Bento Grid Showcase (Mrinmoy Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {filteredProjects.map((project, index) => {
          // Asymmetric bento spans for editorial layout
          const isLarge = index === 0 || index === 3;
          const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className={`group relative rounded-3xl overflow-hidden bg-zinc-900/80 border border-white/10 hover:border-amber-400/40 transition-all duration-500 cursor-pointer ${colSpan} flex flex-col justify-between min-h-[460px]`}
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
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-amber-400 group-hover:text-zinc-950 group-hover:scale-110 transition-all duration-300">
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
          );
        })}
      </div>
    </section>
  );
};
