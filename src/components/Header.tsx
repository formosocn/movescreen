import React, { useState } from 'react';
import { ASSETS, buildCommercialWhatsAppUrl } from '../config/constants';
import { trackEvent } from '../utils/analytics';
import { Search, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenTracking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTracking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQueroAnunciarClick = () => {
    trackEvent('click_quero_anunciar_header');
    handleNavClick('precos');
  };

  const handleTrackingClick = () => {
    trackEvent('click_rastrear_anuncio');
    setMobileMenuOpen(false);
    onOpenTracking();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-900/30 bg-[#070b14]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Official Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          aria-label="MoveScreen Home"
        >
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-xl border border-blue-500/40 shadow-sm shadow-blue-500/20 bg-slate-900/80 transition-transform group-hover:scale-105">
            <img
              src={ASSETS.logo}
              alt="MoveScreen Logomarca Oficial"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              Move<span className="text-blue-500">Screen</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
              Mídia Digital DOOH
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          <button
            onClick={() => handleNavClick('inicio')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick('beneficios')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Benefícios
          </button>
          <button
            onClick={() => handleNavClick('como-funciona')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Como Funciona
          </button>
          <button
            onClick={() => handleNavClick('precos')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Planos & Preços
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Perguntas Frequentes
          </button>
        </nav>

        {/* Actions Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Secondary Link: Rastrear anúncio */}
          <button
            onClick={handleTrackingClick}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/40 px-3 py-2 text-xs font-medium text-slate-300 transition-all hover:border-blue-500/50 hover:bg-slate-800 hover:text-white"
            title="Acessar painel de rastreamento de anúncios veiculados"
          >
            <Search className="h-3.5 w-3.5 text-blue-400" />
            <span>Rastrear anúncio</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={handleQueroAnunciarClick}
            className="group flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-95"
          >
            <span>QUERO ANUNCIAR</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleTrackingClick}
            className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 text-xs text-slate-300"
            aria-label="Rastrear anúncio existente"
          >
            <Search className="h-3.5 w-3.5 text-blue-400" />
            <span>Rastrear</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-blue-900/40 bg-[#090e1a] px-4 pt-3 pb-6 md:hidden">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-blue-400"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('beneficios')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-blue-400"
            >
              Benefícios
            </button>
            <button
              onClick={() => handleNavClick('como-funciona')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-blue-400"
            >
              Como Funciona
            </button>
            <button
              onClick={() => handleNavClick('precos')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-blue-400"
            >
              Planos & Preços
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-blue-400"
            >
              Perguntas Frequentes
            </button>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={handleTrackingClick}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                <Search className="h-4 w-4 text-blue-400" />
                <span>Rastrear anúncio contratado</span>
              </button>

              <button
                onClick={handleQueroAnunciarClick}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/30 hover:bg-blue-500"
              >
                <span>QUERO ANUNCIAR</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={buildCommercialWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp_comercial')}
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/20 py-2.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-950/40"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Falar com Consultor no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
