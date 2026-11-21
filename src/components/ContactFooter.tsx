import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { CONTACT_CHANNELS, CONTACT_POLAROID } from '../data/portfolioData';
import {
  BrownRibbonBow,
  ResilientPhoto,
  SingleTulipSticker,
} from './ScrapbookMotifs';

interface ContactFooterProps {
  onInspectPhoto: (photo: { imageUrl: string; alt: string; title: string; subtitle: string }) => void;
}

export function ContactFooter({ onInspectPhoto }: ContactFooterProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <footer id="contact" className="relative bg-fabric-blue-pattern pt-20 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Contact Cards & Closing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 shrink-0">
                <BrownRibbonBow />
              </div>
              <h2 className="font-calligraphy text-4xl sm:text-5xl text-cocoa-ink die-cut-sticker inline-block">
                Let's Work Together
              </h2>
            </div>

            {CONTACT_CHANNELS.map((channel) => (
              <div
                key={channel.id}
                className="flex items-center gap-2 sm:gap-3 bg-white/75 backdrop-blur-xs p-3 rounded-xl border border-white shadow-xs"
              >
                <span
                  className={`w-24 sm:w-28 font-mono text-xs font-bold uppercase text-cocoa-ink ${channel.bgClass} px-2 py-1.5 rounded text-center shrink-0`}
                >
                  {channel.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-cocoa-ink flex-1 truncate">
                  {channel.value}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  {channel.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(channel.id, channel.value)}
                      aria-label={`Copy ${channel.label} contact`}
                      className="w-8 h-8 rounded-full bg-white border border-cocoa-ink/10 flex items-center justify-center text-cocoa-ink hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      {copiedId === channel.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                    </button>
                  )}

                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 bg-white border border-cocoa-ink/10 px-3 py-1.5 rounded-full text-xs font-bold text-cocoa-ink hover:bg-stone-50 transition-colors shadow-xs whitespace-nowrap"
                    >
                      <span>{channel.actionLabel}</span>
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-xs text-cocoa-muted font-mono px-2 whitespace-nowrap">
                      {channel.actionLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Polaroid with Tulips and Tape */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72">
              <div className="absolute -bottom-8 -right-6 z-20 w-28 pointer-events-none">
                <SingleTulipSticker variant="left" />
              </div>

              <button
                type="button"
                onClick={() =>
                  onInspectPhoto({
                    imageUrl: CONTACT_POLAROID.imageUrl,
                    alt: CONTACT_POLAROID.alt,
                    title: CONTACT_POLAROID.caption,
                    subtitle: CONTACT_POLAROID.subtitle,
                  })
                }
                aria-label="Inspect portrait photo of Veiga Mumtaza"
                className="w-full text-left bg-white p-3.5 pb-8 rounded shadow-paper-deep border border-stone-200 transform rotate-3 hover:rotate-0 transition-transform duration-200 cursor-pointer relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocoa-ink"
              >
                <div className="washi-tape-polka w-20 h-5 absolute -top-2.5 right-6 z-10 transform rotate-6" />
                <div className="aspect-[4/5] bg-stone-100 rounded-xs overflow-hidden">
                  <ResilientPhoto
                    src={CONTACT_POLAROID.imageUrl}
                    alt={CONTACT_POLAROID.alt}
                    fallbackTitle="Veiga Mumtaza"
                    fallbackKind="portrait"
                    className="filter contrast-[1.03]"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="font-script text-2xl text-cocoa-ink">
                    {CONTACT_POLAROID.caption} ✿
                  </p>
                  <p className="text-[10px] font-mono text-cocoa-muted uppercase tracking-widest">
                    {CONTACT_POLAROID.subtitle}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Centered Closing "Thank You" Big Die-Cut Sticker */}
        <div className="border-t-2 border-dashed border-white/60 pt-14 pb-8 text-center relative">
          <div className="relative inline-block my-4">
            {/* Flanking Tulips Sticker Left */}
            <div className="absolute -left-14 sm:-left-24 -top-6 w-20 sm:w-28 pointer-events-none hidden sm:block">
              <SingleTulipSticker variant="left" />
            </div>

            {/* Main Die Cut Script "Thank You" */}
            <div className="die-cut-sticker-thick">
              <span className="block font-calligraphy text-6xl sm:text-8xl text-cocoa-ink leading-none whitespace-nowrap">
                Thank
              </span>
              <span className="block font-calligraphy text-6xl sm:text-8xl text-cocoa-ink -mt-2 sm:-mt-5 leading-none whitespace-nowrap">
                You
              </span>
            </div>

            {/* Flanking Tulips Sticker Right */}
            <div className="absolute -right-14 sm:-right-24 -top-6 w-20 sm:w-28 pointer-events-none hidden sm:block">
              <SingleTulipSticker variant="right" />
            </div>
          </div>

          <p className="font-serif italic text-sm text-cocoa-muted max-w-md mx-auto mt-4">
            "Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya
            jalan menuju surga."
          </p>

          {/* Copyright & Tagline */}
          <div className="mt-8 text-xs font-mono text-cocoa-muted tracking-wider">
            <p>© 2026 VEIGA MUMTAZA EL RAHMA · CRAFTED WITH PAPER CRAFT AESTHETICS</p>
            <p className="text-[10px] mt-1 text-cocoa-muted/80">
              INFORMATICS ENGINEERING · INSTITUT TEKNOLOGI PLN
            </p>
          </div>
        </div>
      </div>

      {/* Scalloped Lace at Very Bottom */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider pointer-events-none" />
    </footer>
  );
}
