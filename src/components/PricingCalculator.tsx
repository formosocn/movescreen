import React, { useState } from 'react';
import {
  PRICING_RULES,
  calculateMonthlyPrice,
  formatBRL,
  buildCommercialWhatsAppUrl,
  CONTACTS,
} from '../config/constants';
import { trackEvent } from '../utils/analytics';
import {
  Clock,
  Car,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Info,
  Sliders,
} from 'lucide-react';

const QUICK_PRESETS = [10, 20, 30, 60, 90, 120];

export const PricingCalculator: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(30); // Default to 30s
  const [vehicles, setVehicles] = useState<number>(1);

  const pricePerVehicle = calculateMonthlyPrice(seconds, 1);
  const totalPrice = calculateMonthlyPrice(seconds, vehicles);

  const handleSecondsChange = (newSeconds: number) => {
    const clamped = Math.min(
      Math.max(newSeconds, PRICING_RULES.minSeconds),
      PRICING_RULES.maxSeconds
    );
    setSeconds(clamped);
    trackEvent('change_pricing_seconds', { seconds: clamped });
  };

  const handleVehiclesChange = (delta: number) => {
    const next = Math.max(1, Math.min(50, vehicles + delta));
    setVehicles(next);
    trackEvent('change_pricing_vehicles', { vehicles: next });
  };

  const handleCtaClick = () => {
    trackEvent('click_contratar_plano', {
      seconds,
      vehicles,
      pricePerVehicle,
      totalPrice,
    });
    const url = buildCommercialWhatsAppUrl(seconds, vehicles);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const formatSecondsLabel = (sec: number) => {
    if (sec >= 60) {
      const mins = Math.floor(sec / 60);
      const remSecs = sec % 60;
      if (remSecs === 0) return `${sec}s (${mins} min)`;
      return `${sec}s (${mins}m ${remSecs}s)`;
    }
    return `${sec} segundos`;
  };

  return (
    <section id="precos" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/40 px-3.5 py-1 text-xs font-semibold text-blue-400">
            <Sliders className="h-3.5 w-3.5" />
            <span>Transparência Comercial</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Simule seu plano de anúncio
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Preço-base linear de <strong className="text-white">R$ 200,00 por cada 10 segundos</strong> de espaço publicitário, por veículo, por mês. Escolha de 10s até o limite de 120s (2 minutos).
          </p>
        </div>

        {/* Interactive Pricing Card & Simulator */}
        <div className="mt-12 mx-auto max-w-4xl rounded-3xl border border-blue-500/30 bg-[#0a1120] p-6 sm:p-10 shadow-2xl shadow-blue-950/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls: Sliders and Pickers */}
            <div className="lg:col-span-7 space-y-7">
              {/* Selector 1: Tempo de Exibição */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span>Tempo de exibição por veículo:</span>
                  </label>
                  <span className="font-display text-base font-bold text-blue-400">
                    {formatSecondsLabel(seconds)}
                  </span>
                </div>

                {/* Range Slider */}
                <div className="relative pt-2 pb-1">
                  <input
                    type="range"
                    min={PRICING_RULES.minSeconds}
                    max={PRICING_RULES.maxSeconds}
                    step={PRICING_RULES.stepSeconds}
                    value={seconds}
                    onChange={(e) => handleSecondsChange(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Selecionar tempo de anúncio em segundos"
                  />
                  <div className="flex justify-between text-[11px] font-medium text-slate-500 mt-2">
                    <span>10s (mínimo)</span>
                    <span>30s</span>
                    <span>60s (1 min)</span>
                    <span>120s (máx. 2 min)</span>
                  </div>
                </div>

                {/* Quick Preset Buttons */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="text-[11px] text-slate-400 self-center mr-1">Atalhos:</span>
                  {QUICK_PRESETS.map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => handleSecondsChange(sec)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                        seconds === sec
                          ? 'bg-blue-600 text-white font-bold shadow-sm'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {sec}s
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Quantidade de Veículos */}
              <div className="border-t border-slate-800/80 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Car className="h-4 w-4 text-sky-400" />
                    <span>Quantidade de veículos:</span>
                  </label>
                  <span className="text-xs text-slate-400">
                    Multiplica o alcance da campanha
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center rounded-xl border border-slate-700 bg-slate-900 p-1">
                    <button
                      type="button"
                      onClick={() => handleVehiclesChange(-1)}
                      disabled={vehicles <= 1}
                      className="h-9 w-9 rounded-lg flex items-center justify-center font-bold text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Diminuir quantidade de veículos"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-display text-base font-bold text-white">
                      {vehicles}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleVehiclesChange(1)}
                      className="h-9 w-9 rounded-lg flex items-center justify-center font-bold text-slate-300 hover:bg-slate-800 transition-colors"
                      aria-label="Aumentar quantidade de veículos"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[1, 2, 3, 5, 10].map((qty) => (
                      <button
                        key={qty}
                        type="button"
                        onClick={() => {
                          setVehicles(qty);
                          trackEvent('change_pricing_vehicles', { vehicles: qty });
                        }}
                        className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                          vehicles === qty
                            ? 'bg-blue-600/40 text-blue-200 border border-blue-500/60 font-semibold'
                            : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
                        }`}
                      >
                        {qty} {qty === 1 ? 'veículo' : 'veículos'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* What is Included checklist */}
              <div className="border-t border-slate-800/80 pt-5 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Veiculação na programação rotativa dos tablets dos veículos contratados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>QR Code configurável para WhatsApp, cardápio, ofertas ou site</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Suporte para envio da arte ou vídeo nas especificações da tela</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Recursos de monitoramento conforme funcionalidades da plataforma</span>
                </div>
              </div>
            </div>

            {/* Right Summary Box: Value, Breakdown & Dynamic CTA */}
            <div className="lg:col-span-5 rounded-2xl border border-blue-500/40 bg-gradient-to-b from-[#0c1833] to-[#080d1a] p-6 text-center sm:p-7 shadow-xl">
              <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 mb-3">
                Resumo da Simulação
              </span>

              {/* Price Display */}
              <div className="my-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Valor Total Mensal
                </span>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="text-sm font-medium text-slate-400">R$</span>
                  <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                    {formatBRL(totalPrice)}
                  </span>
                  <span className="text-xs font-medium text-slate-400">/mês</span>
                </div>
              </div>

              {/* Breakdown by vehicle */}
              <div className="my-4 rounded-xl bg-slate-900/80 border border-slate-800 p-3 text-xs text-slate-300 space-y-1.5 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-400">Tempo por veículo:</span>
                  <span className="font-semibold text-white">{seconds} segundos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valor por veículo:</span>
                  <span className="font-semibold text-white">R$ {formatBRL(pricePerVehicle)}/mês</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Quantidade de veículos:</span>
                  <span className="font-semibold text-white">{vehicles} {vehicles === 1 ? 'veículo' : 'veículos'}</span>
                </div>
                <div className="pt-1.5 border-t border-slate-800 flex justify-between text-blue-300 font-semibold">
                  <span>Cálculo:</span>
                  <span>({seconds}s ÷ 10) × R$ 200 × {vehicles}</span>
                </div>
              </div>

              {/* Dynamic CTA Button */}
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/40 transition-all hover:bg-blue-500 hover:shadow-blue-500/50 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>QUERO ANUNCIAR — {seconds} SEGUNDOS</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="mt-3 text-[11px] text-slate-400 leading-tight">
                Abre conversa no WhatsApp comercial da MoveScreen com a proposta preenchida.
              </p>
            </div>
          </div>

          {/* Mandatory Clarification Disclaimer */}
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/70 p-4 flex items-start gap-3 text-xs text-slate-400">
            <Info className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-200">Aviso importante:</strong> A contratação de espaço publicitário se refere ao tempo de exibição do anúncio dentro da programação rotativa de cada tablet/veículo contratado, não ao tempo total da viagem do passageiro. Todos os valores são mensais por veículo. Limite máximo de 120 segundos por anunciante em cada veículo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
