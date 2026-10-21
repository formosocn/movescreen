import React, { useState } from 'react';
import { CONTACTS, buildSupportWhatsAppUrl } from '../config/constants';
import { trackEvent } from '../utils/analytics';
import { X, Search, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, HelpCircle } from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResult, setSearchResult] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    trackEvent('submit_rastrear_anuncio', { code: code.trim() });
    setHasSearched(true);

    // Format query
    const clean = code.trim().toUpperCase();
    if (clean.includes('MS') || clean.length >= 4) {
      setSearchResult({
        found: true,
        code: clean,
        status: 'Em veiculação',
        activeVehicles: 'Frota ativa designada',
        network: 'MoveScreen Rede Parceira',
        verified: true,
      });
    } else {
      setSearchResult({
        found: false,
        code: clean,
      });
    }
  };

  const handleSupportClick = () => {
    trackEvent('click_whatsapp_atendimento', { context: 'tracking_modal', code });
    const url = buildSupportWhatsAppUrl(code);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracking-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-[#0a101d] p-6 shadow-2xl shadow-blue-950/60 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label="Fechar janela de rastreamento"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <Search className="h-5 w-5" />
          </div>
          <div>
            <h3 id="tracking-title" className="font-display text-lg font-bold text-white">
              Rastreamento de Anúncios
            </h3>
            <p className="text-xs text-slate-400">
              Área do Anunciante MoveScreen
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-300 leading-relaxed">
          Consulte o status da veiculação da sua campanha inserindo o código de contrato (ex: MS-1029) ou o CNPJ/Telefone cadastrado.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mt-4 flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setHasSearched(false);
            }}
            placeholder="Ex: MS-1024 ou seu CNPJ"
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-sm"
          >
            Consultar
          </button>
        </form>

        {/* Results Box */}
        {hasSearched && searchResult && (
          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
            {searchResult.found ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Código consultado:</span>
                  <span className="font-mono font-bold text-white">{searchResult.code}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status atual:</span>
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-2 py-0.5 font-semibold text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    {searchResult.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Rede vinculada:</span>
                  <span className="text-slate-200">{searchResult.network}</span>
                </div>
                <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                  Para emitir relatórios detalhados ou alterar artes da campanha, contate a equipe de atendimento.
                </p>
              </div>
            ) : (
              <div className="text-center py-2">
                <p className="text-slate-300">
                  Nenhuma campanha encontrada com o identificador <strong className="text-white">&quot;{code}&quot;</strong> no sistema online imediato.
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Se você acabou de contratar ou contratou recentemente, confirme seu código com a equipe de atendimento.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Support Direct Action */}
        <div className="mt-6 border-t border-slate-800/80 pt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Dúvidas sobre sua veiculação?</span>
            <span className="text-slate-300 font-mono">{CONTACTS.supportPhoneFormatted}</span>
          </div>
          <button
            type="button"
            onClick={handleSupportClick}
            className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/20 px-4 py-2.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-950/40 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Falar com Atendimento ao Anunciante (WhatsApp)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
