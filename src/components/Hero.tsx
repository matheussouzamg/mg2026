import React from 'react';
import { ArrowRight, ShieldCheck, PlayCircle, Award, CheckCircle } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-700/15 via-blue-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] pointer-events-none -z-10" />

      {/* Subtle geometric grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed category kicker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 tracking-wider uppercase mb-6 bg-blue-950/40 border border-blue-800/50 px-3.5 py-1.5 rounded-full">
          <span>Estética Masculina de Alta Precisão</span>
          <span className="text-slate-600">·</span>
          <span>Treinamento Profissional</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto font-display text-balance uppercase drop-shadow-sm">
          COMO FIZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-blue-400 font-extrabold tracking-normal inline-block whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>R$&nbsp;200 MIL</span> EM APENAS 6 MESES COM UMA SIMPLES CANETA
        </h1>

        {/* Subheadline */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed text-balance">
          Aprenda a técnica de <strong className="text-white font-semibold">Micropigmentação Capilar</strong> e descubra como transformar uma simples caneta em uma habilidade profissional capaz de gerar renda através de um serviço de alta procura.
        </p>

        {/* CTA Decision Block */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center">
          <a
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              onCtaClick();
            }}
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-400 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] cursor-pointer"
          >
            <span className="tracking-wide">QUERO APRENDER MICROCAPILAR</span>
            <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Micro Information */}
          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <span>Treinamento completo</span>
            <span className="text-slate-600">·</span>
            <span>Acesso online</span>
            <span className="text-slate-600">·</span>
            <span>Método passo a passo</span>
          </p>
        </div>

        {/* Secondary trust badges below hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
            <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Do Zero à Prática</div>
              <div className="text-sm font-semibold text-slate-200">Passo a Passo</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
            <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Mercado em Alta</div>
              <div className="text-sm font-semibold text-slate-200">Alta Procura</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
            <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Técnica Fio a Fio</div>
              <div className="text-sm font-semibold text-slate-200">Linha Frontal Real</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/30 border border-slate-800/40">
            <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Estética Masculina</div>
              <div className="text-sm font-semibold text-slate-200">Alto Padrão</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
