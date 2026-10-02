import React, { useState } from 'react';
import { X, Save, RotateCcw, Copy, Check, Sliders, ExternalLink, Video, CreditCard, Phone, User, Image, Shield } from 'lucide-react';
import { SiteConfig } from '../types';
import { initialSiteConfig } from '../config/siteData';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSaveConfig: (newConfig: SiteConfig) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<SiteConfig>(config);
  const [copied, setCopied] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'geral' | 'links' | 'preco' | 'midia'>('geral');

  if (!isOpen) return null;

  const handleChange = (field: keyof SiteConfig, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    if (confirm('Deseja restaurar as configurações padrão da página?')) {
      setFormData(initialSiteConfig);
      onSaveConfig(initialSiteConfig);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-3xl w-full max-h-[92vh] flex flex-col bg-[#0b101e] border border-blue-500/40 rounded-3xl shadow-2xl overflow-hidden text-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Painel de Configuração Rápida
              </h3>
              <p className="text-xs text-slate-400">
                Altere links, preço, WhatsApp, vídeo e fotos da página em tempo real
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 gap-2 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('geral')}
            className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 px-3 cursor-pointer ${
              activeTab === 'geral'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Geral & Bio</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('links')}
            className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 px-3 cursor-pointer ${
              activeTab === 'links'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Checkout & Contatos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('preco')}
            className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 px-3 cursor-pointer ${
              activeTab === 'preco'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Valores & Garantia</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('midia')}
            className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 px-3 cursor-pointer ${
              activeTab === 'midia'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Vídeo VSL & Fotos</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1">
          {activeTab === 'geral' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nome do Especialista
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Usuário do Instagram
                </label>
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => handleChange('instagram', e.target.value)}
                  placeholder="@matheussouza.ofc"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Link Completo do Perfil do Instagram
                </label>
                <input
                  type="url"
                  value={formData.instagramUrl}
                  onChange={(e) => handleChange('instagramUrl', e.target.value)}
                  placeholder="https://www.instagram.com/matheussouza.ofc/"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Missão / Bio Base
                </label>
                <textarea
                  rows={3}
                  value={formData.expertBio}
                  onChange={(e) => handleChange('expertBio', e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                  required
                />
              </div>
            </div>
          )}

          {activeTab === 'links' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Link de Checkout (Hotmart, Kiwify, Eduzz, etc.)
                </label>
                <input
                  type="text"
                  value={formData.checkoutUrl}
                  onChange={(e) => handleChange('checkoutUrl', e.target.value)}
                  placeholder="https://pay.kiwify.com.br/... ou https://pay.hotmart.com/..."
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Todos os botões "QUERO APRENDER" e "COMEÇAR AGORA" redirecionarão para este link.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Número de WhatsApp (com DDI e DDD, apenas números)
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                  placeholder="5511999999999"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Mensagem Padrão do WhatsApp
                </label>
                <input
                  type="text"
                  value={formData.whatsappMessage}
                  onChange={(e) => handleChange('whatsappMessage', e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {activeTab === 'preco' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preço Original (Tachado)
                  </label>
                  <input
                    type="text"
                    value={formData.precoOriginal}
                    onChange={(e) => handleChange('precoOriginal', e.target.value)}
                    placeholder="R$ 997,00"
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preço à Vista da Oferta
                  </label>
                  <input
                    type="text"
                    value={formData.precoOferta}
                    onChange={(e) => handleChange('precoOferta', e.target.value)}
                    placeholder="R$ 297,00"
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Texto do Parcelamento
                </label>
                <input
                  type="text"
                  value={formData.precoParcelado}
                  onChange={(e) => handleChange('precoParcelado', e.target.value)}
                  placeholder="12x de R$ 29,70"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Dias de Garantia
                </label>
                <input
                  type="number"
                  min={0}
                  max={90}
                  value={formData.garantiaDias}
                  onChange={(e) => handleChange('garantiaDias', Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {activeTab === 'midia' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Link do Vídeo VSL (YouTube, Vimeo ou URL .mp4 direta)
                </label>
                <input
                  type="text"
                  value={formData.videoVslUrl}
                  onChange={(e) => handleChange('videoVslUrl', e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=... ou https://vimeo.com/... ou https://seusite.com/video.mp4"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Se deixado em branco, a página apresentará o player gráfico premium interativo.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Foto Profissional de Matheus Souza (URL da imagem)
                </label>
                <input
                  type="text"
                  value={formData.expertPhotoUrl}
                  onChange={(e) => handleChange('expertPhotoUrl', e.target.value)}
                  placeholder="https://.../sua-foto.jpg"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restaurar Padrões</span>
              </button>

              <button
                type="button"
                onClick={handleCopyCode}
                className="px-3 py-2 text-xs font-medium text-blue-400 hover:text-blue-300 bg-blue-950/40 hover:bg-blue-900/40 border border-blue-900/60 rounded-xl transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar JSON'}</span>
              </button>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Salvo com Sucesso!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Aplicar Alterações</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
