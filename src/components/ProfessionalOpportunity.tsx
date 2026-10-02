import React from 'react';
import { TrendingUp, Users, DollarSign, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export const ProfessionalOpportunity: React.FC = () => {
  return (
    <section id="oportunidade" className="relative py-16 sm:py-24 bg-[#0a0e1a]/70 border-t border-slate-800/80 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <span>Mercado & Demanda</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance">
            UMA NOVA HABILIDADE PODE SE TRANSFORMAR EM UMA NOVA FONTE DE RENDA
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            A calvície e as falhas capilares afetam milhões de homens que buscam diariamente soluções estéticas reais, discretas e de resultado imediato.
          </p>
        </div>

        {/* 3 Pillars of Opportunity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#0c1322] border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Público Amplo e Constante
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Homens de diferentes idades procuram o procedimento para disfarçar entradas, cobrir a coroa (vértex), preencher cicatrizes cirúrgicas ou criar a linha frontal estilo raspado.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-blue-400 font-medium">
              Serviço com alta taxa de procura
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#0c1322] border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Alto Valor Percebido
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Por se tratar de um procedimento especializado que envolve restauração de autoestima, o cliente valoriza a habilidade do profissional que domina a naturalidade e a técnica correta.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-blue-400 font-medium">
              Procedimento de ticket diferenciado
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#0c1322] border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Equipamento Compacto
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Tudo o que você precisa cabe em uma maleta profissional: caneta dermógrafo, fonte reguladora, agulhas descartáveis e pigmentos de alta fixação.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-blue-400 font-medium">
              Liberdade e praticidade operacional
            </div>
          </div>
        </div>

        {/* Ethical disclaimer card */}
        <div className="mt-10 p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300 font-semibold">Compromisso com a Verdade:</strong> Os resultados profissionais dependem de dedicação, treino prático, fidelização de clientes e correta execução técnica. Este treinamento ensina o método e as competências para que você ofereça esse serviço com segurança técnica e estética.
          </p>
        </div>
      </div>
    </section>
  );
};
