/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ServicePackage, ShowcaseWorkItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TableOfContentsSection } from './components/TableOfContentsSection';
import { AboutSection } from './components/AboutSection';
import { StrengthsSection } from './components/StrengthsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { WorksSection } from './components/WorksSection';
import { CollaborationSection } from './components/CollaborationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactFooter } from './components/ContactFooter';
import { InquiryModal, LightboxModal, LightboxTarget } from './components/PortfolioModals';

export default function App() {
  const [lightboxTarget, setLightboxTarget] = useState<LightboxTarget | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  const handleInspectPhoto = (photo: {
    imageUrl: string;
    alt: string;
    title: string;
    subtitle: string;
  }) => {
    setLightboxTarget({ kind: 'photo', ...photo });
  };

  const handleSelectWork = (work: ShowcaseWorkItem) => {
    setLightboxTarget({ kind: 'work', work });
  };

  const handleOpenInquiry = (pkg?: ServicePackage) => {
    setSelectedPackage(pkg ?? null);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen font-sans text-cocoa-ink antialiased selection:bg-fabric-pink selection:text-cocoa-ink overflow-x-hidden">
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <HeroSection onInspectPhoto={handleInspectPhoto} />

      <main>
        <TableOfContentsSection />
        <AboutSection onInspectPhoto={handleInspectPhoto} />
        <StrengthsSection />
        <ExpertiseSection />
        <WorksSection onSelectWork={handleSelectWork} />
        <CollaborationSection onSelectPackage={(pkg) => handleOpenInquiry(pkg)} />
        <AchievementsSection />
      </main>

      <ContactFooter onInspectPhoto={handleInspectPhoto} />

      <LightboxModal target={lightboxTarget} onClose={() => setLightboxTarget(null)} />
      <InquiryModal
        isOpen={inquiryOpen}
        initialPackage={selectedPackage}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
}
