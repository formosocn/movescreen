import React from 'react';
import { ASSETS, CONTACTS, buildCommercialWhatsAppUrl, buildSupportWhatsAppUrl } from '../config/constants';
import { trackEvent } from '../utils/analytics';
import { Search, MessageSquare, Phone, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  onOpenTracking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTracking }) => {
  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#050810] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Mission Column */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-xl border border-blue-500/40 bg-slate-900 shadow-sm shadow-blue-500/20">
                <img
                  src={ASSETS.logo}
                  alt="MoveScreen Logo Oficial"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-xl font-extrabold text-white">
                  Move<span className="text-blue-500">Screen</span>
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Rede de Mídia Digital DOOH
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              A MoveScreen conecta empresas a passageiros de transporte por aplicativo através de tablets de 10 polegadas instalados nos encostos de cabeça, com interação direta via QR Code.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>Transparência comercial e precificação linear proporcional.</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('inicio')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('beneficios')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Benefícios do Anúncio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('como-funciona')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('precos')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Simulador de Planos & Preços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('faq')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Perguntas Frequentes
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => {
                    trackEvent('click_rastrear_anuncio');
                    onOpenTracking();
                  }}
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  <Search className="h-3.5 w-3.5" />
                  <span>Área do Anunciante: Rastrear Anúncio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts Column: Differentiating Commercial vs Support */}
          <div className="space-y-3 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Canais Oficiais de Contato
            </h4>

            {/* Commercial Contact */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-3.5 space-y-1.5">
              <span className="text-[11px] font-bold uppercase text-blue-400 block">
                Comercial & Contratação
              </span>
              <p className="text-xs text-slate-300">
                Novos anunciantes, dúvidas sobre planos e orçamentos:
              </p>
              <a
                href={buildCommercialWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp_comercial', { source: 'footer' })}
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue-300"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp: {CONTACTS.commercialPhoneFormatted}</span>
              </a>
            </div>

            {/* Support Contact */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3.5 space-y-1.5">
              <span className="text-[11px] font-bold uppercase text-slate-300 block">
                Atendimento ao Anunciante
              </span>
              <p className="text-xs text-slate-400">
                Suporte para campanhas ativas, envio de artes e auditoria:
              </p>
              <a
                href={buildSupportWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp_atendimento', { source: 'footer' })}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-sky-400" />
                <span>WhatsApp: {CONTACTS.supportPhoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Disclaimer */}
        <div className="mt-10 border-t border-slate-800/80 pt-6 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MoveScreen Mídia Digital. Todos os direitos reservados.</p>
          <a
            href="/privacidade/"
            className="mt-2 inline-block sm:mt-0 hover:text-blue-400 transition-colors underline underline-offset-2"
          >
            Privacidade &amp; LGPD
          </a>
          <p className="mt-2 sm:mt-0 text-[11px]">
            Valores sujeitos às condições de veiculação e disponibilidade de frota por região.
          </p>
        </div>
      </div>
    </footer>
  );
};
