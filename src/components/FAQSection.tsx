import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-[#0a0e1a]/70 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal">
            Respostas diretas e transparentes sobre o acesso, a metodologia e o suporte do treinamento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0c1322] border border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.pergunta}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-white transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-blue-600/30 text-blue-400 border-blue-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 pt-3 animate-in fade-in duration-200">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
