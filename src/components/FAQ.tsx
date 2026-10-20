import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: 'Como os anúncios são veiculados nos tablets dos carros de aplicativo?',
      a: 'Os tablets de 10 polegadas são fixados de forma segura e elegante no suporte do encosto de cabeça do passageiro. Os anúncios rodam em loop contínuo e inteligente (em vídeo de 15 segundos ou imagem em alta definição), intercalados com conteúdos úteis como previsão do tempo e curiosidades da cidade, mantendo os olhos do passageiro 100% atentos.',
    },
    {
      q: 'Eu não tenho vídeo nem arte pronta. A MoveScreen ajuda a criar?',
      a: 'Sim! Todos os nossos planos incluem o suporte gratuito da nossa equipe de design para criar ou adaptar o seu criativo em alta definição, já com a diagramação correta, textos chamativos de alta conversão e QR Code rastreável para seu negócio.',
    },
    {
      q: 'Como o passageiro entra em contato com o meu negócio pelo tablet?',
      a: 'De duas formas simples e imediatas: 1) Apontando a câmera do celular para o QR Code de alta visibilidade que fica na lateral da tela; 2) Tocando na tela do tablet, que pode exibir um número de WhatsApp, link do cardápio ou endereço no Google Maps para o passageiro salvar no celular.',
    },
    {
      q: 'Como sei quantas pessoas realmente viram meu anúncio?',
      a: 'Nosso software de gestão DOOH registra em tempo real cada reprodução, tempo de tela e geolocalização dos veículos ativos. Você recebe relatórios periódicos com métricas claras de exibições, estimativa de passageiros impactados e acessos gerados pelo seu QR Code exclusivo.',
    },
    {
      q: 'Posso escolher bairros e regiões estratégicas para minha campanha?',
      a: 'Com certeza! Mapeamos as rotas da nossa frota de motoristas parceiros para priorizar os carros que circulam com maior intensidade nas áreas de interesse do seu público-alvo (bairros residenciais, polos comerciais, centros gastronômicos ou proximidades do seu estabelecimento).',
    },
    {
      q: 'Qual é o prazo para minha campanha entrar no ar após a contratação?',
      a: 'O processo é extremamente ágil. Assim que o criativo é aprovado por você (geralmente em até 24h), nossa central faz o envio digital do anúncio para a frota de tablets via nuvem e seu anúncio já começa a rodar em até 48 horas úteis.',
    },
    {
      q: 'Existe contrato de fidelidade abusivo?',
      a: 'Não trabalhamos com pegadinhas ou amarras contratuais. Nossos planos são mensais e flexíveis, porque confiamos na renovação orgânica baseada no retorno que você terá em novos clientes.',
    },
  ];

  const whatsAppFaqLink = buildWhatsAppLink({
    intent: 'geral',
    customDetails: 'Origem: FAQ / Dúvida Específica',
  });

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#060B18] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Tire todas as suas dúvidas sobre a MoveScreen
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Entenda como funciona nossa tecnologia, prazos, relatórios e suporte antes de colocar sua empresa nas telas.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00D2FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick FAQ Support CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-sm text-slate-300 mb-3">
            Ficou com alguma dúvida específica sobre o seu tipo de empresa?
          </p>
          <a
            href={whatsAppFaqLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00D2FF] hover:text-cyan-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-[#00D2FF]" />
            <span>Falar diretamente com um consultor pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
