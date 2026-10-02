import React from 'react';
import { CheckCircle2, ShieldCheck, Lock, CreditCard, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { SiteConfig } from '../types';

interface OfferSectionProps {
  config: SiteConfig;
  onOpenCustomizer?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ config, onOpenCustomizer }) => {
  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!config.checkoutUrl || config.checkoutUrl === '#oferta' || config.checkoutUrl === '#') {
      e.preventDefault();
      if (onOpenCustomizer) {
        onOpenCustomizer();
      } else {
        alert('Por favor, configure o link do seu checkout nas configurações.');
      }
    }
  };

  const inclusions = [
    { title: 'Curso Completo de Micropigmentação Capilar', desc: 'Acesso a todos os 10 módulos do método.' },
    { title: 'Aulas Práticas Passo a Passo', desc: 'Filmadas em detalhes com foco na empunhadura e execução.' },
    { title: 'Acesso Online Flexível', desc: 'Estude pelo computador, tablet ou celular onde quiser.' },
    { title: 'Conteúdo 100% Focado na Execução', desc: 'Direto ao ponto, sem enrolação ou teorias desnecessárias.' },
    { title: 'Lista de Materiais e Equipamentos', desc: 'Guia completo de dermógrafos, agulhas e pigmentos.' },
    { title: 'Canal de Suporte para Dúvidas', desc: 'Acompanhamento para tirar suas dúvidas durante os estudos.' },
  ];

  return (
    <section id="oferta" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-blue-700/20 via-sky-500/15 to-blue-800/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 bg-blue-950/60 border border-blue-800/50 px-3.5 py-1.5 rounded-full">
            <Zap className="w-3.5 h-3.5" />
            <span>Condição Exclusiva de Acesso</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance">
            COMECE AGORA A DOMINAR A MICROCAPILAR
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Tenha acesso imediato a todo o método estruturado por Matheus Souza e dê o primeiro passo para dominar essa técnica profissional.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="relative group max-w-4xl mx-auto">
          {/* Card Glow Outline */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />

          <div className="relative bg-[#0b101d] border border-blue-500/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: What's included (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  Tudo o que está incluso no seu acesso:
                </div>

                <div className="space-y-3.5 pt-2">
                  {inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white leading-tight">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Secure payment icons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                  <span className="text-slate-700">·</span>
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                    <span>Acesso Imediato</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & CTA (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#0f172a] to-[#0a0f1e] p-6 sm:p-8 rounded-2xl border border-blue-500/30 text-center flex flex-col justify-between shadow-xl">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    Valor Original
                  </div>
                  <div className="text-sm sm:text-base text-slate-500 line-through font-mono mt-0.5">
                    DE {config.precoOriginal}
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
                      POR APENAS
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-sky-300" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                      {config.precoParcelado}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      ou à vista por {config.precoOferta}
                    </div>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="mt-8 space-y-3">
                  <a
                    href={config.checkoutUrl}
                    onClick={handleCheckout}
                    target={config.checkoutUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-400 rounded-xl transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] cursor-pointer group"
                  >
                    <span>QUERO COMEÇAR AGORA</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Microcopy below CTA */}
                  <p className="text-[11px] text-slate-400 font-medium">
                    Acesso imediato enviado no seu e-mail
                  </p>

                  {/* Quick Notice if placeholder link */}
                  {(!config.checkoutUrl || config.checkoutUrl === '#oferta') && onOpenCustomizer && (
                    <button
                      onClick={onOpenCustomizer}
                      className="text-[10px] text-blue-400 hover:underline pt-1 block mx-auto cursor-pointer"
                    >
                      (Configurar seu link de checkout)
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 11: Garantia */}
        <div className="mt-12 max-w-2xl mx-auto p-6 rounded-2xl bg-[#0c1322] border border-blue-900/40 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-blue-950/80 border border-blue-600/40 flex items-center justify-center text-blue-400 shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight uppercase">
              {config.garantiaDias} DIAS DE GARANTIA INCONDICIONAL
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Você tem até {config.garantiaDias} dias para acessar as aulas, analisar o método e testar o conteúdo. Se por qualquer motivo sentir que o treinamento não é para você, basta solicitar o reembolso na plataforma e 100% do seu dinheiro será devolvido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
