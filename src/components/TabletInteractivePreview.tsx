import React, { useState } from 'react';
import { QrCode, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

interface AdPreset {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  ctaText: string;
  bgColor: string;
  accentColor: string;
  qrDestination: string;
}

const PRESETS: AdPreset[] = [
  {
    id: 'barbearia',
    category: 'Barbearia & Estética',
    title: 'Corte Moderno & Barba Terapia',
    subtitle: 'A 5 minutos do seu destino. Agende agora pelo WhatsApp.',
    ctaText: 'Agendar Horário',
    bgColor: 'from-amber-950/60 via-slate-900 to-slate-950',
    accentColor: '#f59e0b',
    qrDestination: 'WhatsApp Direto',
  },
  {
    id: 'restaurante',
    category: 'Restaurante & Gastronomia',
    title: 'Almoço Executivo & Pratos Especiais',
    subtitle: 'Confira nosso cardápio de hoje e faça sua reserva.',
    ctaText: 'Ver Cardápio',
    bgColor: 'from-rose-950/60 via-slate-900 to-slate-950',
    accentColor: '#f43f5e',
    qrDestination: 'Cardápio Digital',
  },
  {
    id: 'clinica',
    category: 'Clínica & Odontologia',
    title: 'Check-up Odontológico Completo',
    subtitle: 'Estrutura moderna no centro da cidade. Atendimento humanizado.',
    ctaText: 'Agendar Consulta',
    bgColor: 'from-teal-950/60 via-slate-900 to-slate-950',
    accentColor: '#14b8a6',
    qrDestination: 'Página de Agendamento',
  },
  {
    id: 'academia',
    category: 'Academia & Treino',
    title: 'Musculação e Funcional Sem Fidelidade',
    subtitle: 'Garanta sua aula experimental gratuita escaneando o código.',
    ctaText: 'Aula Gratuita',
    bgColor: 'from-blue-950/60 via-slate-900 to-slate-950',
    accentColor: '#3b82f6',
    qrDestination: 'WhatsApp da Recepção',
  },
];

export const TabletInteractivePreview: React.FC = () => {
  const [activePreset, setActivePreset] = useState<AdPreset>(PRESETS[0]);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-950/50 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <Smartphone className="h-4 w-4" />
            <span>Experiência Visual do Passageiro</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Veja como sua marca aparece no tablet de 10 polegadas
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Formato horizontal planejado para leitura rápida e interação instantânea via smartphone.
          </p>

          {/* Interactive preset selector */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                  activePreset.id === preset.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {preset.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tablet Mockup */}
        <div className="mx-auto max-w-4xl">
          {/* Headrest Mount Graphic */}
          <div className="relative mx-auto w-32 h-4 rounded-t-lg bg-slate-800 border-t border-x border-slate-700" />

          {/* Tablet Frame */}
          <div className="relative rounded-3xl border-4 border-slate-800 bg-[#060911] p-3 sm:p-4 shadow-2xl shadow-blue-950/50">
            {/* Camera / sensor dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
              <span className="h-1 w-1 rounded-full bg-blue-500/40" />
            </div>

            {/* Screen Inner */}
            <div
              className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${activePreset.bgColor} border border-white/10 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300`}
            >
              {/* Header inside tablet screen */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    {activePreset.category}
                  </span>
                </div>
                <div className="rounded bg-black/40 px-2 py-0.5 text-[10px] text-slate-300 font-mono">
                  MoveScreen Media Player
                </div>
              </div>

              {/* Main Ad Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
                <div className="sm:col-span-8 space-y-2 text-left">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ backgroundColor: `${activePreset.accentColor}25`, color: activePreset.accentColor }}
                  >
                    Oferta Exclusiva na Viagem
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                    {activePreset.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-md">
                    {activePreset.subtitle}
                  </p>
                  <div className="pt-2">
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow"
                      style={{ backgroundColor: activePreset.accentColor }}
                    >
                      <span>{activePreset.ctaText}</span>
                    </span>
                  </div>
                </div>

                {/* QR Code Callout on right of tablet */}
                <div className="sm:col-span-4 flex flex-col items-center justify-center bg-black/50 backdrop-blur-md rounded-xl p-3 border border-white/15 text-center">
                  <div className="bg-white p-2 rounded-lg shadow-inner">
                    <QrCode className="h-20 w-20 sm:h-24 sm:w-24 text-slate-950" />
                  </div>
                  <span className="mt-2 text-[11px] font-bold text-white flex items-center gap-1">
                    <Smartphone className="h-3 w-3 text-sky-400" />
                    <span>Aponte sua câmera</span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Destino: {activePreset.qrDestination}
                  </span>
                </div>
              </div>

              {/* Footer info inside tablet */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400">
                <span>Anúncio veiculado na rede MoveScreen</span>
                <span className="text-slate-300">Toque ou aponte a câmera para interagir</span>
              </div>
            </div>
          </div>

          {/* Bottom mount base */}
          <div className="mx-auto w-40 h-2 bg-slate-800 rounded-b-lg border-b border-x border-slate-700" />
        </div>
      </div>
    </section>
  );
};
