import React from 'react';
import { SlidersHorizontal, ImagePlus, PlaySquare, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Escolha seu plano',
    desc: 'Defina o tempo de exibição mais adequado para sua campanha.',
    icon: SlidersHorizontal,
    highlight: 'De 10 a 120 segundos por veículo',
  },
  {
    step: '02',
    title: 'Prepare seu anúncio',
    desc: 'Envie sua arte ou vídeo e defina a chamada comercial e o destino do QR Code, conforme as condições do serviço.',
    icon: ImagePlus,
    highlight: 'Formato horizontal + QR Code interativo',
  },
  {
    step: '03',
    title: 'Apareça na programação',
    desc: 'Seu anúncio passa a integrar a programação dos tablets, conforme o plano contratado e as condições de veiculação.',
    icon: PlaySquare,
    highlight: 'Exibição na frota de veículos parceiros',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="relative border-t border-slate-800/80 bg-slate-950/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/30 px-3.5 py-1 text-xs font-semibold text-blue-400">
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Como funciona anunciar na MoveScreen
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Do planejamento à veiculação: processo direto, transparente e focado em apresentar sua marca com qualidade.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 relative">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col rounded-2xl border border-slate-800 bg-[#0c1322] p-8 transition-all hover:border-blue-500/30 hover:bg-[#0e172a]"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-2xl font-black text-slate-700">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 flex-grow">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800/60">
                  <span className="text-xs font-semibold text-blue-400">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
