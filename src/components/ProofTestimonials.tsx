import React from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';

export const ProofTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marcos Vinícius',
      role: 'Sócio-fundador',
      company: 'Garagem 011 Barbearia',
      segment: 'Estética Masculina',
      quote:
        'Colocamos nossa campanha com voucher de boas-vindas em 10 carros que rodam nos bairros nobres da região. No primeiro mês, 42 novos clientes agendaram corte e barba mencionando que viram o anúncio no Uber a caminho do trabalho.',
      metric: '+42 novos agendamentos no 1º mês',
      initials: 'MV',
    },
    {
      name: 'Dra. Camila Rodrigues',
      role: 'Diretora Clínica',
      company: 'Instituto OdontoVip',
      segment: 'Odontologia Estética',
      quote:
        'O passageiro de aplicativo tem o perfil exato dos nossos pacientes de alinhadores invisíveis. O QR Code grande na tela horizontal de 10 polegadas facilita muito escanear durante o trajeto. Tivemos um retorno de 5x sobre o valor investido.',
      metric: '5x de Retorno sobre Investimento',
      initials: 'CR',
    },
    {
      name: 'André Takahashi',
      role: 'Proprietário',
      company: 'Artisan Burger & Grill',
      segment: 'Gastronomia & Delivery',
      quote:
        'Nas noites de quinta a domingo, quem está voltando da balada ou do trabalho no banco de trás do Uber está com fome. Nosso anúncio com oferta de chopp cortesia aumentou em 35% os pedidos diretos sem pagar comissão para os apps de entrega.',
      metric: '+35% pedidos diretos no WhatsApp',
      initials: 'AT',
    },
    {
      name: 'Rodrigo Mello',
      role: 'Head de Expansão',
      company: 'FitZone Training Studio',
      segment: 'Academia & Saúde',
      quote:
        'Já tínhamos tentado panfletagem e outdoors de rua com retorno quase nulo. Na MoveScreen, o tempo de atenção do passageiro é real: a pessoa fica 20 minutos olhando a tela. O custo por lead qualificado foi 60% menor que na internet.',
      metric: 'Custo por Lead 60% menor',
      initials: 'RM',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#060B18] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
            <span>Resultados Comprovados</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Casos Reais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Quem anuncia na MoveScreen colhe resultados no caixa
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Veja como empresários e gestores de diferentes setores utilizam a mídia no banco traseiro para atrair novos clientes de forma previsível.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                {/* Metric Badge & Stars */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metric}</span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {item.name}
                  </h4>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <span>{item.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#00D2FF] font-medium">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
