import React from 'react';
import { Palette, Navigation, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';
import PASSENGER_IMG from '../assets/images/movescreen_passenger_view_1792504810580.jpg';
import FLEET_IMG from '../assets/images/movescreen_driver_car_fleet_1792504810222.jpg';


export const HowItWorks: React.FC = () => {
  const whatsAppUrl = buildWhatsAppLink({ intent: 'geral', customDetails: 'Origem: Como Funciona' });

  const steps = [
    {
      step: '01',
      title: 'Configuração do seu Criativo',
      desc: 'Nossa equipe adapta seu vídeo de 15 segundos ou card estático de alta resolução com um QR Code inteligente e rastreável, pronto para gerar contatos.',
      icon: Palette,
      highlight: 'Design e suporte inclusos',
    },
    {
      step: '02',
      title: 'Veiculação na Frota de Aplicativo',
      desc: 'Os tablets instalados nos veículos parceiros (Uber e 99) exibem sua campanha de forma rotativa durante as viagens nos bairros e rotas estratégicas da cidade.',
      icon: Navigation,
      highlight: 'Audiência qualificada em trânsito',
    },
    {
      step: '03',
      title: 'Captação e Conversão Instantânea',
      desc: 'Com o tablet a poucos centímetros e sem distrações, o passageiro aponta a câmera do celular para o QR Code e cai diretamente no seu WhatsApp ou loja.',
      icon: QrCode,
      highlight: 'Retorno mensurável e em tempo real',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#060B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <span>Processo Simples e Rápido</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Sem Burocracia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Como funciona a publicidade em tablets MoveScreen
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Em menos de 48 horas após a aprovação da arte, seu negócio já estará sendo exibido para milhares de passageiros que circulam diariamente pela cidade.
          </p>
        </div>

        {/* 3 Step Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-slate-700 group-hover:text-[#00D2FF] transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-[#00D2FF]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photographic Evidence Bento Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 p-6 sm:p-10 rounded-3xl border border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">
              Atenção Real vs. Distração do Feed
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              O passageiro passa até 40 minutos em silêncio olhando exatamente para o encosto do banco.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No trânsito da cidade, o tédio faz com que as telas luminosas atraiam 100% dos olhares. Com a MoveScreen, o seu anúncio se torna o centro das atenções, oferecendo cupons de desconto, ofertas gastronômicas ou serviços que o passageiro precisa naquele exato dia.
            </p>
            <div className="pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00D2FF] hover:text-cyan-300 transition-colors"
              >
                <span>Tirar dúvidas sobre a veiculação com nossa equipe</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-slate-800 relative group aspect-[4/3] bg-slate-950">
              <img
                src={PASSENGER_IMG}
                alt="Passageira interagindo com anúncio no tablet MoveScreen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">
                  Passageiro escaneia voucher no banco
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 relative group aspect-[4/3] bg-slate-950">
              <img
                src={FLEET_IMG}
                alt="Frota de veículos de aplicativo com tablets MoveScreen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">
                  Frota ativa rodando pelos principais bairros
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
