import React from 'react';
import { Camera } from 'lucide-react';
import { EXPERTISE_ROWS } from '../data/portfolioData';
import { SingleTulipSticker } from './ScrapbookMotifs';

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative bg-fabric-blue-pattern py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Envelope & Flower Collage Visual */}
          <div className="lg:col-span-5 relative flex justify-center pt-10">
            <div className="relative w-64 sm:w-72">
              {/* White die-cut title layered over envelope */}
              <div className="die-cut-sticker-thick absolute -top-14 -left-4 z-30 pointer-events-none select-none">
                <span className="block font-calligraphy text-4xl sm:text-5xl text-cocoa-ink leading-tight whitespace-nowrap">
                  What i
                </span>
                <h2 className="font-calligraphy text-5xl sm:text-6xl text-cocoa-ink -mt-3 whitespace-nowrap">
                  Create
                </h2>
              </div>

              {/* Peeking tulip on right of envelope */}
              <div className="absolute -top-12 -right-6 z-10 w-24 pointer-events-none">
                <SingleTulipSticker variant="left" />
              </div>

              {/* Realistic Paper Envelope Graphic */}
              <div className="bg-cream-paper rounded-xl p-6 pt-16 shadow-paper-deep border border-stone-200 relative z-20">
                {/* Envelope flap tip */}
                <div className="w-0 h-0 border-l-[110px] border-l-transparent border-r-[110px] border-r-transparent border-t-[60px] border-t-[#EADCCF] absolute -top-[1px] left-1/2 -translate-x-1/2" />

                {/* Retro Pink Camera Stamp */}
                <div className="bg-pink-100/90 border border-pink-200 p-3 rounded-lg text-center mt-2 shadow-xs">
                  <Camera className="w-7 h-7 text-pink-400 mx-auto" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-cocoa-ink tracking-wider block mt-1.5">
                    PORTFOLIO SNAPS
                  </span>
                </div>

                {/* Pinned Washi Tape */}
                <div className="washi-tape-stripes w-28 h-5 mx-auto -mb-9 mt-4 transform -rotate-3 z-30" />
              </div>
            </div>
          </div>

          {/* Right: 3 Structured Rows */}
          <div className="lg:col-span-7 space-y-5">
            {EXPERTISE_ROWS.map((row) => (
              <div key={row.id} className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="w-full sm:w-40 bg-fabric-blue-dark/60 border border-white px-3 py-3 rounded-xl flex items-center justify-center text-center shadow-xs shrink-0">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cocoa-ink whitespace-nowrap">
                    {row.label}
                  </span>
                </div>
                <div className="flex-1 bg-cream-paper p-4 rounded-xl border border-stone-200 shadow-xs">
                  <p className="text-xs sm:text-sm text-cocoa-ink leading-relaxed">
                    {row.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scalloped Lace Divider */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider pointer-events-none" />
    </section>
  );
}
