import React, { useState } from 'react';
import { Instagram, ArrowRight, CheckCircle2, Award, Sparkles, User, ExternalLink } from 'lucide-react';
import { SmpVisualPlaceholder } from './SmpVisualPlaceholder';
import defaultExpertPhoto from '../assets/images/regenerated_image_1790668243713.png';

interface AboutExpertProps {
  nome: string;
  instagram: string;
  instagramUrl: string;
  photoUrl?: string;
  bio: string;
  onCtaClick: () => void;
  onOpenCustomizer?: () => void;
}

export const AboutExpert: React.FC<AboutExpertProps> = ({
  nome,
  instagram,
  instagramUrl,
  photoUrl,
  bio,
  onCtaClick,
  onOpenCustomizer,
}) => {
  const [imageError, setImageError] = useState(false);
  const activePhoto = (!imageError && photoUrl) ? photoUrl : defaultExpertPhoto;

  return (
    <section id="quem-e-matheus" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Container Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 to-sky-400/20 rounded-3xl blur-xl opacity-60" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-[0_10px_40px_rgba(0,0,0,0.7)] group">
                {activePhoto ? (
                  <div className="relative overflow-hidden">
                    <img
                      src={activePhoto}
                      alt={nome}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-auto aspect-[2/3] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    {/* Subtle gradient at base for legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="relative aspect-[2/3] w-full bg-gradient-to-b from-[#0c1424] via-[#090d18] to-[#05070c] flex flex-col items-center justify-center p-8 text-center">
                    <SmpVisualPlaceholder
                      type="expert"
                      badge="Foto Profissional"
                      title={nome}
                      showReplaceNotice={false}
                    />

                    <div className="mt-4 px-4 py-2 rounded-lg bg-blue-950/40 border border-blue-900/60 text-xs text-slate-300">
                      <span>Espaço reservado para sua foto oficial</span>
                    </div>

                    {onOpenCustomizer && (
                      <button
                        onClick={onOpenCustomizer}
                        className="mt-3 text-[11px] text-blue-400 hover:text-blue-300 underline cursor-pointer"
                      >
                        Carregar foto agora
                      </button>
                    )}
                  </div>
                )}

                {/* Subtitle tag overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 pointer-events-none">
                  <div className="text-white font-extrabold text-lg sm:text-xl font-display tracking-tight drop-shadow-md">{nome}</div>
                  <div className="text-xs sm:text-sm text-sky-400 font-semibold tracking-wide flex items-center gap-1.5 drop-shadow">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Especialista em Micropigmentação Capilar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase bg-blue-950/40 border border-blue-800/40 px-3.5 py-1.5 rounded-full">
              <User className="w-3.5 h-3.5" />
              <span>Quem é o Especialista</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance uppercase">
              {nome}
            </h2>

            {/* Core Mission Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900/60 border-l-4 border-blue-500 border-y border-r border-slate-800/60">
              <p className="text-lg sm:text-xl text-slate-100 font-medium italic leading-relaxed">
                "{bio}"
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              A Micropigmentação Capilar é um dos procedimentos mais transformadores da estética masculina moderna. Não se trata apenas de pigmentar a pele, mas de reconstruir a simetria facial, devolver a linha frontal natural e restaurar a autoestima de quem sofre com calvície e falhas.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              Neste treinamento, Matheus sintetizou todo o processo de execução em um método claro, sem enrolação e focado na prática: desde a ergonomia e profundidade da agulha até a montagem da linha frontal degradê e o fechamento de procedimentos de alto padrão.
            </p>

            {/* Key commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Método prático e estruturado</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Foco total na execução real</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Zero promessas irrealistas</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Acompanhamento passo a passo</span>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#oferta"
                onClick={(e) => {
                  e.preventDefault();
                  onCtaClick();
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-900/30 hover:shadow-blue-600/30 cursor-pointer"
              >
                <span>QUERO APRENDER COM MATHEUS</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>CONHEÇA MEU INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
