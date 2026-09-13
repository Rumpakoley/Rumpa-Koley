import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Work', href: '#projects', num: '01' },
    { label: 'About', href: '#about', num: '02' },
    { label: 'Stack', href: '#skills', num: '03' },
    { label: 'Experience', href: '#experience', num: '04' },
    { label: 'Contact', href: '#contact', num: '05' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'projects', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Minimalist Monospace Brand Metadata */}
          <a
            href="#hero"
            id="brand-logo-link"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-400/50 group-hover:scale-105 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="font-mono text-[11px] tracking-widest uppercase leading-tight">
              <span className="text-zinc-100 font-bold tracking-tight block">Rumpa Koley</span>
              <span className="text-zinc-400 text-[9px] block">Full Stack Dev ©2026</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-amber-400 font-semibold opacity-100'
                      : 'text-zinc-400 hover:text-zinc-100 opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="opacity-40 mr-1 text-[9px]">[{link.num}]</span>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-amber-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-resume-button"
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] tracking-widest uppercase text-zinc-300 bg-zinc-900/80 hover:bg-zinc-850 hover:text-white border border-white/10 hover:border-amber-400/50 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Resume</span>
            </button>

            <a
              id="nav-contact-cta"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-mono text-[11px] tracking-widest uppercase font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-zinc-300 bg-zinc-900 border border-white/10 hover:border-white/20"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-2 duration-300"
        >
          <div className="flex flex-col gap-2 mb-6 font-mono text-xs tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-white/5 transition-colors"
              >
                <span className="opacity-40 mr-2 text-[10px]">[{link.num}]</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <button
              id="mobile-resume-button"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs tracking-widest uppercase text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-colors"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              View & Download Resume
            </button>
            <a
              id="mobile-contact-cta"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs tracking-widest uppercase font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20"
            >
              Contact Directly
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
