import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Sparkles, ImagePlus } from 'lucide-react';
import { ResultItem } from '../types';
import { SmpVisualPlaceholder } from './SmpVisualPlaceholder';

interface ResultsCarouselProps {
  items: ResultItem[];
  onOpenLightbox: (item: ResultItem) => void;
  onOpenCustomizer?: () => void;
}

export const ResultsCarousel: React.FC<ResultsCarouselProps> = ({
  items,
  onOpenLightbox,
  onOpenCustomizer,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [extraItems, setExtraItems] = useState<ResultItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const allItems = [...items, ...extraItems];

  const handleAddPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newItems: ResultItem[] = Array.from(files).map((file, i) => ({
        id: `custom-res-${Date.now()}-${i}`,
        titulo: `Resultado Real ${allItems.length + i + 1}`,
        categoria: 'antes_depois',
        legenda: 'Foto real de procedimento/curso enviada pelo especialista.',
        imageUrl: URL.createObjectURL(file),
        detalhes: 'Procedimento prático em modelo real.'
      }));
      setExtraItems(prev => [...prev, ...newItems]);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? allItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === allItems.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section id="resultados" className="relative py-16 sm:py-24 bg-[#0a0e1a]/60 border-y border-slate-800/60 overflow-hidden">
      {/* Background glow hint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-900/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <span>Transformação e Naturalidade</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-display text-balance">
            RESULTADOS QUE FALAM POR SI
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Confira a qualidade visual do procedimento: desde reconstrução de hairline até densidade capilar completa realizada com caneta e técnica refinada.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {allItems.length === 0 ? (
            <div className="max-w-xl mx-auto rounded-3xl border-2 border-dashed border-blue-500/30 bg-slate-900/40 p-8 sm:p-12 text-center flex flex-col items-center justify-center">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleAddPhotos}
              />
              <div className="w-16 h-16 rounded-2xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                <ImagePlus className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Carrossel Pronto para Suas Fotos
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
                Os 5 exemplos anteriores foram removidos. Clique no botão abaixo para adicionar as fotos reais dos seus procedimentos diretamente do seu celular ou computador.
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <ImagePlus className="w-4 h-4" />
                <span>Adicionar Fotos ao Carrossel</span>
              </button>
            </div>
          ) : (
            <>
              {/* Controls: Left / Right arrows & Upload Button */}
              <div className="hidden sm:flex items-center absolute -top-16 right-0 gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleAddPhotos}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-950/70 hover:bg-blue-900/80 text-blue-300 hover:text-white border border-blue-700/60 text-xs font-semibold transition-all cursor-pointer mr-1 shadow-sm"
                  title="Carregar fotos do WhatsApp ou galeria"
                >
                  <ImagePlus className="w-3.5 h-3.5" />
                  <span>Adicionar fotos ({allItems.length})</span>
                </button>
                <button
                  onClick={prevSlide}
                  aria-label="Slide anterior"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all focus:outline-none"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Próximo slide"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all focus:outline-none"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slides Viewport */}
              <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Desktop multi-card grid / view */}
                <div
                  className="flex transition-transform duration-500 ease-out gap-6"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
              {allItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div
                    onClick={() => onOpenLightbox(item)}
                    className="group relative h-full bg-[#0c1322] border border-slate-800/80 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-950/50 cursor-pointer flex flex-col"
                  >
                    {/* Media Slot */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
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
                            idx % 3 === 0
                              ? 'hairline'
                              : idx % 3 === 1
                              ? 'before_after'
                              : 'crown'
                          }
                          title={item.titulo}
                          badge="Resultado Real"
                          showReplaceNotice={false}
                        />
                      )}

                      {/* Hover Overlay with Lightbox indicator */}
                      <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                        <Eye className="w-4 h-4 text-blue-300" />
                        <span>Clique para ampliar</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-blue-400 font-semibold tracking-wider uppercase mb-1.5">
                          <span>Microcapilar Premium</span>
                          <span className="text-slate-500 font-mono">0{idx + 1}</span>
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {item.titulo}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {item.legenda}
                        </p>
                      </div>

                      {item.detalhes && (
                        <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                          <span>{item.detalhes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators & Mobile Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="sm:hidden p-2 text-slate-400 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {allItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              aria-label="Próximo"
              className="sm:hidden p-2 text-slate-400 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Upload Button */}
          <div className="mt-4 flex sm:hidden justify-center">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-950/80 text-blue-300 border border-blue-700/60 text-xs font-semibold shadow-sm"
            >
              <ImagePlus className="w-3.5 h-3.5" />
              <span>Adicionar fotos do WhatsApp ({allItems.length})</span>
            </button>
          </div>
            </>
          )}

          {/* Quick Notice for User on replacing photos */}
          {onOpenCustomizer && (
            <div className="mt-6 text-center">
              <button
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 transition-colors"
              >
                <ImagePlus className="w-3.5 h-3.5" />
                <span>Personalizar detalhes da página no painel</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
