import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { buildWhatsAppLink } from '../config/whatsapp';

export const LeadDiagnosisSection: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [segment, setSegment] = useState('Barbearia / Salão');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Por favor, informe seu nome.');
      return;
    }
    if (!businessName.trim()) {
      setError('Por favor, informe o nome da sua empresa.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setError('Por favor, digite um número de WhatsApp válido com DDD.');
      return;
    }

    // Build personalized WhatsApp message
    const customDetails = `Meu WhatsApp para retorno: ${phone}. Bairro/Cidade de interesse: ${city || 'Geral'}.`;
    const link = buildWhatsAppLink({
      intent: 'diagnostico',
      businessName,
      segment,
      city,
      customDetails,
    });

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(link, '_blank');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-[#091122]/80 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-700/80 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative ambient light */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left copy */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atendimento Consultivo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Receba um plano de veiculação para seu negócio
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nossos especialistas analisam as rotas e o volume de corridas da sua região para montar a estratégia com maior taxa de retorno.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem compromisso ou taxa de adesão</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mapeamento de rotas e bairros mais estratégicos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Orientação na criação de ofertas de alta conversão</span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7 bg-slate-950/90 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white mb-2">
                Preencha para iniciar no WhatsApp:
              </h4>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-white text-base">
                    Solicitação Encaminhada!
                  </h5>
                  <p className="text-xs text-slate-300">
                    A conversa no WhatsApp foi aberta para você falar diretamente com nosso especialista.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-cyan-400 underline hover:text-cyan-300 pt-2"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-xs font-semibold text-slate-300 mb-1"
                      >
                        Seu Nome: *
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Eduardo"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-business"
                        className="block text-xs font-semibold text-slate-300 mb-1"
                      >
                        Nome da Empresa: *
                      </label>
                      <input
                        id="lead-business"
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Ex: Dom Barbeiro"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="lead-segment"
                        className="block text-xs font-semibold text-slate-300 mb-1"
                      >
                        Ramo de Atuação:
                      </label>
                      <select
                        id="lead-segment"
                        value={segment}
                        onChange={(e) => setSegment(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                      >
                        <option value="Barbearia / Salão">Barbearia / Salão de Beleza</option>
                        <option value="Restaurante / Lanchonete">Restaurante / Hamburgueria / Café</option>
                        <option value="Clínica / Consultório">Clínica Médica / Odonto / Estética</option>
                        <option value="Academia / Artes Marciais">Academia / Crossfit / Lutas</option>
                        <option value="Hotel / Pousada">Hotel / Pousada / Turismo</option>
                        <option value="Comércio Local / Varejo">Comércio Local / Loja Física</option>
                        <option value="Prestador de Serviços">Prestador de Serviços / Outros</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="lead-phone"
                        className="block text-xs font-semibold text-slate-300 mb-1"
                      >
                        Seu WhatsApp com DDD: *
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lead-city"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Bairro ou Cidade de Interesse:
                    </label>
                    <input
                      id="lead-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Pinheiros, São Paulo - SP"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Receber Proposta Rápida no WhatsApp</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Seus dados são 100% confidenciais. Zero spam.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
