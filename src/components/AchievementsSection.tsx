import React, { useState } from 'react';
import { Award, BookOpen, Medal, Mic, PenTool } from 'lucide-react';
import { ACHIEVEMENTS, AchievementItem } from '../data/portfolioData';

type FilterCategory = 'All' | 'STEM' | 'Oratory & Arts' | 'Tahfidz';

const CATEGORIES: { key: FilterCategory; label: string }[] = [
  { key: 'All', label: 'All Honors' },
  { key: 'STEM', label: 'STEM Olympiads' },
  { key: 'Oratory & Arts', label: 'Oratory & Arts' },
  { key: 'Tahfidz', label: 'Tahfidz' },
];

export function AchievementsSection() {
  const [filter, setFilter] = useState<FilterCategory>('All');

  const filteredAchievements =
    filter === 'All' ? ACHIEVEMENTS : ACHIEVEMENTS.filter((item) => item.category === filter);

  const renderIcon = (iconType: AchievementItem['iconType']) => {
    switch (iconType) {
      case 'book':
        return <BookOpen className="w-5 h-5 text-cocoa-ink" aria-hidden="true" />;
      case 'medal-silver':
        return <Medal className="w-5 h-5 text-slate-600" aria-hidden="true" />;
      case 'medal-bronze':
        return <Award className="w-5 h-5 text-amber-700" aria-hidden="true" />;
      case 'mic':
        return <Mic className="w-5 h-5 text-cocoa-ink" aria-hidden="true" />;
      case 'pen':
        return <PenTool className="w-5 h-5 text-cocoa-ink" aria-hidden="true" />;
    }
  };

  const getTapeClass = (variant: AchievementItem['tapeVariant']) => {
    if (variant === 'stripes') return 'washi-tape-stripes';
    if (variant === 'polka') return 'washi-tape-polka';
    return 'washi-tape';
  };

  return (
    <section id="achievements" className="relative bg-fabric-pink-pattern py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Script Title with Note */}
        <div className="text-center mb-8">
          <h2 className="font-calligraphy text-5xl sm:text-6xl text-cocoa-ink die-cut-sticker inline-block">
            Honors &amp; Achievements
          </h2>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <span className="font-script text-2xl text-cocoa-muted whitespace-nowrap">
              alhamdulillah ✦
            </span>
            <span className="text-xs font-semibold text-cocoa-muted tracking-widest uppercase">
              Milestones across STEM &amp; arts
            </span>
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-1 p-1.5 bg-white/55 backdrop-blur-xs border border-white rounded-2xl shadow-xs"
            role="tablist"
            aria-label="Filter achievements by category"
          >
            {CATEGORIES.map((cat) => {
              const active = filter === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(cat.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-cocoa-ink text-cream-paper shadow-xs'
                      : 'text-cocoa-ink hover:bg-white/70'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Index Cards pinned with washi tapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <article
              key={item.id}
              className={`relative bg-cream-paper rounded-xl p-5 shadow-paper border border-stone-200 transform ${item.tiltClass} hover:rotate-0 transition-transform duration-200 flex flex-col justify-between`}
            >
              <div
                className={`${getTapeClass(item.tapeVariant)} w-16 h-4 absolute -top-2 ${
                  item.tapeSide === 'left' ? 'left-8' : 'right-8'
                }`}
              />

              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center shadow-xs mb-3">
                  {renderIcon(item.iconType)}
                </div>
                <h3 className="font-serif font-bold text-base text-cocoa-ink">{item.title}</h3>
                <p className="text-xs text-cocoa-muted mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-200 text-[10px] font-mono tabular-nums text-cocoa-muted uppercase">
                {item.badgeText}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Scalloped Lace Divider */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider-pink pointer-events-none" />
    </section>
  );
}
