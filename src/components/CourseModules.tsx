import React from 'react';
import {
  BookOpen,
  PenTool,
  UserCheck,
  Palette,
  Target,
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  LucideIcon
} from 'lucide-react';
import { CourseModule } from '../types';

interface CourseModulesProps {
  modules: CourseModule[];
}

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  PenTool,
  UserCheck,
  Palette,
  Target,
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
};

export const CourseModules: React.FC<CourseModulesProps> = ({ modules }) => {
  return (
    <section id="modulos" className="relative py-16 sm:py-24 bg-[#0a0e1a]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <span>Conteúdo Programático</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance">
            O QUE VOCÊ VAI APRENDER
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Uma formação progressiva, pensada para conduzir você desde a empunhadura da caneta até o atendimento comercial e execução de procedimentos perfeitos.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, index) => {
            const IconComponent = iconMap[mod.iconName] || BookOpen;

            return (
              <div
                key={mod.numero}
                className="group relative bg-[#0c1322] border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/40 flex flex-col justify-between"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-full blur-2xl transition-all -z-10" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-400 font-mono tracking-wider">
                      {mod.numero}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                    {mod.titulo}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {mod.descricao}
                  </p>
                </div>

                {/* Card Footer */}
                {mod.duracaoAprox && (
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{mod.duracaoAprox}</span>
                    </span>
                    <span className="text-slate-500 group-hover:text-blue-400 transition-colors">
                      Método Prático
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-blue-950/40 border border-blue-900/40 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Aulas 100% práticas:</strong> Cada módulo conta com demonstrações gravadas em alta definição para você observar a inclinação da caneta, o ritmo das batidas e a profundidade correta na pele.
          </p>
        </div>
      </div>
    </section>
  );
};
