import React, { useState } from 'react';
import { Camera, BookOpen, Award } from 'lucide-react';

export function LeftTulipBouquet({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-full h-auto die-cut-sticker ${className}`} viewBox="0 0 160 220" aria-hidden="true">
      <g fill="none" stroke="#5A4641" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
        <path d="M70,200 Q65,130 50,80" stroke="#7A9B76" strokeWidth="4" />
        <path d="M80,200 Q80,120 85,75" stroke="#7A9B76" strokeWidth="4" />
        <path d="M90,200 Q105,140 120,90" stroke="#7A9B76" strokeWidth="4" />
        <path d="M70,160 Q45,135 35,110 Q55,125 68,145" fill="#8FA88C" />
        <path d="M88,155 Q115,130 130,105 Q110,125 86,140" fill="#8FA88C" />
        <path d="M35,75 C25,50 35,30 50,30 C65,30 75,50 65,75 C60,85 40,85 35,75 Z" fill="#F4BAC3" />
        <path d="M42,75 C45,55 55,55 58,75" fill="#ECA2AF" />
        <path d="M70,70 C60,45 70,25 85,25 C100,25 110,45 100,70 C95,80 75,80 70,70 Z" fill="#F9CBD3" />
        <path d="M78,70 C80,50 90,50 92,70" fill="#ECA2AF" />
        <path d="M105,85 C95,65 105,45 120,45 C135,45 145,65 135,85 C130,95 110,95 105,85 Z" fill="#F4BAC3" />
      </g>
    </svg>
  );
}

export function RightTulipBouquet({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-full h-auto die-cut-sticker ${className}`} viewBox="0 0 160 220" aria-hidden="true">
      <g fill="none" stroke="#5A4641" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
        <path d="M85,200 Q75,130 65,85" stroke="#7A9B76" strokeWidth="4" />
        <path d="M95,200 Q105,125 115,75" stroke="#7A9B76" strokeWidth="4" />
        <path d="M75,150 Q50,130 40,105 Q60,120 75,135" fill="#8FA88C" />
        <path d="M50,80 C40,55 50,35 65,35 C80,35 90,55 80,80 C75,90 55,90 50,80 Z" fill="#F4BAC3" />
        <path d="M100,75 C90,50 100,30 115,30 C130,30 140,50 130,75 C125,85 105,85 100,75 Z" fill="#F9CBD3" />
      </g>
    </svg>
  );
}

export function SingleTulipSticker({ variant = 'left', className = '' }: { variant?: 'left' | 'right'; className?: string }) {
  return (
    <svg className={`w-full h-auto die-cut-sticker ${className}`} viewBox="0 0 100 130" aria-hidden="true">
      {variant === 'left' ? (
        <>
          <path d="M50,120 Q50,70 60,35" fill="none" stroke="#7A9B76" strokeWidth="3" />
          <path d="M45,45 C35,25 45,10 60,10 C75,10 85,25 75,45 C70,55 50,55 45,45 Z" fill="#F4BAC3" />
        </>
      ) : (
        <>
          <path d="M50,120 Q50,70 40,35" fill="none" stroke="#7A9B76" strokeWidth="3" />
          <path d="M55,45 C65,25 55,10 40,10 C25,10 15,25 25,45 Z" fill="#F9CBD3" />
        </>
      )}
    </svg>
  );
}

export function BrownRibbonBow({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-full h-full drop-shadow-md ${className}`} viewBox="0 0 80 80" aria-hidden="true">
      <path d="M40,35 C25,15 5,30 25,42 C35,48 40,38 40,35 Z" fill="#8A6F63" />
      <path d="M40,35 C55,15 75,30 55,42 C45,48 40,38 40,35 Z" fill="#8A6F63" />
      <circle cx="40" cy="38" fill="#6A5349" r="6" />
      <path d="M38,40 Q25,60 18,72 Q28,68 35,55" fill="#8A6F63" />
      <path d="M42,40 Q55,60 62,72 Q52,68 45,55" fill="#8A6F63" />
    </svg>
  );
}

export function LargeBlueSatinBow({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-full h-auto drop-shadow-md ${className}`} viewBox="0 0 100 160" aria-hidden="true">
      <g fill="#9CB4C4">
        <path d="M50,45 C30,15 10,32 30,55 C42,65 48,50 50,45 Z" fill="#9CB4C4" />
        <path d="M50,45 C70,15 90,32 70,55 C58,65 52,50 50,45 Z" fill="#9CB4C4" />
        <ellipse cx="50" cy="48" fill="#849DAE" rx="8" ry="7" />
        <path d="M47,52 Q35,90 28,140 Q40,135 48,105 Z" fill="#9CB4C4" />
        <path d="M53,52 Q65,90 72,140 Q60,135 52,105 Z" fill="#8EA8B8" />
      </g>
    </svg>
  );
}

export function SmallBlueBow({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-full h-full drop-shadow ${className}`} viewBox="0 0 50 50" aria-hidden="true">
      <path d="M25,22 C14,8 4,18 16,28 C22,30 25,25 25,22 Z" fill="#9CB4C4" />
      <path d="M25,22 C36,8 46,18 34,28 C28,30 25,25 25,22 Z" fill="#9CB4C4" />
      <circle cx="25" cy="23" fill="#7E9AA8" r="4" />
      <path d="M23,26 Q16,42 12,48" stroke="#9CB4C4" strokeLinecap="round" strokeWidth="3" />
      <path d="M27,26 Q34,42 38,48" stroke="#8EA8B8" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

export function FountainPenSvg({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-full h-auto drop-shadow-md ${className}`} viewBox="0 0 200 40" aria-hidden="true">
      <rect fill="#2E2E2E" height="12" rx="3" width="130" x="20" y="14" />
      <rect fill="#C9A66B" height="14" width="12" x="70" y="13" />
      <path d="M150,14 L180,20 L150,26 Z" fill="#C9A66B" />
      <line stroke="#1A1A1A" strokeWidth="1.5" x1="170" x2="188" y1="20" y2="20" />
    </svg>
  );
}

interface ResilientPhotoProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackKind?: 'portrait' | 'document' | 'event';
  className?: string;
}

export function ResilientPhoto({
  src,
  alt,
  fallbackTitle,
  fallbackKind = 'portrait',
  className = '',
}: ResilientPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const FallbackIcon =
      fallbackKind === 'document' ? BookOpen : fallbackKind === 'event' ? Award : Camera;

    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#F5E6E4] via-[#EFE4D8] to-[#D1DDE5] ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-11 h-11 rounded-full bg-white/85 border border-stone-200 flex items-center justify-center shadow-xs mb-2.5 text-cocoa-ink">
          <FallbackIcon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <span className="font-serif text-xs font-semibold text-cocoa-ink leading-snug max-w-[160px]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
