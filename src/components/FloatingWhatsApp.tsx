import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsappNumber,
  whatsappMessage,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Clean phone number (remove non-numeric chars)
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber || '5511999999999'}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Mini Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-slate-900/95 border border-emerald-500/40 text-slate-100 px-3.5 py-2 rounded-xl text-xs shadow-xl backdrop-blur-md flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="leading-snug">
            Dúvidas sobre o curso? <strong className="text-emerald-400">Fale comigo no WhatsApp</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp sobre o curso"
        className="group relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-white shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:shadow-[0_4px_35px_rgba(16,185,129,0.7)] hover:scale-105 transition-all duration-300 focus:outline-none"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-50 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow" />
      </a>
    </div>
  );
};
