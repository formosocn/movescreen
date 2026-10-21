import React, { useRef, useState } from 'react';
import { ASSETS } from '../config/constants';
import { trackEvent } from '../utils/analytics';
import { ArrowRight, QrCode, Monitor, ShieldCheck, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleQueroAnunciar = () => {
    trackEvent('click_quero_anunciar_hero');
    const el = document.getElementById('precos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConhecerPlanos = () => {
    trackEvent('click_conhecer_planos');
    const el = document.getElementById('precos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Value Proposition & Actions */}
          <div className="flex flex-col text-left lg:col-span-7">
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-500/30 bg-blue-950/40 px-3.5 py-1.5 text-xs font-semibold text-blue-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span>Mídia Digital DOOH em Veículos de Aplicativo</span>
            </div>

            {/* H1 Headline */}
            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Sua marca no caminho de novos clientes.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base text-slate-300 sm:text-lg sm:leading-relaxed max-w-2xl">
              Divulgue sua empresa em tablets instalados no encosto de cabeça de carros de aplicativo.
              Apresente sua marca aos passageiros e facilite o contato com seu negócio por meio de um QR Code.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                onClick={handleQueroAnunciar}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#070b14]"
              >
                <span>QUERO ANUNCIAR</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleConhecerPlanos}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-4 text-base font-semibold text-slate-200 transition-all hover:border-blue-500/50 hover:bg-slate-800 hover:text-white active:scale-[0.98]"
              >
                <span>CONHECER OS PLANOS</span>
              </button>
            </div>

            {/* Trust Points / Micro-credentials */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Monitor className="h-4 w-4" />
                </div>
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white block">Tablets 10&quot; HD</span>
                  Encosto de cabeça
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <QrCode className="h-4 w-4" />
                </div>
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white block">QR Code Dinâmico</span>
                  Direto para seu contato
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white block">A partir de R$ 200/mês</span>
                  Custo acessível p/ veículo
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Tablet Promotional Video */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Tablet Device Frame */}
              <div className="relative rounded-2xl border-4 border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-blue-900/20 sm:p-3">
                {/* Car Headrest Mount Simulation detail */}
                <div className="absolute -top-3.5 left-1/2 h-2.5 w-20 -translate-x-1/2 rounded-t-md bg-slate-800 border-t border-slate-700" />
                <div className="absolute -bottom-3 left-1/2 h-2 w-16 -translate-x-1/2 rounded-b-md bg-slate-800/80" />

                {/* Inner Screen Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
                  <video
                    ref={videoRef}
                    src={ASSETS.heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className="h-full w-full object-cover"
                    aria-label="Demonstração do tablet MoveScreen instalado no veículo"
                  />

                  {/* Top indicator: Discreet badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-sm border border-slate-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Demonstração real no veículo</span>
                  </div>

                  {/* Tablet 10" specification tag */}
                  <div className="absolute bottom-2.5 right-2.5 rounded bg-blue-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    Tablet 10 Polegadas
                  </div>
                </div>

                {/* Speaker grill / bezel simulation */}
                <div className="mt-2 flex items-center justify-between px-2 text-[10px] text-slate-500">
                  <span className="font-mono tracking-widest text-[9px] uppercase">MOVESCREEN NETWORK</span>
                  <div className="flex gap-1">
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                  </div>
                </div>
              </div>

              {/* Decorative ambient glow */}
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-blue-600/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
