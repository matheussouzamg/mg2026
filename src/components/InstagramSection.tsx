import React from 'react';
import { Instagram, ExternalLink, Sparkles } from 'lucide-react';

interface InstagramSectionProps {
  instagram: string;
  instagramUrl: string;
  expertPhotoUrl?: string;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  instagram,
  instagramUrl,
  expertPhotoUrl,
}) => {
  return (
    <section className="relative py-14 sm:py-20 bg-[#080d19] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-blue-950/70 via-slate-900/90 to-blue-950/70 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-500 p-0.5 shadow-lg flex items-center justify-center shrink-0">
              {expertPhotoUrl ? (
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={expertPhotoUrl}
                    alt={instagram}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center border-2 border-[#080d19] shadow-md">
                <Instagram className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Acompanhe o Dia a Dia</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Siga {instagram} no Instagram
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Veja procedimentos reais, bastidores, dicas de execução e rotina profissional.
              </p>
            </div>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/90 hover:border-pink-500/50 rounded-xl transition-all shadow-md shrink-0"
          >
            <span>CONHEÇA MEU INSTAGRAM</span>
            <ExternalLink className="w-4 h-4 text-pink-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
