import React from 'react';
import { Check, X, Flame } from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';

export const ComparisonSection: React.FC = () => {
  const whatsAppUrl = buildWhatsAppLink({
    intent: 'geral',
    customDetails: 'Origem: Comparativo de Mídias',
  });

  const comparisonData = [
    {
      criteria: 'Tempo Médio de Atenção',
      moveScreen: '15 a 40 minutos ininterruptos',
      socialAds: '0.8 segundo no feed rápido',
      billboard: '2 a 4 segundos de relance',
      flyer: '3 segundos antes de descartar',
    },
    {
      criteria: 'Concorrência Visual',
      moveScreen: 'Zero concorrência (tela exclusiva)',
      socialAds: 'Concorre com memes, dancinhas e rivais',
      billboard: 'Concorre com semáforos, trânsito e outros 10 outdoors',
      flyer: 'Disputa espaço na caixa de correio/lixo',
    },
    {
      criteria: 'Público Qualificado',
      moveScreen: 'Passageiros de app com alto poder de consumo diário',
      socialAds: 'Muitos cliques acidentais e bots',
      billboard: 'Público genérico sem segmentação',
      flyer: 'Sem critério de renda ou interesse',
    },
    {
      criteria: 'Interação e Conversão',
      moveScreen: 'QR Code nítido + toque na tela direto pro WhatsApp',
      socialAds: 'Usuário não quer sair do aplicativo da rede',
      billboard: 'Impossível anotar telefone dirigindo a 60 km/h',
      flyer: 'Exige digitar número no teclado manualmente',
    },
    {
      criteria: 'Imunidade a AdBlockers',
      moveScreen: '100% imune (tela física fixa no encosto)',
      socialAds: 'Bloqueado por extensões e versões pagas',
      billboard: 'Ignorado por passageiros olhando pro celular',
      flyer: 'Vira lixo rapidamente',
    },
  ];

  return (
    <section id="vantagens" className="py-16 lg:py-24 bg-[#091122]/70 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Por que a MoveScreen Converte Mais?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Pare de queimar orçamento em mídias que as pessoas ignoram
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Compare o impacto real da tela instalada no encosto do banco de Uber e 99 com os canais tradicionais de divulgação para empresas locais.
          </p>
        </div>

        {/* Comparison Table for Desktop / Cards for Mobile */}
        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-slate-700/80">
                <th className="py-4 px-4 text-xs uppercase tracking-wider font-semibold text-slate-400 w-1/4">
                  Critério de Decisão
                </th>
                <th className="py-4 px-5 text-sm font-extrabold text-slate-950 bg-gradient-to-r from-[#00D2FF] to-cyan-300 rounded-t-xl w-1/3">
                  <div className="flex items-center gap-1.5">
                    <span>MoveScreen (DOOH)</span>
                    <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-slate-950 text-[#00D2FF]">
                      Recomendado
                    </span>
                  </div>
                </th>
                <th className="py-4 px-4 text-xs uppercase tracking-wider font-semibold text-slate-400 w-1/5">
                  Anúncios Redes Sociais
                </th>
                <th className="py-4 px-4 text-xs uppercase tracking-wider font-semibold text-slate-400 w-1/5">
                  Outdoor / Panfletos
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {comparisonData.map((row) => (
                <tr key={row.criteria} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-4 text-sm font-semibold text-white">
                    {row.criteria}
                  </td>
                  <td className="py-4 px-5 text-sm font-bold text-white bg-cyan-950/20 border-x border-cyan-500/20">
                    <div className="flex items-center gap-2 text-cyan-200">
                      <Check className="w-4 h-4 text-[#00D2FF] shrink-0" strokeWidth={3} />
                      <span>{row.moveScreen}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                      <span>{row.socialAds}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                      <span>{row.billboard}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Quer testar uma campanha na sua cidade este mês?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Disponibilidade limitada de veículos por rota para garantir exclusividade e alto impacto.
            </p>
          </div>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-bold text-slate-950 bg-[#00D2FF] hover:bg-cyan-300 rounded-xl transition-colors whitespace-nowrap shadow-lg shadow-cyan-500/20"
          >
            Verificar Carros Disponíveis
          </a>
        </div>
      </div>
    </section>
  );
};
