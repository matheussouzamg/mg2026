import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#07090e] to-[#04060a]">
      {/* Background glow & accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-sky-400/10 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sua Próxima Decisão</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance leading-tight">
          VOCÊ PODE CONTINUAR APENAS ASSISTINDO OU PODE COMEÇAR A APRENDER.
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          Tenha acesso ao treinamento e comece sua jornada na Micropigmentação Capilar.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              onCtaClick();
            }}
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-400 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] cursor-pointer"
          >
            <span>QUERO APRENDER MICROCAPILAR</span>
            <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Quick guarantees */}
          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Acesso imediato</span>
            </span>
            <span className="text-slate-700">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Garantia de 7 dias</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
