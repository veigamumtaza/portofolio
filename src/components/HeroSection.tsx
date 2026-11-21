import React from 'react';
import { Camera } from 'lucide-react';
import { HERO_POLAROID } from '../data/portfolioData';
import {
  LeftTulipBouquet,
  RightTulipBouquet,
  BrownRibbonBow,
  ResilientPhoto,
} from './ScrapbookMotifs';

interface HeroSectionProps {
  onInspectPhoto: (photo: { imageUrl: string; alt: string; title: string; subtitle: string }) => void;
}

export function HeroSection({ onInspectPhoto }: HeroSectionProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="hero"
      className="relative bg-fabric-blue-pattern min-h-screen pt-32 pb-24 px-4 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Subtle Background Corner Stamp Motif */}
      <div
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-4 border-dashed border-white/40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Scrapbook Envelope Display Container */}
      <div className="relative w-full max-w-2xl mx-auto mt-10 mb-8">
        {/* Left Tulip Bouquet Sticker */}
        <div className="absolute -top-24 -left-4 sm:-left-12 z-10 w-28 sm:w-44 select-none pointer-events-none transform -rotate-12 transition-transform duration-300">
          <LeftTulipBouquet />
        </div>

        {/* Right Tulip Bouquet Sticker */}
        <div className="absolute -top-20 -right-4 sm:-right-10 z-10 w-24 sm:w-40 select-none pointer-events-none transform rotate-12">
          <RightTulipBouquet />
        </div>

        {/* Tilted Polaroid Photo of Veiga (peeking from inside envelope) */}
        <button
          type="button"
          onClick={() =>
            onInspectPhoto({
              imageUrl: HERO_POLAROID.imageUrl,
              alt: HERO_POLAROID.alt,
              title: 'Veiga Mumtaza El Rahma',
              subtitle: HERO_POLAROID.subtitle,
            })
          }
          aria-label="Inspect portrait photo of Veiga Mumtaza El Rahma"
          className="absolute -top-28 right-12 sm:right-24 z-10 transform rotate-6 hover:rotate-1 transition-transform duration-200 cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocoa-ink rounded-sm"
        >
          <div className="washi-tape w-16 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 transform -rotate-3" />
          <div className="bg-white p-2.5 pb-6 rounded-sm shadow-paper-deep border border-stone-200">
            <div className="w-24 h-28 sm:w-32 sm:h-36 bg-fabric-pink-dark overflow-hidden rounded-xs relative">
              <ResilientPhoto
                src={HERO_POLAROID.imageUrl}
                alt={HERO_POLAROID.alt}
                fallbackTitle="Veiga M."
                fallbackKind="portrait"
                className="filter contrast-[1.05] brightness-105"
              />
            </div>
            <p className="text-[10px] font-sans font-bold text-center mt-1.5 text-cocoa-muted tracking-wider">
              {HERO_POLAROID.caption}
            </p>
          </div>
        </button>

        {/* Retro Pink Camera Stamp */}
        <div className="absolute -top-12 left-28 sm:left-44 z-20 transform -rotate-6 hidden sm:block pointer-events-none">
          <div className="bg-white rounded shadow-sticker border border-pink-100 flex items-center gap-1.5 px-2.5 py-1">
            <Camera className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="text-[10px] font-bold text-cocoa-ink tracking-tight uppercase whitespace-nowrap">
              snap · memory
            </span>
          </div>
        </div>

        {/* Vintage Paper Tag Scrap */}
        <div className="absolute -top-6 right-6 sm:right-14 z-20 washi-tape-stripes px-3 py-1 text-[10px] font-mono text-cocoa-ink uppercase tracking-widest transform rotate-12 pointer-events-none">
          EDISI · 2026
        </div>

        {/* Big Die-Cut Sticker Title: "Creative Portfolio" */}
        <div className="absolute -top-24 sm:-top-28 left-2 sm:left-8 z-20 pointer-events-none select-none">
          <div className="die-cut-sticker-thick">
            <span className="block font-calligraphy text-5xl sm:text-6xl text-cocoa-ink leading-none whitespace-nowrap">
              Creative
            </span>
            <h1 className="font-calligraphy text-6xl sm:text-7xl text-cocoa-ink -mt-2 sm:-mt-3 leading-none whitespace-nowrap">
              Portfolio
            </h1>
          </div>
        </div>

        {/* LAYER 2: The Physical Envelope Body */}
        <div className="relative z-20 bg-cream-paper rounded-2xl shadow-paper-deep border-2 border-stone-200/80 pt-20 pb-10 px-6 sm:px-12 text-center mt-14">
          {/* Top Triangular Envelope Flap */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 flex justify-center pointer-events-none">
            <div className="envelope-top-triangle" />
          </div>

          {/* Satin Brown Ribbon Bow pinned at bottom-left corner */}
          <div className="absolute -bottom-4 -left-4 z-30 w-16 h-16 pointer-events-none">
            <BrownRibbonBow />
          </div>

          {/* Small decorative top label */}
          <p className="text-[11px] font-semibold tracking-widest uppercase text-cocoa-muted mb-3">
            ✿ Personal Portfolio &amp; Showcase ✿
          </p>

          {/* Main Name in Playfair Display */}
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-cocoa-ink mb-2.5 text-balance">
            Veiga Mumtaza El Rahma
          </h2>

          {/* Discipline Descriptor */}
          <p className="inline-block bg-fabric-pink/35 border border-fabric-pink-dark/40 text-cocoa-ink text-xs sm:text-sm font-semibold tracking-wider px-4 py-1.5 rounded-full mb-6">
            Informatics Student · MC &amp; Speaker · Event Leader
          </p>

          {/* Brief Narrative */}
          <p className="text-xs sm:text-sm leading-relaxed text-cocoa-muted max-w-lg mx-auto mb-8 font-sans">
            A coquette-inspired scrapbook capturing academic vigor, articulate public speaking, and
            meticulous event coordination. Freshman in Informatics Engineering at Institut Teknologi
            PLN.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#toc"
              onClick={(e) => scrollToSection(e, '#toc')}
              className="inline-flex items-center gap-2 bg-cocoa-ink text-cream-paper px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:bg-cocoa-muted transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Open Table of Contents</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="inline-flex items-center gap-2 bg-white text-cocoa-ink border border-cocoa-ink/20 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-xs hover:bg-stone-50 transition-colors whitespace-nowrap shrink-0"
            >
              <span>Read About Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scalloped Lace Transition at Bottom of Section */}
      <div className="absolute bottom-0 left-0 right-0 lace-divider pointer-events-none" />
    </header>
  );
}
