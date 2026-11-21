import React from 'react';
import { TOC_LEFT, TOC_RIGHT } from '../data/portfolioData';
import { LargeBlueSatinBow } from './ScrapbookMotifs';

export function TableOfContentsSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="toc" className="relative bg-fabric-pink-pattern py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Script Title with Die-Cut Effect */}
        <div className="text-center mb-14">
          <h2 className="font-calligraphy text-5xl sm:text-6xl text-cocoa-ink die-cut-sticker inline-block">
            Table of Contents
          </h2>
          <p className="text-xs font-semibold text-cocoa-muted tracking-widest uppercase mt-2">
            Guided journey through my archives
          </p>
        </div>

        {/* Table of Contents Scrapbook Grid */}
        <div className="relative bg-white/45 backdrop-blur-xs border-2 border-white rounded-3xl p-6 sm:p-12 shadow-paper">
          {/* Pinned Corner Washi Tapes */}
          <div className="washi-tape w-20 h-6 absolute -top-3 -left-3 transform -rotate-12" />
          <div className="washi-tape w-20 h-6 absolute -top-3 -right-3 transform rotate-12" />

          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
            {/* Left Column (01 - 03) */}
            <div className="md:col-span-5 space-y-4">
              {TOC_LEFT.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="group flex items-center justify-between sm:justify-end gap-3 p-2.5 rounded-xl hover:bg-white/65 transition-colors"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-cocoa-ink tracking-wider group-hover:text-cocoa-muted transition-colors order-2 sm:order-1 text-left sm:text-right">
                    {item.label}
                  </span>
                  <span className="w-9 h-9 rounded-lg bg-white border border-cocoa-ink/10 flex items-center justify-center font-mono tabular-nums text-xs font-bold text-cocoa-ink shadow-xs group-hover:scale-105 transition-transform order-1 sm:order-2 shrink-0">
                    {item.number}
                  </span>
                </a>
              ))}
            </div>

            {/* Center Column: Decorative Large Dusty Blue Satin Bow */}
            <div className="md:col-span-1 flex justify-center py-2 md:py-0">
              <div className="w-20 md:w-28 flex flex-col items-center">
                <LargeBlueSatinBow />
              </div>
            </div>

            {/* Right Column (04 - 06) */}
            <div className="md:col-span-5 space-y-4">
              {TOC_RIGHT.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="group flex items-center justify-start gap-3 p-2.5 rounded-xl hover:bg-white/65 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-white border border-cocoa-ink/10 flex items-center justify-center font-mono tabular-nums text-xs font-bold text-cocoa-ink shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    {item.number}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-cocoa-ink tracking-wider group-hover:text-cocoa-muted transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scalloped Lace Divider */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider-pink pointer-events-none" />
    </section>
  );
}
