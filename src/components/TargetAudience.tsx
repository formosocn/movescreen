import React from 'react';
import { Scissors, Utensils, Dumbbell, Stethoscope, Hotel, ShoppingBag, Briefcase, Sparkles } from 'lucide-react';

const SEGMENTS = [
  { icon: Scissors, label: 'Barbearias & Salões', desc: 'Atraia clientes para agendamentos imediatos' },
  { icon: Utensils, label: 'Restaurantes & Cafés', desc: 'Apresente pratos, cardápio e promoções via QR Code' },
  { icon: Dumbbell, label: 'Academias & Estúdios', desc: 'Divulgue planos, aulas experimentais e eventos' },
  { icon: Stethoscope, label: 'Clínicas & Consultórios', desc: 'Facilite contatos para consultas e tratamentos' },
  { icon: Hotel, label: 'Hotéis & Pousadas', desc: 'Conecte-se com passageiros em trânsito e turistas' },
  { icon: ShoppingBag, label: 'Comércio Local', desc: 'Destaque ofertas e localização da sua loja' },
  { icon: Briefcase, label: 'Prestadores de Serviços', desc: 'Gere contatos qualificados direto no WhatsApp' },
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="border-y border-slate-800/80 bg-slate-950/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Feito para quem move o comércio local</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
            Ideal para pequenos e médios negócios em crescimento
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Apresente sua empresa no momento em que passageiros da sua região estão em deslocamento.
          </p>
        </div>

        {/* Horizontal scrollable / grid badges */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SEGMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-xl border border-slate-800/90 bg-slate-900/40 p-4 transition-all duration-200 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-md hover:shadow-blue-900/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm text-white">{item.label}</span>
                </div>
                <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
          {/* Universal CTA box */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col justify-center items-center text-center rounded-xl border border-dashed border-blue-500/40 bg-blue-950/20 p-4">
            <span className="text-xs font-bold text-blue-300">Sua empresa aqui</span>
            <p className="text-[11px] text-slate-400 mt-1">
              Campanhas a partir de 10 segundos por veículo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
