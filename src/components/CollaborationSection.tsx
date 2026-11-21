import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_PACKAGES, ServicePackage } from '../data/portfolioData';
import { BrownRibbonBow, FountainPenSvg } from './ScrapbookMotifs';

interface CollaborationSectionProps {
  onSelectPackage: (pkg: ServicePackage) => void;
}

export function CollaborationSection({ onSelectPackage }: CollaborationSectionProps) {
  return (
    <section id="collaboration" className="relative bg-fabric-blue-pattern py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Script Title */}
        <div className="text-center mb-12">
          <h2 className="font-calligraphy text-5xl sm:text-6xl text-cocoa-ink die-cut-sticker inline-block">
            Collaboration Offerings
          </h2>
          <p className="text-xs font-semibold text-cocoa-muted tracking-widest uppercase mt-2">
            How we can create meaningful impact together
          </p>
        </div>

        {/* Realistic File Folder Visual */}
        <div className="relative">
          {/* Folder Tab Behind Paper */}
          <div className="w-52 h-10 bg-fabric-blue-dark rounded-t-2xl border-t-2 border-l-2 border-r-2 border-white/80 ml-6 -mb-1 flex items-center px-4 shadow-xs">
            <span className="font-mono text-xs font-bold text-white tracking-wider">
              COLLAB_SERVICES.DOC
            </span>
          </div>

          {/* Main Lined Paper Sheet Inside Folder */}
          <div className="lined-paper rounded-2xl p-6 sm:p-12 shadow-paper-deep border-2 border-stone-300 relative">
            {/* Cocoa Brown Satin Ribbon Bow pinned at top center of folder */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-14 h-14 pointer-events-none">
              <BrownRibbonBow />
            </div>

            {/* Realistic Fountain Pen Illustration on top right */}
            <div className="absolute -top-6 right-6 sm:right-12 z-20 w-36 sm:w-44 pointer-events-none hidden sm:block transform rotate-12">
              <FountainPenSvg />
            </div>

            {/* Document Header */}
            <div className="border-b-2 border-cocoa-ink/15 pb-4 mb-6 pt-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold italic text-cocoa-ink">
                Service Packages &amp; Engagements
              </h3>
              <p className="text-xs text-cocoa-muted font-sans mt-1">
                Available for academic, institutional, and student organization partnerships in
                2026. Select a package to open an inquiry.
              </p>
            </div>

            {/* 3 Service Rows */}
            <div className="space-y-4">
              {SERVICE_PACKAGES.map((pkg, idx) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 -mx-3 rounded-xl hover:bg-white/75 transition-colors cursor-pointer group ${
                    idx < SERVICE_PACKAGES.length - 1 ? 'border-b border-stone-200/90' : ''
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`${pkg.badgeColorClass} text-cocoa-ink font-mono font-bold text-[11px] px-2.5 py-0.5 rounded-md border whitespace-nowrap`}
                      >
                        {pkg.code}
                      </span>
                      <h4 className="font-serif font-bold text-base text-cocoa-ink group-hover:text-ribbon-brown transition-colors">
                        {pkg.title}
                      </h4>
                    </div>
                    <p className="text-xs text-cocoa-muted font-sans max-w-xl leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-cocoa-ink bg-white px-3.5 py-2 rounded-lg border border-stone-200 shadow-xs group-hover:border-cocoa-ink/40 transition-colors whitespace-nowrap shrink-0">
                    <span>{pkg.engagementType}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cocoa-muted group-hover:text-cocoa-ink" aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Signature / Seal */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-stone-300 flex flex-wrap items-center justify-between gap-4 text-xs text-cocoa-muted">
              <span className="font-script text-2xl text-cocoa-ink whitespace-nowrap">
                Veiga Mumtaza E. R.
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider">
                INSTITUT TEKNOLOGI PLN · JAKARTA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scalloped Lace Divider */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider pointer-events-none" />
    </section>
  );
}
