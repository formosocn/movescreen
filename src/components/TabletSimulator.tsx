import React, { useState } from 'react';
import {
  QrCode,
  Smartphone,
  ExternalLink,
  Sparkles,
  Wifi,
  BatteryCharging,
  Clock,
  MapPin,
  CheckCircle2,
  Share2,
  Volume2,
  RefreshCw,
  MessageCircle,
} from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';

interface AdPreset {
  id: string;
  category: string;
  tag: string;
  title: string;
  subtitle: string;
  offer: string;
  ctaText: string;
  bgGradient: string;
  cardImage: string;
  sampleQrText: string;
  metrics: {
    viewsPerMonth: string;
    clicksPerMonth: string;
    targetDistance: string;
  };
}

const PRESETS: AdPreset[] = [
  {
    id: 'barbearia',
    category: 'Barbearia & Salão',
    tag: 'Estética Masculina & Feminina',
    title: 'Dom Barbeiro Premium Club',
    subtitle: 'Barba, corte clássico e cerveja artesanal cortesia.',
    offer: 'GANHE 25% OFF NA 1ª VISITA',
    ctaText: 'Agendar Horário VIP',
    bgGradient: 'from-amber-950/80 via-slate-900 to-black',
    cardImage: '✂️',
    sampleQrText: 'VOUCHER-BARBER-25',
    metrics: {
      viewsPerMonth: '52.000',
      clicksPerMonth: '480 scaneamentos',
      targetDistance: 'Raio de 3 km do salão',
    },
  },
  {
    id: 'restaurante',
    category: 'Restaurante & Hamburgueria',
    tag: 'Gastronomia & Delivery',
    title: 'Burger Artisan & Craft Beer',
    subtitle: 'O burger defumado mais premiado do seu bairro.',
    offer: 'CHOPP EM DOBRO + SOBREMESA GRÁTIS',
    ctaText: 'Ver Cardápio & Reservar',
    bgGradient: 'from-orange-950/80 via-slate-900 to-black',
    cardImage: '🍔',
    sampleQrText: 'VOUCHER-BURGER-DUPLO',
    metrics: {
      viewsPerMonth: '65.000',
      clicksPerMonth: '620 pedidos iniciados',
      targetDistance: 'Região de alta vida noturna',
    },
  },
  {
    id: 'clinica',
    category: 'Clínica & Odontologia',
    tag: 'Saúde & Bem-Estar',
    title: 'Clínica Odonto & Estética Prime',
    subtitle: 'Alinhadores invisíveis e clareamento a laser moderno.',
    offer: 'AVALIAÇÃO DIGITAL 3D CORTESIA',
    ctaText: 'Agendar Consulta Rápida',
    bgGradient: 'from-cyan-950/80 via-slate-900 to-black',
    cardImage: '✨',
    sampleQrText: 'VOUCHER-ODONTO-3D',
    metrics: {
      viewsPerMonth: '48.000',
      clicksPerMonth: '310 leads qualificados',
      targetDistance: 'Perto de centros empresariais',
    },
  },
  {
    id: 'academia',
    category: 'Academia & Artes Marciais',
    tag: 'Fitness & Treinamento',
    title: 'IronBox CrossFit & Performance',
    subtitle: 'Treinos de alta intensidade para transformar sua rotina.',
    offer: '7 DIAS DE ACESSO FREE PASS',
    ctaText: 'Resgatar Semana Grátis',
    bgGradient: 'from-red-950/80 via-slate-900 to-black',
    cardImage: '⚡',
    sampleQrText: 'VOUCHER-IRON-7DAYS',
    metrics: {
      viewsPerMonth: '58.000',
      clicksPerMonth: '430 matrículas potenciais',
      targetDistance: 'Corredores residenciais',
    },
  },
  {
    id: 'hotel',
    category: 'Hotel, Pousada & Turismo',
    tag: 'Hospedagem & Eventos',
    title: 'Grand Palace Hotel & Spa',
    subtitle: 'Suítes executivas e gastronomia internacional no centro.',
    offer: 'DIÁRIA EXECUTIVA COM 20% OFF',
    ctaText: 'Consultar Disponibilidade',
    bgGradient: 'from-emerald-950/80 via-slate-900 to-black',
    cardImage: '🏨',
    sampleQrText: 'VOUCHER-HOTEL-20',
    metrics: {
      viewsPerMonth: '44.000',
      clicksPerMonth: '290 reservas diretas',
      targetDistance: 'Rotas aeroporto e rodoviária',
    },
  },
  {
    id: 'comercio',
    category: 'Lojas & Serviços Locais',
    tag: 'Varejo & Serviços Rápidos',
    title: 'Auto Tech & Estética Automotiva',
    subtitle: 'Polimento técnico, vitrificação e higienização interna.',
    offer: 'HIGIENIZAÇÃO DE OZÔNIO GRÁTIS',
    ctaText: 'Chamar no WhatsApp',
    bgGradient: 'from-blue-950/80 via-slate-900 to-black',
    cardImage: '🚗',
    sampleQrText: 'VOUCHER-AUTOTECH-O3',
    metrics: {
      viewsPerMonth: '51.000',
      clicksPerMonth: '390 orçamentos',
      targetDistance: 'Bairros da zona comercial',
    },
  },
];

export const TabletSimulator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('barbearia');
  const [customBusinessName, setCustomBusinessName] = useState<string>('');
  const [customOffer, setCustomOffer] = useState<string>('');
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [hasScanned, setHasScanned] = useState<boolean>(false);

  const activePreset = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];

  const displayedTitle = customBusinessName.trim() ? customBusinessName : activePreset.title;
  const displayedOffer = customOffer.trim() ? customOffer : activePreset.offer;

  const handleSimulateScan = () => {
    setHasScanned(true);
    setTimeout(() => {
      setHasScanned(false);
    }, 4000);
  };

  const whatsAppDirectLink = buildWhatsAppLink({
    intent: 'simulador',
    businessName: displayedTitle,
    segment: activePreset.category,
    customDetails: `Oferta configurada: "${displayedOffer}"`,
  });

  return (
    <section id="simulador" className="py-16 lg:py-24 bg-[#091122]/90 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador Interativo de DOOH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Veja exatamente como o passageiro enxerga o anúncio do seu negócio
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Selecione seu segmento abaixo ou digite o nome da sua empresa para ver a exibição em tempo real na tela horizontal de 10 polegadas montada no encosto do carro.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {PRESETS.map((preset) => {
            const isSelected = preset.id === selectedPresetId;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  setSelectedPresetId(preset.id);
                  setHasScanned(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#00D2FF] text-slate-950 shadow-lg shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{preset.category}</span>
              </button>
            );
          })}
        </div>

        {/* Main Simulator & Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Top: Interactive 10" Tablet Display Frame */}
          <div className="lg:col-span-8">
            <div className="relative mx-auto max-w-[820px]">
              {/* Car Headrest Simulation Bezel Mount */}
              <div className="bg-[#111827] rounded-[28px] p-3 sm:p-4 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50 relative">
                {/* Mount bracket at top center */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-3.5 bg-slate-800 rounded-t-lg border-t border-slate-600 flex items-center justify-center">
                  <div className="w-16 h-1 bg-slate-900 rounded-full" />
                </div>

                {/* 10" Screen Glass Surface (Aspect Ratio 16:10) */}
                <div
                  className={`relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-gradient-to-br ${activePreset.bgGradient} border border-slate-700/50 shadow-inner flex flex-col justify-between p-4 sm:p-6 text-white`}
                >
                  {/* Subtle screen scanline / glass reflection */}
                  <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none" />

                  {/* Tablet Top Status Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] sm:text-xs text-slate-300 font-mono border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2.5 font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>MOVESCREEN NETWORK</span>
                      <span className="hidden sm:inline text-slate-400">·</span>
                      <span className="hidden sm:inline text-cyan-300 flex items-center gap-1 font-sans">
                        <MapPin className="w-3 h-3 text-[#00D2FF]" />
                        <span>Corrida Ativa • São Paulo - SP</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:flex items-center gap-1 text-slate-300">
                        <Volume2 className="w-3.5 h-3.5 text-[#00D2FF]" />
                        <span>Áudio HD</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Wifi className="w-3.5 h-3.5 text-cyan-400" />
                        <span>5G</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                        <span>100%</span>
                      </span>
                      <span className="font-bold text-white flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>14:32</span>
                      </span>
                    </div>
                  </div>

                  {/* Ad Body Content inside Tablet */}
                  <div className="relative z-10 my-auto py-2 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    {/* Left side: Business Value & Offer */}
                    <div className="sm:col-span-8 space-y-2 sm:space-y-3">
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-[#00D2FF] text-[10px] sm:text-xs font-bold tracking-wide uppercase border border-cyan-500/30">
                        {activePreset.tag}
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                        {displayedTitle}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                        {activePreset.subtitle}
                      </p>

                      <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/70 border border-amber-500/40 backdrop-blur-md">
                        <span className="text-[10px] sm:text-xs font-bold text-amber-300 block uppercase tracking-wider">
                          🎁 Oferta Exclusiva para Passageiros:
                        </span>
                        <span className="text-sm sm:text-base md:text-lg font-black text-white tracking-wide">
                          {displayedOffer}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setIsInteracting(true)}
                          className="px-4 py-2 rounded-lg bg-[#00D2FF] text-slate-950 text-xs sm:text-sm font-bold hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-md"
                        >
                          <span>{activePreset.ctaText}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[11px] text-slate-400 hidden sm:inline">
                          Toque na tela ou aponte a câmera
                        </span>
                      </div>
                    </div>

                    {/* Right side: Interactive QR Code Block */}
                    <div className="sm:col-span-4 flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-center">
                      <div
                        onClick={handleSimulateScan}
                        className="cursor-pointer group relative bg-white p-2.5 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        title="Clique para simular o escaneamento do passageiro"
                      >
                        {/* Realistic SVG QR Code Representation */}
                        <svg
                          className="w-24 h-24 sm:w-28 sm:h-28 text-slate-900"
                          viewBox="0 0 100 100"
                          fill="currentColor"
                        >
                          <rect x="0" y="0" width="30" height="30" rx="4" />
                          <rect x="5" y="5" width="20" height="20" fill="white" />
                          <rect x="10" y="10" width="10" height="10" />

                          <rect x="70" y="0" width="30" height="30" rx="4" />
                          <rect x="75" y="5" width="20" height="20" fill="white" />
                          <rect x="80" y="10" width="10" height="10" />

                          <rect x="0" y="70" width="30" height="30" rx="4" />
                          <rect x="5" y="75" width="20" height="20" fill="white" />
                          <rect x="10" y="80" width="10" height="10" />

                          {/* Data dots */}
                          <rect x="36" y="8" width="6" height="6" />
                          <rect x="46" y="8" width="6" height="14" />
                          <rect x="56" y="16" width="6" height="6" />
                          <rect x="36" y="28" width="14" height="6" />
                          <rect x="8" y="38" width="6" height="14" />
                          <rect x="20" y="44" width="8" height="6" />
                          <rect x="36" y="40" width="28" height="8" />
                          <rect x="44" y="52" width="12" height="12" />
                          <rect x="70" y="40" width="8" height="18" />
                          <rect x="84" y="44" width="8" height="14" />
                          <rect x="36" y="70" width="12" height="8" />
                          <rect x="54" y="76" width="16" height="6" />
                          <rect x="76" y="66" width="16" height="8" />
                          <rect x="72" y="80" width="8" height="12" />
                          <rect x="86" y="84" width="8" height="8" />
                        </svg>

                        {/* Scanner hint badge */}
                        <div className="absolute inset-0 bg-cyan-900/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[10px] font-bold text-white text-center px-1">
                            Clique para Testar
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 text-[10px] sm:text-xs text-white font-medium">
                        Aponte a câmera do celular
                      </div>
                      <div className="text-[9px] text-cyan-300 font-mono">
                        {activePreset.sampleQrText}
                      </div>

                      {hasScanned && (
                        <div className="mt-2 px-2 py-1 rounded bg-emerald-500 text-slate-950 font-bold text-[10px] animate-bounce">
                          ✓ QR Code Lido! Abrindo voucher...
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tablet Bottom Bar: Live Passenger Callout */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs text-slate-300 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Smartphone className="w-3.5 h-3.5 text-[#00D2FF]" />
                      <span>Distância de visão do passageiro: 50 cm</span>
                    </span>
                    <span className="text-[#00D2FF] font-semibold">
                      Exibição contínua • Sem pulo
                    </span>
                  </div>
                </div>
              </div>

              {/* Physical Headrest Pole Stand Illustration */}
              <div className="flex justify-center gap-24 sm:gap-36 -mt-1">
                <div className="w-3.5 h-6 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b" />
                <div className="w-3.5 h-6 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b" />
              </div>
            </div>
          </div>

          {/* Right: Live Customizer & Estimated Impact Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Live Customizer Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00D2FF]" />
                  <span>Personalize seu Anúncio</span>
                </h4>
                {(customBusinessName || customOffer) && (
                  <button
                    type="button"
                    onClick={() => {
                      setCustomBusinessName('');
                      setCustomOffer('');
                    }}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Limpar
                  </button>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="business-name"
                    className="block text-xs font-semibold text-slate-300 mb-1"
                  >
                    Nome da sua Empresa:
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    value={customBusinessName}
                    onChange={(e) => setCustomBusinessName(e.target.value)}
                    placeholder={activePreset.title}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-offer"
                    className="block text-xs font-semibold text-slate-300 mb-1"
                  >
                    Sua Oferta ou Chamada:
                  </label>
                  <input
                    id="business-offer"
                    type="text"
                    value={customOffer}
                    onChange={(e) => setCustomOffer(e.target.value)}
                    placeholder={activePreset.offer}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF]"
                  />
                </div>
              </div>

              {/* Real-time Estimated Reach for this niche */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-slate-400 block uppercase">
                  Estimativa neste Segmento:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Visualizações / mês:</span>
                    <strong className="text-white font-mono text-sm">
                      {activePreset.metrics.viewsPerMonth}
                    </strong>
                  </div>
                  <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Leads / QR Scans:</span>
                    <strong className="text-emerald-400 font-mono text-sm">
                      {activePreset.metrics.clicksPerMonth}
                    </strong>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                  <span>Cobertura recomendada: {activePreset.metrics.targetDistance}</span>
                </div>
              </div>

              {/* Direct Conversion CTA */}
              <a
                href={whatsAppDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quero Anunciar Este Formato</span>
              </a>
            </div>

            {/* Why Headrest Works */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-slate-900 border border-cyan-500/20 space-y-2.5 text-xs text-slate-300">
              <span className="font-bold text-white text-sm block flex items-center gap-1.5 text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                Por que a tela no encosto converte tanto?
              </span>
              <p className="leading-relaxed">
                Durante uma viagem de Uber ou 99, o passageiro está sentado, relaxado e com o tablet diretamente à altura dos olhos. Diferente de outdoors de rua que duram 2 segundos, na MoveScreen ele tem tempo de ler a oferta e escanear o QR Code com calma.
              </p>
            </div>
          </div>
        </div>

        {/* Modal / Interaction preview if user clicks interactive button */}
        {isInteracting && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 max-w-md w-full rounded-2xl p-6 space-y-4 relative shadow-2xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h5 className="font-bold text-white text-base">
                  Simulação da Ação do Passageiro
                </h5>
                <button
                  type="button"
                  onClick={() => setIsInteracting(false)}
                  className="text-slate-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs text-emerald-400 font-semibold">
                  ✓ O passageiro tocou na tela ou escaneou o QR Code
                </div>
                <h6 className="font-extrabold text-white text-lg">
                  {displayedTitle}
                </h6>
                <p className="text-xs text-slate-300">
                  Oferta resgatada: <strong>{displayedOffer}</strong>
                </p>
                <p className="text-xs text-slate-400">
                  O cliente é direcionado automaticamente para o seu WhatsApp, cardápio digital ou página de agendamento online.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={whatsAppDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 transition-colors"
                >
                  Falar com Consultor MoveScreen
                </a>
                <button
                  type="button"
                  onClick={() => setIsInteracting(false)}
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
