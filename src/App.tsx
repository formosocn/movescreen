/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { TabletSimulator } from './components/TabletSimulator';
import { ComparisonSection } from './components/ComparisonSection';
import { ImpactCalculator } from './components/ImpactCalculator';
import { PricingPlans } from './components/PricingPlans';
import { ProofTestimonials } from './components/ProofTestimonials';
import { LeadDiagnosisSection } from './components/LeadDiagnosisSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col font-sans selection:bg-[#00D2FF] selection:text-[#060B18]">
      {/* Top Bar following 1-row, 3-zone contract */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Value Proposition and Automotive DOOH Context */}
        <Hero />

        {/* 3-Step Process & Photographic Proof */}
        <HowItWorks />

        {/* Flagship Interactive 10" Tablet Simulator */}
        <TabletSimulator />

        {/* Media Comparison: DOOH vs Social Ads vs Traditional */}
        <ComparisonSection />

        {/* Interactive Reach & ROI Calculator */}
        <ImpactCalculator />

        {/* Transparent Pricing Plans */}
        <PricingPlans />

        {/* Verifiable Testimonials & Case Studies */}
        <ProofTestimonials />

        {/* Express Campaign Diagnosis Form */}
        <LeadDiagnosisSection />

        {/* Objection Handling FAQ */}
        <FAQ />
      </main>

      {/* Quiet Corporate Footer */}
      <Footer />

      {/* Non-intrusive Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
