import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, X } from 'lucide-react';
import { buildWhatsappLink } from '../config/whatsapp';

export const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Link do vídeo no Cloudinary
  const videoUrl = "https://res.cloudinary.com/dzw4kv0ue/video/upload/v1792503369/gemini_generated_video_b1de7e10_frptd5.mp4";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
      {/* Elementos de fundo e gradientes elétricos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Mídia DOOH em Carros de Aplicativo</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Sua marca na frente de <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">milhares de passageiros</span> todos os dias.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            Anúncios interativos em tablets de 10" instalados em veículos de aplicativo.
            Atenção exclusiva durante trajetos de 15 a 40 minutos.
          </p>

          {/* Botões de Ação Principais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA Principal -> Encaminha para IA */}
            <a
              href={buildWhatsappLink({ intent: 'diagnosis', useHumanTeam: false })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_35px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 text-lg"
            >
              Fazer Diagnóstico Grátis
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Atalho de Vídeo */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700/80 transition-all flex items-center justify-center gap-3 group text-lg cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              Ver Vídeo em Ação
            </button>
          </div>
        </div>
      </div>

      {/* Modal do Vídeo Demo */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Play className="w-4 h-4 text-cyan-400 fill-current" /> MoveScreen em Ação
              </h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                O seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};