/**
 * MoveScreen - Landing Page de Alta Conversão
 * Mídia Digital DOOH em Tablets Horizontais em Carros de Aplicativo
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { TabletInteractivePreview } from './components/TabletInteractivePreview';
import { PricingCalculator } from './components/PricingCalculator';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { TrackingModal } from './components/TrackingModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header with official logo, navigation, tracking trigger and primary CTA */}
      <Header onOpenTracking={() => setIsTrackingModalOpen(true)} />

      {/* Main Landing Page Content */}
      <main className="flex-grow">
        {/* First Fold: Hero with official promotional video, copy & CTAs */}
        <Hero />

        {/* SMB Target Audience Segment Badges */}
        <TargetAudience />

        {/* Benefits Section: 3 cards with grounded, verifiable messaging */}
        <Benefits />

        {/* How It Works: 3 clean stages */}
        <HowItWorks />

        {/* Interactive 10" Tablet Preview inside car environment */}
        <TabletInteractivePreview />

        {/* Pricing Calculator: Linear rule R$ 200/10s up to 120s with vehicle multiplier */}
        <PricingCalculator />

        {/* FAQ Accordion with the 7 specific verified questions */}
        <FaqSection />

        {/* Final Conversion Callout */}
        <FinalCta />
      </main>

      {/* Footer with official logo, differentiated commercial vs support numbers */}
      <Footer onOpenTracking={() => setIsTrackingModalOpen(true)} />

      {/* Advertiser Tracking Modal */}
      <TrackingModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
      />

      {/* Floating Quick WhatsApp Action */}
      <WhatsAppFloatingButton />
    </div>
  );
}
