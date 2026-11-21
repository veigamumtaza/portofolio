import React from 'react';
import { Expand } from 'lucide-react';
import {
  COMMITTEE_ROLES,
  SELECTED_WORKS_ITEMS,
  ShowcaseWorkItem,
} from '../data/portfolioData';
import { ResilientPhoto } from './ScrapbookMotifs';

interface WorksSectionProps {
  onSelectWork: (item: ShowcaseWorkItem) => void;
}

export function WorksSection({ onSelectWork }: WorksSectionProps) {
  const academicWorks = SELECTED_WORKS_ITEMS.filter((w) => w.block === 'academic');
  const eventWorks = SELECTED_WORKS_ITEMS.filter((w) => w.block === 'events');

  const renderShowcaseCard = (item: ShowcaseWorkItem, fallbackKind: 'document' | 'event') => (
    <button
      key={item.id}
      type="button"
      onClick={() => onSelectWork(item)}
      className={`group relative bg-white rounded-2xl p-3 shadow-paper-deep border border-stone-200 transform ${item.tiltClass} hover:rotate-0 transition-transform duration-200 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocoa-ink`}
      aria-label={`View details for ${item.subtitle}`}
    >
      <div
        className={`${
          item.tapeVariant === 'stripes' ? 'washi-tape-stripes' : 'washi-tape'
        } w-16 h-5 absolute -top-2 left-1/2 -translate-x-1/2 z-20`}
      />
      <div className="aspect-[9/16] bg-stone-100 rounded-xl overflow-hidden relative border border-stone-100">
        <ResilientPhoto
          src={item.imageUrl}
          alt={item.imageAlt}
          fallbackTitle={item.subtitle}
          fallbackKind={fallbackKind}
          className="filter contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa-ink/75 via-cocoa-ink/10 to-transparent flex items-end justify-between p-4">
          <p className="text-white text-xs font-semibold leading-snug">{item.subtitle}</p>
          <span className="w-7 h-7 rounded-full bg-white/90 text-cocoa-ink flex items-center justify-center shadow-xs opacity-90 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
            <Expand className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
      <p className="text-center font-mono text-[10px] text-cocoa-muted uppercase mt-2">
        {item.caption}
      </p>
    </button>
  );

  return (
    <section id="works" className="relative bg-fabric-pink-pattern py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* BLOCK 1: Academic & Speaking Selected Works */}
        <div className="relative bg-white/45 backdrop-blur-xs border-2 border-white rounded-3xl p-6 sm:p-10 shadow-paper">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-stone-200 flex items-center justify-center font-mono tabular-nums font-bold text-sm text-cocoa-ink shrink-0">
              1.
            </div>
            <h2 className="font-calligraphy text-4xl sm:text-5xl text-cocoa-ink die-cut-sticker whitespace-nowrap">
              Selected Works
            </h2>
            <span className="ml-auto text-xs font-mono text-cocoa-muted tracking-widest uppercase hidden sm:inline-block">
              ACADEMIC &amp; ORATORY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description Side */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-cocoa-ink text-balance">
                Takhrij Hadits Research: Konsep 'Yusr' (Kemudahan) dalam Syariat
              </h3>
              <p className="text-xs sm:text-sm text-cocoa-ink leading-relaxed">
                An exhaustive academic paper examining the Sanad and Matan of the prophetic
                narration on facilitation in Islamic law. Conducted utilizing primary classical
                hadith encyclopedias, cross-referencing narrator credibility (Ilm al-Rijal), and
                thematic contemporary applications.
              </p>

              <div className="bg-cream-paper p-4 rounded-xl border border-stone-200 space-y-2 text-xs">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-cocoa-ink">Methodology:</span>
                  <span className="text-cocoa-muted font-mono">Takhrij al-Hadith bi al-Lafz</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-cocoa-ink">Institution:</span>
                  <span className="text-cocoa-muted">PPI 67 Benda Tasikmalaya</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-cocoa-ink">Status:</span>
                  <span className="text-emerald-800 font-semibold">
                    Munaqasyah A (Distinction)
                  </span>
                </div>
              </div>

              <div className="pt-1 text-xs font-semibold text-cocoa-ink">
                ✦ Biantara Sunda Mentorship &amp; Finalist 2024
              </div>
            </div>

            {/* Dual Mockup Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {academicWorks.map((item) => renderShowcaseCard(item, 'document'))}
            </div>
          </div>
        </div>

        {/* BLOCK 2: Event Leadership Journey */}
        <div className="relative bg-white/45 backdrop-blur-xs border-2 border-white rounded-3xl p-6 sm:p-10 shadow-paper">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-stone-200 flex items-center justify-center font-mono tabular-nums font-bold text-sm text-cocoa-ink shrink-0">
              2.
            </div>
            <h2 className="font-calligraphy text-4xl sm:text-5xl text-cocoa-ink die-cut-sticker whitespace-nowrap">
              Event Journey
            </h2>
            <span className="ml-auto text-xs font-mono text-cocoa-muted tracking-widest uppercase hidden sm:inline-block">
              LEADERSHIP IN ACTION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Dual Mockup Frames */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {eventWorks.map((item) => renderShowcaseCard(item, 'event'))}
            </div>

            {/* Description Side */}
            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-cocoa-ink text-balance">
                Multi-Tiered Committee Leadership Portfolio
              </h3>
              <p className="text-xs sm:text-sm text-cocoa-ink leading-relaxed">
                Orchestrating high-stakes assemblies with clarity, diplomacy, and administrative
                precision. Key committee roles held include:
              </p>

              <ul className="space-y-2 text-xs text-cocoa-ink font-sans">
                {COMMITTEE_ROLES.map((item) => (
                  <li
                    key={item.role}
                    className="flex items-start gap-2 bg-cream-paper p-2.5 rounded-lg border border-stone-200"
                  >
                    <span className="text-ribbon-brown font-bold mt-0.5" aria-hidden="true">
                      ✦
                    </span>
                    <div>
                      <strong className="font-semibold text-cocoa-ink">{item.role}:</strong>{' '}
                      {item.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scalloped Lace Divider */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider-pink pointer-events-none" />
    </section>
  );
}
