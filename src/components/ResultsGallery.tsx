import React, { useState } from 'react';
import { Sparkles, Eye, Filter, ImagePlus } from 'lucide-react';
import { ResultItem } from '../types';
import { SmpVisualPlaceholder } from './SmpVisualPlaceholder';

interface ResultsGalleryProps {
  items: ResultItem[];
  onOpenLightbox: (item: ResultItem) => void;
  onOpenCustomizer?: () => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({
  items,
  onOpenLightbox,
  onOpenCustomizer,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  if (!items || items.length === 0) {
    return null;
  }

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'antes_depois', label: 'Antes e Depois' },
    { id: 'linha_frontal', label: 'Linha Frontal' },
    { id: 'procedimento', label: 'Procedimentos' },
    { id: 'bastidores', label: 'Bastidores' },
    { id: 'clientes', label: 'Clientes' },
  ];

  const filteredItems =
    selectedCategory === 'todos'
      ? items
      : items.filter((item) => item.categoria === selectedCategory);

  return (
    <section className="relative py-16 sm:py-24 bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <span>Portfólio & Excelência</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase text-balance">
            GALERIA DE PROCEDIMENTOS
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Veja a variedade de aplicações da micropigmentação capilar: desde cobertura de entradas até camuflagem total de calvície e detalhes de precisão.
          </p>
        </div>

        {/* Category Tabs (Segmented Control) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative bg-[#0c1322] border border-slate-800/80 hover:border-blue-500/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/40 flex flex-col"
            >
              {/* Media Slot */}
              <div className="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.titulo}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <SmpVisualPlaceholder
                    type={
                      item.categoria === 'linha_frontal'
                        ? 'hairline'
                        : item.categoria === 'bastidores'
                        ? 'dermopen'
                        : 'before_after'
                    }
                    title={item.titulo}
                    badge="Galeria Clínica"
                    showReplaceNotice={false}
                  />
                )}

                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-blue-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                  <Eye className="w-4 h-4 text-blue-300" />
                  <span>Ver Detalhes</span>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    {item.categoria.replace('_', ' ')}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.legenda}
                  </p>
                </div>

                {item.detalhes && (
                  <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                    {item.detalhes}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Customizer trigger for photos */}
        {onOpenCustomizer && (
          <div className="mt-10 text-center">
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-blue-300 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-xl transition-colors"
            >
              <ImagePlus className="w-4 h-4 text-blue-400" />
              <span>Deseja adicionar ou trocar fotos da galeria? Clique para editar</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
