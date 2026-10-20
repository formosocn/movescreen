import React, { useState } from 'react';
import { MessageCircle, Menu, X, Monitor, Bot, Users } from 'lucide-react';
import { buildWhatsappLink } from '../config/whatsapp';

interface NavbarProps {
  onOpenConsultModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Links dinâmicos para IA e Atendimento Humano
  const aiWhatsAppUrl = buildWhatsappLink({ intent: 'diagnosis', useHumanTeam: false });
  const humanWhatsAppUrl = buildWhatsappLink({ intent: 'support', useHumanTeam: true });

  return (
    <header className="sticky top-0 z-50 w-full bg-[#060B18]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D2FF] to-blue-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Monitor className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight">
            Move<span className="text-[#00D2FF]">Screen</span>
          </span>
        </a>

        {/* Zone 2: Single-line Clean Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="#como-funciona"
            className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0"
          >
            Como Funciona
          </a>
          <a
            href="#simulador"
            className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Simulador 10"</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/10 text-[#00D2FF] border border-cyan-500/20">
              Interativo
            </span>
          </a>
          <a
            href="#vantagens"
            className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0"
          >
            Vantagens
          </a>
          <a
            href="#calculadora"
            className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0"
          >
            Calculadora
          </a>
          <a
            href="#planos"
            className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0"
          >
            Planos
          </a>
          <a
            href="#faq"
            className="hover:text-[#00D2FF] transition-colors whitespace-nowrap shrink-0"
          >
            Perguntas
          </a>
        </nav>

        {/* Zone 3: Dual Action CTA Buttons (Desktop/Tablet) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Botão para Atendimento Humano (Equipe) */}
          <a
            href={humanWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 border border-slate-700 hover:border-slate-500 hover:text-white rounded-xl transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <Users className="w-4 h-4 text-slate-400" />
            <span>Falar com Equipe</span>
          </a>

          {/* Botão para Atendimento IA */}
          <a
            href={aiWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <Bot className="w-4 h-4 text-slate-950" />
            <span>Atendimento IA</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={aiWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex sm:hidden items-center justify-center p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
            aria-label="Atendimento com IA"
          >
            <Bot className="w-5 h-5 text-cyan-400" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#091122] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#como-funciona"
            onClick={() => handleNavClick('#como-funciona')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#00D2FF] hover:bg-slate-800/50 rounded-lg"
          >
            Como Funciona
          </a>
          <a
            href="#simulador"
            onClick={() => handleNavClick('#simulador')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#00D2FF] hover:bg-slate-800/50 rounded-lg"
          >
            Simulador 10" Interativo
          </a>
          <a
            href="#vantagens"
            onClick={() => handleNavClick('#vantagens')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#00D2FF] hover:bg-slate-800/50 rounded-lg"
          >
            Vantagens do DOOH
          </a>
          <a
            href="#calculadora"
            onClick={() => handleNavClick('#calculadora')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#00D2FF] hover:bg-slate-800/50 rounded-lg"
          >
            Calculadora de Impactos
          </a>
          <a
            href="#planos"
            onClick={() => handleNavClick('#planos')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#00D2FF] hover:bg-slate-800/50 rounded-lg"
          >
            Planos & Preços
          </a>
          <a
            href="#faq"
            onClick={() => handleNavClick('#faq')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-[#00D2FF] hover:bg-slate-800/50 rounded-lg"
          >
            Perguntas Frequentes
          </a>

          {/* Botões de Ação no Mobile */}
          <div className="pt-3 space-y-2.5">
            <a
              href={aiWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-950 bg-cyan-400 rounded-xl shadow-lg shadow-cyan-500/20"
            >
              <Bot className="w-5 h-5 text-slate-950" />
              <span>Atendimento com IA</span>
            </a>
            <a
              href={humanWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-200 border border-slate-700 rounded-xl"
            >
              <Users className="w-5 h-5 text-slate-400" />
              <span>Falar com Equipe Humana</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};