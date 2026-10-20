import React from 'react';
import { Check, MessageCircle, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';

export const PricingPlans: React.FC = () => {
  const plans = [
    {
      id: 'plano-start',
      name: 'Start Local',
      badge: 'Ideal para Começar',
      price: '349',
      period: '/mês',
      description: 'Perfeito para barbearias, cafés, salões e profissionais que querem clientes do próprio bairro.',
      features: [
        '5 veículos ativos equipados com tablet 10"',
        '~225.000 visualizações estimadas por mês',
        'Exibição em loop contínuo de 15 segundos',
        'QR Code personalizado com redirecionamento direto',
        'Criação ou formatação da arte inclusa',
        'Relatório mensal de veiculação e impacto',
      ],
      popular: false,
      ctaText: 'Contratar Start Local',
      intent: 'plano-start' as const,
    },
    {
      id: 'plano-crescimento',
      name: 'Crescimento Urbano',
      badge: 'Mais Escolhido',
      price: '790',
      period: '/mês',
      description: 'A melhor relação custo-benefício para restaurantes, clínicas e academias que buscam escala rápida.',
      features: [
        '15 veículos ativos equipados com tablet 10"',
        '~675.000 visualizações estimadas por mês',
        'Alta frequência de exibição (a cada 2 minutos)',
        'Cobertura nos principais polos comerciais da cidade',
        'QR Code dinâmico (troque o link quando quiser)',
        '2 trocas de promoção / criativo por mês inclusas',
        'Suporte prioritário na criação de vídeos e banners',
        'Painel com relatório analítico quinzenal',
      ],
      popular: true,
      ctaText: 'Garantir Plano Crescimento',
      intent: 'plano-crescimento' as const,
    },
    {
      id: 'plano-dominio',
      name: 'Domínio de Frota',
      badge: 'Máximo Impacto',
      price: '1.490',
      period: '/mês',
      description: 'Presença massiva para redes de franquias, hotéis, grandes clínicas e marcas em expansão agressiva.',
      features: [
        '35+ veículos ativos equipados com tablet 10"',
        '+1.575.000 visualizações estimadas por mês',
        'Frequência prioritária de repetição nas corridas',
        'Cobertura metropolitana total (aeroporto, shoppings, centro)',
        'Trocas ilimitadas de criativos durante a vigência',
        'Gravação ou edição profissional de vídeo incluída',
        'Gerente de conta dedicado com suporte WhatsApp diário',
        'Relatório semanal com métricas consolidadas',
      ],
      popular: false,
      ctaText: 'Consultar Disponibilidade',
      intent: 'plano-dominio' as const,
    },
  ];

  return (
    <section id="planos" className="py-16 lg:py-24 bg-[#091122]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <span>Planos Transparentes</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Sem Pegadinhas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Investimento acessível com retorno direto em clientes
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Escolha o volume de veículos ideal para a sua empresa. Comece com 5 carros no seu bairro ou domine a frota da cidade inteira.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const whatsAppLink = buildWhatsAppLink({
              intent: plan.intent,
              planName: plan.name,
              customDetails: `Investimento: R$ ${plan.price}${plan.period}`,
            });

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-slate-900 border-2 border-[#00D2FF] shadow-2xl shadow-cyan-500/15 lg:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00D2FF] text-slate-950 font-black text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    {!plan.popular && (
                      <span className="text-xs font-medium text-slate-400">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">A partir de</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white">R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">{plan.period}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                      ✓ Sem taxa oculta de ativação
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold transition-all text-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/40'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{plan.ctaText}</span>
                  </a>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Ativação imediata em até 48 horas
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Fleet Callout for Agencies / Multiple Franchises */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">
              Necessita de projeto sob medida para mais de 50 veículos?
            </span>
            <p className="text-sm text-slate-300">
              Atendemos agências de publicidade, redes com múltiplas filiais e campanhas institucionais de alto volume.
            </p>
          </div>
          <a
            href={buildWhatsAppLink({
              intent: 'geral',
              customDetails: 'Projeto especial para grandes frotas / agências',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap border border-slate-700"
          >
            <span>Falar com Diretoria Comercial</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
