import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppLink } from '../config/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsAppLink = buildWhatsAppLink({
    intent: 'geral',
    customDetails: 'Origem: Botão Flutuante WhatsApp',
  });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-slate-900/95 border border-emerald-500/30 text-white shadow-2xl backdrop-blur-md pointer-events-auto max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="space-y-0.5 text-xs">
            <div className="font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Consultor MoveScreen Online</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-tight">
              Tire dúvidas sobre valores e disponibilidade de carros na sua região.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-white p-1 text-xs shrink-0"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all pointer-events-auto relative group focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        {/* Ping status ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#060B18]" />
        </span>
      </a>
    </div>
  );
};
