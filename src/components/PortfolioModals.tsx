import React, { useEffect, useState } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import {
  SERVICE_PACKAGES,
  ServicePackage,
  ShowcaseWorkItem,
} from '../data/portfolioData';
import { ResilientPhoto } from './ScrapbookMotifs';

export type LightboxTarget =
  | { kind: 'work'; work: ShowcaseWorkItem }
  | { kind: 'photo'; imageUrl: string; alt: string; title: string; subtitle: string };

interface LightboxModalProps {
  target: LightboxTarget | null;
  onClose: () => void;
}

export function LightboxModal({ target, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!target) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [target, onClose]);

  if (!target) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-cocoa-ink/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={target.kind === 'work' ? target.work.title : target.title}
      onClick={onClose}
    >
      <div
        className="bg-cream-paper border-2 border-white rounded-3xl shadow-paper-deep max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close detail viewer"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-cocoa-ink hover:bg-stone-50 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {target.kind === 'photo' ? (
          <div className="flex flex-col items-center text-center pt-2">
            <div className="bg-white p-3 pb-6 rounded shadow-polaroid border border-stone-200 max-w-sm w-full">
              <div className="aspect-[4/5] bg-stone-100 rounded-xs overflow-hidden">
                <ResilientPhoto
                  src={target.imageUrl}
                  alt={target.alt}
                  fallbackTitle={target.title}
                  fallbackKind="portrait"
                />
              </div>
              <p className="font-script text-2xl text-cocoa-ink mt-3">{target.title} ✿</p>
              <p className="text-xs font-mono text-cocoa-muted uppercase tracking-wider mt-0.5">
                {target.subtitle}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
            <div className="md:col-span-5 bg-white p-2.5 rounded-2xl border border-stone-200 shadow-paper">
              <div className="aspect-[9/14] bg-stone-100 rounded-xl overflow-hidden">
                <ResilientPhoto
                  src={target.work.imageUrl}
                  alt={target.work.imageAlt}
                  fallbackTitle={target.work.subtitle}
                  fallbackKind={target.work.block === 'academic' ? 'document' : 'event'}
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 pr-4">
              <div className="text-xs font-mono text-cocoa-muted uppercase tracking-wider">
                {target.work.caption} · {target.work.year}
              </div>
              <h3 className="font-serif text-2xl font-bold text-cocoa-ink leading-snug">
                {target.work.title}
              </h3>
              <div className="text-xs text-cocoa-muted space-y-1 bg-white/80 p-3.5 rounded-xl border border-stone-200">
                <div>
                  <strong className="text-cocoa-ink">Role:</strong> {target.work.role}
                </div>
                <div>
                  <strong className="text-cocoa-ink">Institution:</strong> {target.work.institution}
                </div>
              </div>
              <p className="text-sm text-cocoa-ink leading-relaxed">{target.work.summary}</p>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-muted mb-2">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-cocoa-ink">
                  {target.work.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2">
                      <span className="text-ribbon-brown font-bold" aria-hidden="true">
                        ✦
                      </span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface InquiryModalProps {
  isOpen: boolean;
  initialPackage: ServicePackage | null;
  onClose: () => void;
}

export function InquiryModal({ isOpen, initialPackage, onClose }: InquiryModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackage?.id ?? SERVICE_PACKAGES[0].id
  );
  const [senderName, setSenderName] = useState('');
  const [organization, setOrganization] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPkgId(initialPackage.id);
    }
  }, [initialPackage]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activePkg = SERVICE_PACKAGES.find((p) => p.id === selectedPkgId) ?? SERVICE_PACKAGES[0];

  const formattedBody = [
    `Halo Veiga,`,
    ``,
    `I would like to collaborate regarding: ${activePkg.title} (${activePkg.engagementType}).`,
    senderName ? `Name: ${senderName}` : null,
    organization ? `Organization / Campus: ${organization}` : null,
    eventDate ? `Target Date: ${eventDate}` : null,
    message ? `\nDetails:\n${message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const mailtoHref = `mailto:mumtazaveiga@gmail.com?subject=${encodeURIComponent(
    `Collaboration Inquiry — ${activePkg.title}`
  )}&body=${encodeURIComponent(formattedBody)}`;

  const whatsappHref = `https://wa.me/6285163632715?text=${encodeURIComponent(formattedBody)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore if clipboard unavailable
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-cocoa-ink/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Collaboration Inquiry"
      onClick={onClose}
    >
      <div
        className="lined-paper border-2 border-white rounded-3xl shadow-paper-deep max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close inquiry form"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-cocoa-ink hover:bg-stone-50 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-5 pr-10">
          <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-cocoa-muted">
            Collaboration Brief
          </p>
          <h3 className="font-serif text-2xl font-bold text-cocoa-ink mt-1">
            Let's Plan Something Meaningful
          </h3>
        </div>

        <div className="space-y-4">
          {/* Package Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-muted mb-1.5">
              Select Engagement Package
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SERVICE_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === selectedPkgId;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-cocoa-ink text-cream-paper border-cocoa-ink shadow-xs'
                        : 'bg-white text-cocoa-ink border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span className="block font-mono text-[10px] opacity-80">{pkg.code}</span>
                    <span className="block text-xs font-bold leading-snug mt-0.5">{pkg.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="inquiry-name"
                className="block text-xs font-bold uppercase tracking-wider text-cocoa-muted mb-1"
              >
                Your Name
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g., Aulia Rahman"
                className="w-full rounded-xl bg-white border border-stone-300 px-3 py-2 text-sm text-cocoa-ink focus:outline-2 focus:outline-cocoa-ink"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-org"
                className="block text-xs font-bold uppercase tracking-wider text-cocoa-muted mb-1"
              >
                Organization / Event
              </label>
              <input
                id="inquiry-org"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g., BEM ITPLN"
                className="w-full rounded-xl bg-white border border-stone-300 px-3 py-2 text-sm text-cocoa-ink focus:outline-2 focus:outline-cocoa-ink"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="inquiry-date"
              className="block text-xs font-bold uppercase tracking-wider text-cocoa-muted mb-1"
            >
              Target Date / Timeline
            </label>
            <input
              id="inquiry-date"
              type="text"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              placeholder="e.g., 14 December 2026"
              className="w-full rounded-xl bg-white border border-stone-300 px-3 py-2 text-sm text-cocoa-ink focus:outline-2 focus:outline-cocoa-ink"
            />
          </div>

          <div>
            <label
              htmlFor="inquiry-msg"
              className="block text-xs font-bold uppercase tracking-wider text-cocoa-muted mb-1"
            >
              Brief Notes
            </label>
            <textarea
              id="inquiry-msg"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share event format, expected audience, or deliverable scope..."
              className="w-full rounded-xl bg-white border border-stone-300 px-3 py-2 text-sm text-cocoa-ink focus:outline-2 focus:outline-cocoa-ink"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cocoa-ink text-cream-paper px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-cocoa-muted transition-colors whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Send via WhatsApp</span>
            </a>

            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 bg-white text-cocoa-ink border border-cocoa-ink/20 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-stone-50 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 bg-fabric-pink/60 text-cocoa-ink border border-white px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-card-pink transition-colors cursor-pointer whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copy Note</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
