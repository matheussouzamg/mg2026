import React from 'react';
import { Instagram, MessageCircle, Shield } from 'lucide-react';
import { SiteConfig } from '../types';

interface FooterProps {
  config: SiteConfig;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();
  const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber || '5511999999999'}?text=${encodeURIComponent(
    config.whatsappMessage
  )}`;

  return (
    <footer className="relative bg-[#05070c] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center font-display font-extrabold text-sm text-white border border-blue-400/30">
                MS
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                {config.nome.toUpperCase()}
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm max-w-sm leading-relaxed">
              Curso de Micropigmentação Capilar. Formação técnica voltada à execução prática, biossegurança e procedimentos de alto padrão na estética masculina.
            </p>
          </div>

          {/* Contact & Social Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Canais Oficiais
            </h4>
            <div className="space-y-2">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: {config.instagram}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp de Atendimento</span>
              </a>
            </div>
          </div>

          {/* Legal and compliance (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Informações Legais
            </h4>
            <div className="space-y-2">
              <div>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Termos de Uso
                </button>
              </div>
              <div>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                7 Dias de Garantia Incondicional
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-center sm:text-left">
          <p>© {currentYear} {config.nome}. Todos os direitos reservados.</p>
          <p className="text-[11px] text-slate-400">
            Curso de Micropigmentação Capilar · Método Passo a Passo
          </p>
        </div>
      </div>
    </footer>
  );
};
