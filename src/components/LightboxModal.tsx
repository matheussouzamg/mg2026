import React, { useEffect } from 'react';
import { X, ZoomIn, Sparkles } from 'lucide-react';
import { ResultItem } from '../types';
import { SmpVisualPlaceholder } from './SmpVisualPlaceholder';

interface LightboxModalProps {
  item: ResultItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0c1322] border border-blue-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top close bar */}
        <div className="p-4 px-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              {item.categoria.replace('_', ' ')}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300 font-medium">Visualização em Alta Resolução</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media area */}
        <div className="relative w-full aspect-video sm:aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.titulo}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <div className="w-full h-full p-8 flex items-center justify-center">
              <SmpVisualPlaceholder
                type={
                  item.categoria === 'linha_frontal'
                    ? 'hairline'
                    : item.categoria === 'bastidores'
                    ? 'dermopen'
                    : 'before_after'
                }
                title={item.titulo}
                badge="Ampliação Técnica"
                showReplaceNotice={false}
                className="max-w-xl h-full"
              />
            </div>
          )}
        </div>

        {/* Caption & details */}
        <div className="p-6 bg-[#0a0f1d] border-t border-slate-800/80">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {item.titulo}
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {item.legenda}
          </p>
          {item.detalhes && (
            <div className="mt-3 inline-block px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-xs text-blue-300 font-medium">
              {item.detalhes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
