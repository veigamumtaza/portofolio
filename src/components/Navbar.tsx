import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Index', href: '#toc' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Works', href: '#works' },
  { label: 'Honors', href: '#achievements' },
];

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 76;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav aria-label="Main Navigation" className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4">
      <div className="w-full max-w-4xl bg-cream-paper/92 backdrop-blur-md border-2 border-white/85 shadow-paper rounded-full py-2 px-4 md:px-6 flex items-center justify-between gap-8 text-xs md:text-sm font-semibold tracking-wide text-cocoa-ink">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="font-calligraphy text-2xl sm:text-3xl text-cocoa-ink whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocoa-ink rounded"
        >
          Veiga
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="whitespace-nowrap shrink-0 hover:text-ribbon-brown transition-colors pb-0.5 border-b-2 border-transparent hover:border-ribbon-brown focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocoa-ink rounded-xs"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Zone 3: 1 Primary Action + mobile menu trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="bg-fabric-pink text-cocoa-ink border border-white px-4 py-2 rounded-full text-xs font-bold tracking-wider shadow-xs hover:bg-card-pink transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-ink"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-10 h-10 rounded-full bg-white/80 border border-stone-200 flex items-center justify-center text-cocoa-ink hover:bg-white transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 w-full max-w-sm bg-cream-paper/95 backdrop-blur-md border-2 border-white rounded-2xl shadow-paper-deep p-3 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-cocoa-ink hover:bg-card-pink/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
