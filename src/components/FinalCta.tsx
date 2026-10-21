import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, CheckCircle } from 'lucide-react';
import { buildCommercialWhatsAppUrl, CONTACTS } from '../config/constants';
import { trackEvent } from '../utils/analytics';

export const FinalCta: React.FC = () => {
  const handleScrollToPricing = () => {
    trackEvent('click_quero_anunciar_final');
    const el = document.getElementById('precos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-transparent via-blue-950/20 to-blue-950/40 border-t border-slate-800/80">
      {/* Background glow circle */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-80 w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Sua próxima campanha pode começar aqui.
        </h2>

        {/* Text */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Conheça os planos da MoveScreen e descubra como apresentar sua empresa a novos públicos durante as viagens.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToPricing}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/40 transition-all hover:bg-blue-500 hover:shadow-blue-500/50 active:scale-[0.98]"
          >
            <span>QUERO ANUNCIAR NA MOVESCREEN</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={buildCommercialWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp_comercial', { source: 'final_cta_button' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-6 py-4 text-sm font-semibold text-emerald-300 hover:bg-emerald-950/50 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Falar com o Comercial</span>
          </a>
        </div>

        {/* Reassurance notes */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-blue-400" />
            <span>Planos a partir de R$ 200/mês por veículo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-blue-400" />
            <span>Atendimento comercial direto no WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-blue-400" />
            <span>Contratação rápida e transparente</span>
          </div>
        </div>
      </div>
    </section>
  );
};
