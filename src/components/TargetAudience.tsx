import React from 'react';
import { CheckCircle2, UserCheck, ShieldAlert, ArrowRight } from 'lucide-react';
import { audiencePoints } from '../config/siteData';

interface TargetAudienceProps {
  onCtaClick: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onCtaClick }) => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <span>Perfil do Aluno</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance">
            ESSE TREINAMENTO É PARA VOCÊ QUE...
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal">
            Seja você um profissional experiente ou alguém que está dando os primeiros passos no mercado da beleza.
          </p>
        </div>

        {/* 6 Target Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiencePoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[#0c1322] border border-slate-800/80 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/40 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed pt-1">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Important Reassurance Callout Box */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-blue-950/60 border border-blue-600/30 shadow-xl max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 mb-4 border border-blue-500/30">
            <UserCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
            Não é necessário começar sabendo tudo
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            O treinamento foi estruturado para apresentar o processo de forma organizada e prática, conduzindo você em cada fase da formação com calma e precisão.
          </p>

          <div className="mt-6">
            <a
              href="#oferta"
              onClick={(e) => {
                e.preventDefault();
                onCtaClick();
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-900/40 cursor-pointer"
            >
              <span>Sim, este curso é para mim</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
