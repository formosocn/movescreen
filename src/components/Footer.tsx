import React from 'react';
import { Monitor, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppLink } from '../config/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const directWhatsAppUrl = buildWhatsAppLink({ intent: 'geral' });

  return (
    <footer className="bg-[#040711] text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-white tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D2FF] to-blue-600 flex items-center justify-center text-slate-950">
                <Monitor className="w-4 h-4 text-slate-950" strokeWidth={2.5} />
              </div>
              <span>
                Move<span className="text-[#00D2FF]">Screen</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Rede de mídia digital DOOH em tablets de 10 polegadas instalados em veículos de transporte por aplicativo. Conectamos marcas locais e passageiros durante suas viagens diárias.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Atendimento comercial ativo via WhatsApp</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#como-funciona" className="hover:text-[#00D2FF] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#00D2FF] transition-colors">
                  Simulador Interativo 10"
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-[#00D2FF] transition-colors">
                  Vantagens do DOOH
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#00D2FF] transition-colors">
                  Calculadora de Alcance
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-[#00D2FF] transition-colors">
                  Planos & Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00D2FF] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Commercial Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              Contato Comercial
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {WHATSAPP_CONFIG.displayPhone}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-[#00D2FF]" />
                <span>{WHATSAPP_CONFIG.contactEmail}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#00D2FF]" />
                <span>{WHATSAPP_CONFIG.businessHours}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#00D2FF]" />
                <span>Atuação em capitais e polos metropolitanos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {currentYear} MoveScreen Mídia Digital DOOH. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacidade/" className="hover:text-[#00D2FF] transition-colors">Privacidade & LGPD</a>
            <span>Termos de Veiculação</span>
            <span>Mídia Kit Corporativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
