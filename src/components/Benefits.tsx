import React from 'react';
import { Tablet, QrCode, LineChart, CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/30 px-3.5 py-1 text-xs font-semibold text-blue-400">
            <span>Diferenciais MoveScreen</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Mais que exibir anúncios: facilite o contato com sua empresa.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Uma presença visual moderna em formato horizontal que combina impacto de imagem com ação rápida pelo smartphone do passageiro.
          </p>
        </div>

        {/* 3 Strict Benefit Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-slate-800 bg-[#0b1222]/80 p-7 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#0d162a] hover:shadow-xl hover:shadow-blue-900/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <Tablet className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white">
              Uma nova oportunidade de divulgação
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Leve sua marca para além dos canais digitais tradicionais, com anúncios exibidos em tablets instalados no interior de veículos.
            </p>
            <div className="mt-6 border-t border-slate-800/80 pt-4">
              <span className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Posicionamento no encosto de cabeça</span>
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-slate-800 bg-[#0b1222]/80 p-7 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#0d162a] hover:shadow-xl hover:shadow-blue-900/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-400 border border-sky-500/20 transition-colors group-hover:bg-sky-500 group-hover:text-white">
              <QrCode className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white">
              QR Code que aproxima clientes
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Facilite o próximo passo. O QR Code pode direcionar o passageiro para seu WhatsApp, cardápio, página de ofertas, site ou agendamento.
            </p>
            <div className="mt-6 border-t border-slate-800/80 pt-4">
              <span className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                <span>Acesso instantâneo sem digitar links</span>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-slate-800 bg-[#0b1222]/80 p-7 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#0d162a] hover:shadow-xl hover:shadow-blue-900/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white">
              Monitoramento e transparência
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              A MoveScreen oferece recursos de monitoramento e auditoria da exibição dos anúncios, conforme as funcionalidades disponíveis na plataforma.
            </p>
            <div className="mt-6 border-t border-slate-800/80 pt-4">
              <span className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                <span>Rastreamento de campanhas ativas</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
