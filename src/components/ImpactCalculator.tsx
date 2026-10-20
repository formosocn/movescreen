import React, { useState } from 'react';
import { Calculator, MessageCircle, TrendingUp, Users, Eye, Sparkles } from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';

export const ImpactCalculator: React.FC = () => {
  const [carCount, setCarCount] = useState<number>(10);
  const [selectedSegment, setSelectedSegment] = useState<string>('Alimentação / Gastronomia');

  // Math models based on DOOH ride-share benchmarks
  // 1 car = ~1.500 trips/passengers per month, ~45.000 loop ad exposures
  const totalMonthlyViews = carCount * 45000;
  const totalUniquePassengers = carCount * 1450;

  // Approximate ticket/conversion benchmark per segment
  const segmentMultipliers: Record<string, { leadRate: number; avgTicket: string }> = {
    'Alimentação / Gastronomia': { leadRate: 0.045, avgTicket: 'R$ 75' },
    'Barbearia & Salão': { leadRate: 0.040, avgTicket: 'R$ 80' },
    'Clínica & Odonto': { leadRate: 0.025, avgTicket: 'R$ 350' },
    'Academia & Treino': { leadRate: 0.030, avgTicket: 'R$ 160' },
    'Lojas & Serviços': { leadRate: 0.032, avgTicket: 'R$ 120' },
  };

  const currentSegmentData = segmentMultipliers[selectedSegment] || {
    leadRate: 0.035,
    avgTicket: 'R$ 100',
  };

  const estimatedLeads = Math.round(totalUniquePassengers * currentSegmentData.leadRate);

  const formattedViews = totalMonthlyViews.toLocaleString('pt-BR');
  const formattedPassengers = totalUniquePassengers.toLocaleString('pt-BR');

  const whatsAppDirectLink = buildWhatsAppLink({
    intent: 'calculadora',
    segment: selectedSegment,
    customDetails: `Simulação de ${carCount} veículos (~${formattedViews} visualizações mensais, ~${estimatedLeads} novos contatos estimados)`,
  });

  return (
    <section id="calculadora" className="py-16 lg:py-24 bg-[#060B18] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Alcance & Resultados</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Calcule o alcance da sua campanha em segundos
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Ajuste a quantidade de veículos equipados com tablets e veja a estimativa de visualizações, passageiros impactados e oportunidades de vendas para seu negócio.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Sliders & Inputs */}
            <div className="md:col-span-7 space-y-6">
              {/* Segment Dropdown */}
              <div>
                <label
                  htmlFor="calculator-segment"
                  className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Seu Segmento de Negócio:
                </label>
                <select
                  id="calculator-segment"
                  value={selectedSegment}
                  onChange={(e) => setSelectedSegment(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm font-semibold text-white focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF]"
                >
                  <option value="Alimentação / Gastronomia">Alimentação / Gastronomia (Restaurantes, Cafés, Burgers)</option>
                  <option value="Barbearia & Salão">Barbearia & Salão de Beleza / Estética</option>
                  <option value="Clínica & Odonto">Clínica Médica / Odontologia / Fisioterapia</option>
                  <option value="Academia & Treino">Academia / Studio Fitness / Artes Marciais</option>
                  <option value="Lojas & Serviços">Lojas, Varejo & Serviços Locais</option>
                </select>
              </div>

              {/* Vehicle Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="car-count-slider"
                    className="text-xs font-bold text-slate-300 uppercase tracking-wider"
                  >
                    Quantidade de Veículos com Tablet:
                  </label>
                  <span className="text-xl font-black text-[#00D2FF] tabular-nums font-mono">
                    {carCount} {carCount === 1 ? 'carro' : 'carros'}
                  </span>
                </div>

                <input
                  id="car-count-slider"
                  type="range"
                  min="3"
                  max="50"
                  step="1"
                  value={carCount}
                  onChange={(e) => setCarCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-[#00D2FF]"
                />

                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>3 carros (Iniciante)</span>
                  <span>15 carros (Popular)</span>
                  <span>50 carros (Dominante)</span>
                </div>
              </div>

              {/* Explanatory notes */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1">
                <span className="font-semibold text-slate-200 block">
                  Metodologia de Cálculo Realista:
                </span>
                <p>
                  Considera uma média de 50 a 65 corridas diárias por veículo de app, com loop de exibição a cada 2 a 3 minutos durante corridas médias de 18 minutos.
                </p>
              </div>
            </div>

            {/* Live Outputs & Conversion Action */}
            <div className="md:col-span-5 bg-slate-950/90 rounded-2xl p-6 border border-cyan-500/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Resultados Mensais Estimados</span>
                </div>

                {/* Metric 1 */}
                <div className="space-y-0.5">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#00D2FF]" />
                    Visualizações Mensais na Tela:
                  </span>
                  <div className="text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                    {formattedViews}
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-0.5">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    Passageiros Únicos no Banco Traseiro:
                  </span>
                  <div className="text-2xl font-bold text-slate-200 tracking-tight font-mono tabular-nums">
                    ~{formattedPassengers} pessoas
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="space-y-0.5 pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Potencial de Resgates / Contatos:
                  </span>
                  <div className="text-2xl font-extrabold text-emerald-400 tracking-tight font-mono tabular-nums">
                    ~{estimatedLeads} novos clientes
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    Baseado em taxa média de escaneamento de voucher
                  </span>
                </div>
              </div>

              {/* Conversion CTA */}
              <div className="pt-2">
                <a
                  href={whatsAppDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Quero Esta Estimativa no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
