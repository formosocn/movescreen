import React, { useState } from 'react';
import { CONTACTS, buildCommercialWhatsAppUrl, buildSupportWhatsAppUrl } from '../config/constants';
import { trackEvent } from '../utils/analytics';
import { MessageSquare, X, ChevronRight, Sparkles } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCommercialClick = () => {
    trackEvent('click_whatsapp_comercial', { source: 'floating_widget' });
    setIsOpen(false);
    window.open(buildCommercialWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleSupportClick = () => {
    trackEvent('click_whatsapp_atendimento', { source: 'floating_widget' });
    setIsOpen(false);
    window.open(buildSupportWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-slate-700 bg-[#0a1120] p-4 shadow-2xl shadow-black/80 animate-fade-in text-left">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Fale com a MoveScreen
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Fechar opções do WhatsApp"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-slate-300">
            Selecione o canal mais adequado para o seu atendimento:
          </p>

          <div className="mt-3 space-y-2">
            {/* Commercial Option */}
            <button
              onClick={handleCommercialClick}
              className="group flex w-full items-center justify-between rounded-xl border border-blue-500/40 bg-blue-950/30 p-3 text-left transition-all hover:bg-blue-900/40 hover:border-blue-400"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Quero Anunciar</span>
                  <span className="text-[10px] text-blue-300">Equipe Comercial ({CONTACTS.commercialPhoneFormatted})</span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </button>

            {/* Support Option */}
            <button
              onClick={handleSupportClick}
              className="group flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-left transition-all hover:bg-slate-800 hover:border-slate-700"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-emerald-400 shrink-0">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-200 block">Já Sou Anunciante</span>
                  <span className="text-[10px] text-slate-400">Atendimento & Suporte ({CONTACTS.supportPhoneFormatted})</span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-xl shadow-emerald-950/60 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#070b14]"
        aria-label="Abrir canais de contato no WhatsApp"
        aria-expanded={isOpen}
      >
        <MessageSquare className="h-5 w-5" />
        <span className="text-xs font-bold pr-0.5">WhatsApp</span>
      </button>
    </div>
  );
};
