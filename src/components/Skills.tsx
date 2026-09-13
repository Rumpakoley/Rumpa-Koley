import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Sparkles, Code, Server, Database, Terminal, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredSkills = useMemo(() => {
    let result = SKILL_CATEGORIES;

    if (selectedCategory !== 'All') {
      result = result.filter((cat) => cat.category === selectedCategory);
    }

    if (!searchQuery.trim()) {
      return result;
    }

    const query = searchQuery.toLowerCase().trim();
    return result
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(query) ||
            s.description?.toLowerCase().includes(query) ||
            s.level.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Frontend')) return Code;
    if (categoryName.includes('Backend')) return Server;
    if (categoryName.includes('Database')) return Database;
    if (categoryName.includes('Languages')) return Terminal;
    return Cpu;
  };

  const scrollCategory = (categoryId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(`skills-scroll-${categoryId}`);
    if (container) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" aria-label="Technical Stack" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-3">
            <span className="w-6 h-[1px] bg-amber-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-zinc-100">
            Stack & Technologies
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl font-sans leading-relaxed">
            Production competencies organized by domain architecture with horizontal browsing.
          </p>
        </div>

        {/* Minimal Search Input */}
        <div className="w-full md:w-80 relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            id="skills-search-input"
            type="text"
            placeholder="Filter technologies (e.g. React, Docker)..."
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
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none font-mono text-xs tracking-widest uppercase">
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

      {/* Categorized Skills Render (Horizontal Scroll) */}
      <div className="space-y-10">
        {filteredSkills.length === 0 ? (
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
          filteredSkills.map((categoryGroup) => {
            const CategoryIcon = getCategoryIcon(categoryGroup.category);
            const categoryId = categoryGroup.category.toLowerCase().replace(/[^a-z0-9]/g, '-');
            return (
              <div key={categoryGroup.category} className="space-y-4">
                {/* Category Header with Scroll Arrows */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-amber-400">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-100">
                          {categoryGroup.category}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-white/5">
                          {categoryGroup.skills.length}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-mono hidden sm:block">
                        {categoryGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Scroll Navigation Buttons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => scrollCategory(categoryId, 'left')}
                      aria-label={`Scroll ${categoryGroup.category} left`}
                      className="p-2 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800 transition-all cursor-pointer shadow-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCategory(categoryId, 'right')}
                      aria-label={`Scroll ${categoryGroup.category} right`}
                      className="p-2 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800 transition-all cursor-pointer shadow-sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Horizontal Skills Track */}
                <div
                  id={`skills-scroll-${categoryId}`}
                  className="flex items-stretch gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent scroll-smooth"
                >
                  {categoryGroup.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="w-[280px] sm:w-[320px] shrink-0 snap-start p-5 rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group shadow-sm backdrop-blur-sm"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-sm text-zinc-100 group-hover:text-amber-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span
                            className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                              skill.level === 'Core Expertise'
                                ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                                : skill.level === 'Production Ready'
                                ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                                : 'bg-zinc-800 text-zinc-300'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {skill.description && (
                          <p className="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed font-sans">
                            {skill.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        <span>Experience</span>
                        <span className="text-zinc-200 font-bold">{skill.experienceYears}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

    </section>
  );
};
