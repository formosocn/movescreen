import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { buildCommercialWhatsAppUrl, CONTACTS } from '../config/constants';
import { trackEvent } from '../utils/analytics';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Como funciona a publicidade na MoveScreen?',
    answer:
      'A MoveScreen veicula anúncios em tablets horizontais de 10 polegadas instalados no encosto de cabeça de veículos que operam em aplicativos de transporte. Seu anúncio é exibido dentro da programação rotativa dos tablets para os passageiros durante as viagens, acompanhado de um QR Code para ação rápida.',
  },
  {
    question: 'Onde os tablets são instalados?',
    answer:
      'Os tablets são instalados com suportes apropriados na parte traseira dos encostos de cabeça dos bancos dianteiros dos veículos parceiros, ficando na linha de visão confortável dos passageiros acomodados no banco traseiro.',
  },
  {
    question: 'Quanto custa anunciar?',
    answer:
      'O preço-base da MoveScreen é de R$ 200,00 por mês por cada 10 segundos de espaço publicitário por veículo. Por exemplo: 10 segundos custam R$ 200,00/mês por veículo; 20 segundos custam R$ 400,00/mês por veículo; 30 segundos custam R$ 600,00/mês por veículo; 60 segundos custam R$ 1.200,00/mês por veículo, até o limite de 120 segundos (R$ 2.400,00/mês por veículo). O valor total é calculado proporcionalmente ao tempo e ao número de veículos contratados.',
  },
  {
    question: 'Posso utilizar meu próprio vídeo ou minha arte?',
    answer:
      'Sim. Você pode enviar sua arte estática ou vídeo no formato horizontal adequado às telas de 10 polegadas. Caso tenha dúvidas sobre especificações ou precise de orientações sobre a chamada comercial e contraste, nossa equipe comercial e de suporte orienta você durante a contratação.',
  },
  {
    question: 'Para onde o QR Code pode direcionar o passageiro?',
    answer:
      'O QR Code é flexível e pode direcionar o passageiro para o canal que fizer mais sentido para sua estratégia: WhatsApp da sua empresa, cardápio online, página de agendamentos, catálogo de produtos, site oficial ou rede social.',
  },
  {
    question: 'Como faço para contratar?',
    answer:
      'A contratação é simples: basta clicar no botão "QUERO ANUNCIAR" ou nos botões de simulação da página para iniciar uma conversa direta com nossa equipe comercial pelo WhatsApp oficial (81 8133-0331). Definiremos o tempo de exibição, a quantidade de veículos e receberemos seu material para inclusão na programação.',
  },
  {
    question: 'Como posso acompanhar a exibição do meu anúncio?',
    answer:
      'A MoveScreen oferece recursos de monitoramento e auditoria da exibição dos anúncios conforme as ferramentas disponíveis na plataforma. Anunciantes ativos também podem consultar o status da campanha através do link "Rastrear anúncio" no topo da página ou diretamente com nossa equipe de atendimento.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (idx: number) => {
    const next = openIndex === idx ? null : idx;
    setOpenIndex(next);
    if (next !== null) {
      trackEvent('expand_faq', { question: FAQS[idx].question });
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/40 px-3.5 py-1 text-xs font-semibold text-blue-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Informações claras sobre o funcionamento, regras de preço e veiculação na MoveScreen.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-[#0a1120] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-slate-850">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra help callout */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-[#0b1426] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="text-sm font-bold text-white">Tem alguma dúvida específica sobre o seu negócio?</h3>
            <p className="mt-1 text-xs text-slate-300">
              Nossa equipe comercial está à disposição no WhatsApp oficial para orientar sua empresa.
            </p>
          </div>
          <a
            href={buildCommercialWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp_comercial', { source: 'faq_callout' })}
            className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-colors shadow-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Falar no WhatsApp Comercial</span>
          </a>
        </div>
      </div>
    </section>
  );
};
