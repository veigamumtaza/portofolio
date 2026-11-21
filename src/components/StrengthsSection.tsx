import React from 'react';
import { STRENGTH_PILLARS } from '../data/portfolioData';
import { SmallBlueBow } from './ScrapbookMotifs';

export function StrengthsSection() {
  return (
    <section id="strengths" className="relative bg-fabric-blue-pattern py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Script and Flanking Bows */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-4">
            <div className="w-10 h-10 hidden sm:block">
              <SmallBlueBow />
            </div>
            <h2 className="font-calligraphy text-5xl sm:text-6xl text-cocoa-ink die-cut-sticker inline-block px-2 whitespace-nowrap">
              What i Bring
            </h2>
            <div className="w-10 h-10 hidden sm:block">
              <SmallBlueBow />
            </div>
          </div>
          <p className="text-xs font-semibold text-cocoa-muted tracking-widest uppercase mt-2">
            Distinct value pillars crafted through leadership &amp; STEM education
          </p>
        </div>

        {/* 2x2 Grid of Blush Pink Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {STRENGTH_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="bg-card-pink rounded-2xl p-6 sm:p-7 border border-white/65 shadow-paper relative transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Washi tape at top */}
              <div
                className={`${
                  pillar.tapeVariant === 'stripes' ? 'washi-tape-stripes' : 'washi-tape'
                } w-20 h-5 absolute -top-2.5 ${
                  pillar.tapeSide === 'left' ? 'left-8' : 'right-8'
                } transform ${pillar.tapeTilt}`}
              />

              <div>
                <div className="inline-block bg-white border border-stone-200 px-3 py-1 rounded-md mb-3 shadow-xs">
                  <h3 className="font-mono text-xs font-bold tracking-wider text-cocoa-ink uppercase">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-cocoa-ink leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cocoa-ink/10 flex items-center justify-between text-[11px] font-semibold text-cocoa-muted gap-2">
                <span>{pillar.leftMeta}</span>
                <span>{pillar.rightMeta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Scalloped Lace Divider */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider pointer-events-none" />
    </section>
  );
}
