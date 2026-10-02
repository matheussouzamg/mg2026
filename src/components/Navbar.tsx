import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sliders, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCustomizer: () => void;
  checkoutUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomizer, checkoutUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Vídeo VSL', href: '#video-vsl' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Quem é Matheus', href: '#quem-e-matheus' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'Oportunidade', href: '#oportunidade' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Matheus Souza - Micropigmentação Capilar"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center font-display font-extrabold text-sm text-white shadow-sm border border-blue-400/30">
              MS
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-display group-hover:text-blue-400 transition-colors whitespace-nowrap">
              MATHEUS SOUZA
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Quick customization helper */}
            <button
              onClick={onOpenCustomizer}
              title="Personalizar links, preços, vídeos e contatos"
              className="p-2 text-xs text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors flex items-center gap-1.5 focus:outline-none"
              aria-label="Abrir painel de personalização"
            >
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Editar Dados</span>
            </button>

            <a
              href="#oferta"
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all shadow-md shadow-blue-900/30 hover:shadow-blue-600/30 whitespace-nowrap flex items-center gap-1"
            >
              <span>Garantir Vaga</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Alternar menu mobile"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e1a] border-b border-slate-800 px-6 py-4 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-200 hover:text-blue-400 border-b border-slate-800/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg"
            >
              QUERO APRENDER MICROCAPILAR
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
