import React from 'react';
import { MapPin, GraduationCap, BookOpen } from 'lucide-react';
import { ABOUT_POLAROID, CORE_COMPETENCIES } from '../data/portfolioData';
import { BrownRibbonBow, ResilientPhoto } from './ScrapbookMotifs';

interface AboutSectionProps {
  onInspectPhoto: (photo: { imageUrl: string; alt: string; title: string; subtitle: string }) => void;
}

export function AboutSection({ onInspectPhoto }: AboutSectionProps) {
  return (
    <section id="about" className="relative bg-fabric-blue-pattern py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Split Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-paper-deep border-4 border-white/80">
          {/* LEFT HALF: Warm Cream Paper Aesthetic */}
          <div className="lg:col-span-5 paper-texture p-8 sm:p-10 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r-2 border-stone-200">
            {/* Washi Tape at Top */}
            <div className="washi-tape-polka w-28 h-6 absolute -top-2 left-8 transform -rotate-2" />

            <div>
              {/* Cursive Title */}
              <div className="die-cut-sticker inline-block mb-6 transform -rotate-2">
                <h2 className="font-calligraphy text-5xl text-cocoa-ink whitespace-nowrap">
                  About Me
                </h2>
              </div>

              {/* Polaroid Frame of Veiga */}
              <button
                type="button"
                onClick={() =>
                  onInspectPhoto({
                    imageUrl: ABOUT_POLAROID.imageUrl,
                    alt: ABOUT_POLAROID.alt,
                    title: ABOUT_POLAROID.caption,
                    subtitle: ABOUT_POLAROID.subtitle,
                  })
                }
                aria-label="Inspect portrait photo of Veiga Mumtaza El Rahma"
                className="block relative w-56 sm:w-64 mx-auto mb-8 transform -rotate-2 hover:rotate-0 transition-transform duration-200 cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocoa-ink rounded"
              >
                {/* Ribbon on top right of polaroid */}
                <div className="absolute -top-3 -right-3 z-20 w-10 h-10 pointer-events-none">
                  <BrownRibbonBow />
                </div>

                {/* Striped Washi Tape on bottom left */}
                <div className="washi-tape-stripes w-20 h-5 absolute -bottom-2 -left-3 z-20 transform rotate-12" />

                <div className="bg-white p-3 pb-7 rounded shadow-polaroid border border-stone-200">
                  <div className="aspect-[4/5] bg-stone-100 overflow-hidden rounded-xs relative">
                    <ResilientPhoto
                      src={ABOUT_POLAROID.imageUrl}
                      alt={ABOUT_POLAROID.alt}
                      fallbackTitle="Veiga Mumtaza El Rahma"
                      fallbackKind="portrait"
                      className="filter contrast-[1.03]"
                    />
                  </div>
                  <p className="font-script text-xl text-center mt-2 text-cocoa-ink">
                    {ABOUT_POLAROID.caption} ✿
                  </p>
                </div>
              </button>

              {/* Quick Bio Lines (clean scannable paper slips) */}
              <div className="space-y-2 max-w-xs mx-auto text-left font-sans">
                <div className="bg-white/90 border border-stone-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-cocoa-ink shadow-xs flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-ribbon-brown shrink-0" aria-hidden="true" />
                  <span>Bandung, 03 January 2008</span>
                </div>
                <div className="bg-white/90 border border-stone-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-cocoa-ink shadow-xs flex items-center gap-2.5">
                  <GraduationCap
                    className="w-3.5 h-3.5 text-ribbon-brown shrink-0"
                    aria-hidden="true"
                  />
                  <span>Institut Teknologi PLN · Jakarta Barat</span>
                </div>
                <div className="bg-white/90 border border-stone-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-cocoa-ink shadow-xs flex items-center gap-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-ribbon-brown shrink-0" aria-hidden="true" />
                  <span>Hafidzah 9 Juz Al-Qur'an (Al-Fath &amp; PPI)</span>
                </div>
              </div>
            </div>

            {/* Bottom scrap note */}
            <div className="mt-8 text-center border-t border-stone-200/70 pt-4">
              <span className="text-[11px] font-mono tracking-widest text-cocoa-muted uppercase">
                "Dedicated, Articulate &amp; Tech-Empowered"
              </span>
            </div>
          </div>

          {/* RIGHT HALF: Blush Pink Fabric Aesthetic */}
          <div className="lg:col-span-7 bg-card-pink/75 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              {/* Headline & Identification */}
              <div className="mb-6">
                <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-cocoa-muted mb-1.5">
                  Curriculum Vitae &amp; Profile
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cocoa-ink text-balance">
                  Veiga Mumtaza El Rahma
                </h3>
                <p className="text-sm font-medium text-cocoa-muted mt-1">
                  Informatics Engineering Student · Speaker &amp; Moderator · Organization Secretary
                </p>
              </div>

              {/* Narrative Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm text-cocoa-ink leading-relaxed font-sans">
                <p>
                  Halo! I am a passionate first-year student pursuing{' '}
                  <strong className="font-semibold text-cocoa-ink">
                    S1 Teknik Informatika at Institut Teknologi PLN
                  </strong>{' '}
                  (Jakarta Barat). My foundation combines analytical problem-solving in computing
                  with a deep, battle-tested background in public speaking, protocol hosting, and
                  event administration.
                </p>
                <p>
                  Having graduated from{' '}
                  <strong className="font-semibold text-cocoa-ink">
                    PPI 67 Benda Tasikmalaya
                  </strong>{' '}
                  with honors and served as leader within the{' '}
                  <strong className="font-semibold text-cocoa-ink">
                    Ummahatul Ghad (Santri Putri Student Council)
                  </strong>{' '}
                  and{' '}
                  <strong className="font-semibold text-cocoa-ink">
                    Ikatan Pelajar Puteri PERSIS
                  </strong>
                  , I excel in coordinating large-scale institutional assemblies, crafting academic
                  research papers, and articulating complex ideas onstage with grace.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-muted mb-3">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {CORE_COMPETENCIES.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/95 border border-stone-200 px-3 py-1.5 rounded-lg text-xs font-bold text-cocoa-ink shadow-xs whitespace-nowrap"
                    >
                      ★ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured Timeline: Education & Key Roles */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Education Card */}
                <div className="bg-cream-paper p-4 rounded-xl border border-stone-200/80 shadow-xs">
                  <span className="text-[10px] font-mono font-bold text-cocoa-muted uppercase tracking-wider">
                    Education
                  </span>
                  <h5 className="font-serif font-bold text-sm text-cocoa-ink mt-1">
                    Institut Teknologi PLN
                  </h5>
                  <p className="text-xs text-cocoa-muted">S1 Teknik Informatika (2025 – Present)</p>
                  <div className="mt-2.5 pt-2.5 border-t border-stone-200 text-xs">
                    <span className="font-medium text-cocoa-ink">PPI 67 Benda Tasikmalaya</span>
                    <p className="text-[11px] text-cocoa-muted">Madrasah Aliyah (Graduated 2024)</p>
                  </div>
                </div>

                {/* Organizations Card */}
                <div className="bg-cream-paper p-4 rounded-xl border border-stone-200/80 shadow-xs">
                  <span className="text-[10px] font-mono font-bold text-cocoa-muted uppercase tracking-wider">
                    Leadership
                  </span>
                  <h5 className="font-serif font-bold text-sm text-cocoa-ink mt-1">
                    Ummahatul Ghad (OSIS)
                  </h5>
                  <p className="text-xs text-cocoa-muted">Ketua Bagian &amp; Sekretaris Umum</p>
                  <div className="mt-2.5 pt-2.5 border-t border-stone-200 text-xs">
                    <span className="font-medium text-cocoa-ink">IPPI PERSIS Tasikmalaya</span>
                    <p className="text-[11px] text-cocoa-muted">
                      Koordinator Bidang Pendidikan &amp; Kaderisasi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <div className="mt-8 flex items-center justify-between text-xs text-cocoa-muted border-t border-white/60 pt-3">
              <span>Ready for dynamic challenges</span>
              <span>✦ Jakarta &amp; Bandung</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scalloped Lace Divider */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider pointer-events-none" />
    </section>
  );
}
