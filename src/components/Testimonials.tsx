import React from 'react';
import { Quote, User, MapPin, Sparkles, Edit3 } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  onOpenCustomizer?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  onOpenCustomizer,
}) => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0a0e1a]/80 border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-blue-900/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <span>Experiência dos Alunos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance">
            QUEM APRENDEU, CONHECE
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Área reservada para os relatos e evolução dos alunos que vivenciaram o método prático de micropigmentação capilar.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="relative bg-[#0c1322] border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Quote Mark */}
              <div className="text-blue-500/30 mb-4">
                <Quote className="w-8 h-8 rotate-180" />
              </div>

              {/* Quote Content */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                {item.depoimento}
              </p>

              {/* Author & Profile Meta */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {item.avatarUrl ? (
                    <img
                      src={item.avatarUrl}
                      alt={item.nome}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-blue-500/40"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 font-bold text-xs">
                      <User className="w-5 h-5" />
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {item.nome}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      <span>{item.cidade}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Badge */}
              <div className="mt-4 p-2.5 rounded-lg bg-blue-950/30 border border-blue-900/30 text-[11px] text-blue-300 font-medium text-center">
                ✓ {item.resultado}
              </div>

              {/* Placeholder Notice */}
              {item.isPlaceholder && (
                <div className="mt-3 text-center">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                    (Espaço reservado para seu aluno real)
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note on genuine feedback */}
        <div className="mt-12 text-center">
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 bg-blue-950/40 border border-blue-900/50 px-4 py-2 rounded-xl transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Personalizar ou adicionar depoimentos de alunos reais</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
