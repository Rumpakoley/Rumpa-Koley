import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import { Search, Code, Server, Database, Terminal, Cpu, ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const allSkills = useMemo(() => {
    let result = SKILL_CATEGORIES;

    if (selectedCategory !== 'All') {
      result = result.filter((cat) => cat.category === selectedCategory);
    }

    let flatList = result.flatMap((cat) =>
      cat.skills.map((skill) => ({
        ...skill,
        category: cat.category,
      }))
    );

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      flatList = flatList.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description?.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.level.toLowerCase().includes(q)
      );
    }

    return flatList;
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Frontend')) return Code;
    if (categoryName.includes('Backend')) return Server;
    if (categoryName.includes('Database')) return Database;
    if (categoryName.includes('Languages')) return Terminal;
    return Cpu;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" aria-label="Technical Stack" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-3">
            <span className="w-6 h-[1px] bg-amber-400" />
            <span>Technical Capabilities</span>
            <span className="text-zinc-500 font-bold">[{allSkills.length < 10 ? `0${allSkills.length}` : allSkills.length}]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-zinc-100">
            Stack & Technologies
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl font-sans leading-relaxed">
            Verified production competencies and architecture specialties. Scroll horizontally to explore full toolchain.
          </p>
        </div>

        {/* Minimal Search & Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search stack (e.g. React, PostgreSQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-xs font-mono rounded-full bg-zinc-900/90 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400/80 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-amber-400"
              >
                Clear
              </button>
            )}
          </div>

          {/* Desktop Left/Right Scroll Arrows */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll skills left"
              className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800 transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll skills right"
              className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800 transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs tracking-widest uppercase">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-amber-400 text-zinc-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Unified Single-Row Horizontal Scrolling Gallery */}
      {allSkills.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900/50 rounded-3xl border border-white/10 p-8">
          <p className="text-zinc-400 text-sm font-mono">
            No technologies found matching "{searchQuery}".
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 text-xs font-mono uppercase tracking-widest text-amber-400 hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="relative group/track">
          {/* Edge Fade Indicators */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#09090b] to-transparent z-10 opacity-70" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#09090b] to-transparent z-10 opacity-70" />

          {/* Horizontal Track */}
          <div
            ref={scrollContainerRef}
            id="skills-unified-scroll-track"
            className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent scroll-smooth px-2"
          >
            {allSkills.map((skill, index) => {
              const CategoryIcon = getCategoryIcon(skill.category);
              return (
                <motion.div
                  key={`${skill.category}-${skill.name}-${index}`}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start p-6 rounded-3xl bg-zinc-900/80 border border-white/10 hover:border-amber-400/50 transition-all flex flex-col justify-between group shadow-xl backdrop-blur-md relative overflow-hidden"
                >
                  {/* Subtle Card Ambient Highlight on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/[0.03] group-hover:bg-amber-400/[0.08] rounded-full blur-2xl pointer-events-none transition-all duration-500" />

                  <div>
                    {/* Domain & Level Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] tracking-wider uppercase">
                        <div className="p-1.5 rounded-lg bg-zinc-800 border border-white/10 text-amber-400">
                          <CategoryIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="truncate max-w-[130px]">{skill.category}</span>
                      </div>

                      <span
                        className={`text-[9px] font-mono tracking-wider px-2.5 py-0.5 rounded-full shrink-0 ${
                          skill.level === 'Core Expertise'
                            ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                            : skill.level === 'Production Ready'
                            ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                            : 'bg-zinc-800 text-zinc-300 border border-white/5'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h4 className="font-display font-bold text-lg text-zinc-100 group-hover:text-amber-400 transition-colors mb-2">
                      {skill.name}
                    </h4>

                    {/* Description */}
                    {skill.description && (
                      <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-sans font-light">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  {/* Card Footer Experience Meta */}
                  <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    <span>Experience</span>
                    <span className="text-amber-400 font-bold bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/10">
                      {skill.experienceYears}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden flex items-center justify-center gap-2 pt-2 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
            <span>Swipe horizontally to explore →</span>
          </div>
        </div>
      )}

    </section>
  );
};
