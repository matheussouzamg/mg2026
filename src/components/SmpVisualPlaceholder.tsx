import React from 'react';
import { Sparkles, PenTool, CheckCircle2, ZoomIn } from 'lucide-react';

interface SmpVisualPlaceholderProps {
  type: 'hairline' | 'dermopen' | 'before_after' | 'crown' | 'expert' | 'clinic';
  title?: string;
  badge?: string;
  className?: string;
  showReplaceNotice?: boolean;
}

export const SmpVisualPlaceholder: React.FC<SmpVisualPlaceholderProps> = ({
  type,
  title,
  badge = 'Espaço para Foto Real',
  className = '',
  showReplaceNotice = true,
}) => {
  return (
    <div
      className={`relative w-full h-full min-h-[260px] overflow-hidden rounded-xl bg-gradient-to-br from-[#0c1322] via-[#090d17] to-[#05070b] border border-blue-900/30 flex flex-col items-center justify-center p-6 text-center select-none group ${className}`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      {/* Radial ambient glow */}
      <div className="absolute inset-0 bg-radial from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      {/* Visual representation based on type */}
      <div className="relative z-10 flex flex-col items-center max-w-xs transition-transform duration-300 group-hover:scale-[1.02]">
        {type === 'hairline' && (
          <div className="relative w-36 h-28 mb-4 flex items-center justify-center">
            {/* Hairline curved silhouette with micro-dots */}
            <svg viewBox="0 0 160 120" className="w-full h-full text-blue-500/80 drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]">
              {/* Head contour */}
              <path
                d="M 20 110 Q 20 30 80 20 Q 140 30 140 110"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Natural hairline curve */}
              <path
                d="M 35 75 Q 80 45 125 75"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
              {/* Scalp micro pigmentation dots */}
              {[
                [45, 68], [55, 62], [65, 57], [75, 54], [85, 54], [95, 57], [105, 62], [115, 68],
                [50, 75], [60, 70], [70, 66], [80, 64], [90, 66], [100, 70], [110, 75],
                [42, 60], [52, 53], [62, 48], [72, 45], [82, 45], [92, 48], [102, 53], [112, 60],
                [60, 42], [70, 39], [80, 38], [90, 39], [100, 42],
                [70, 33], [80, 31], [90, 33]
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i % 3 === 0 ? "1.8" : "1.3"}
                  className="fill-blue-400 animate-pulse"
                  style={{ animationDelay: `${(i * 70) % 1500}ms` }}
                />
              ))}
            </svg>
          </div>
        )}

        {type === 'dermopen' && (
          <div className="relative w-36 h-28 mb-4 flex items-center justify-center">
            <svg viewBox="0 0 140 120" className="w-full h-full text-blue-400">
              {/* Needle pen angle */}
              <defs>
                <linearGradient id="penGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>
              {/* Pen barrel */}
              <polygon points="40,20 60,10 110,80 90,90" fill="url(#penGrad)" stroke="#60a5fa" strokeWidth="1.5" />
              {/* Precision grip */}
              <rect x="70" y="55" width="25" height="15" transform="rotate(38 70 55)" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              {/* Micro needle tip */}
              <polygon points="110,80 125,100 122,102 107,82" fill="#e2e8f0" />
              {/* Micro pigment drop target */}
              <circle cx="126" cy="103" r="2.5" fill="#38bdf8" className="animate-ping" />
              {/* Precision guide lines */}
              <line x1="110" y1="112" x2="140" y2="112" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="126" y1="95" x2="126" y2="118" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>
        )}

        {type === 'before_after' && (
          <div className="relative w-44 h-24 mb-4 flex items-center justify-center gap-2">
            <div className="flex-1 h-full rounded bg-slate-900/90 border border-slate-700/60 p-2 flex flex-col justify-between">
              <span className="text-[10px] uppercase font-bold text-slate-400 text-left">Antes</span>
              <div className="h-10 border border-dashed border-slate-700 rounded flex items-center justify-center">
                <span className="text-[10px] text-slate-500">Área Calva</span>
              </div>
            </div>
            <div className="text-blue-500 font-bold text-xs">➔</div>
            <div className="flex-1 h-full rounded bg-blue-950/40 border border-blue-500/40 p-2 flex flex-col justify-between">
              <span className="text-[10px] uppercase font-bold text-blue-400 text-left">Depois</span>
              <div className="h-10 bg-blue-900/20 border border-blue-500/40 rounded flex flex-wrap gap-1 p-1 items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        )}

        {type === 'crown' && (
          <div className="relative w-36 h-28 mb-4 flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <circle cx="60" cy="60" r="46" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="60" cy="60" r="28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
              {/* Vertex spiraling micro-points */}
              {[...Array(24)].map((_, idx) => {
                const angle = idx * (Math.PI / 12);
                const r = 10 + (idx * 1.4);
                const cx = 60 + r * Math.cos(angle);
                const cy = 60 + r * Math.sin(angle);
                return (
                  <circle
                    key={idx}
                    cx={cx}
                    cy={cy}
                    r={idx % 2 === 0 ? "1.6" : "1.2"}
                    fill="#38bdf8"
                    opacity="0.9"
                  />
                );
              })}
            </svg>
          </div>
        )}

        {type === 'expert' && (
          <div className="relative w-28 h-28 mb-4 rounded-full bg-gradient-to-tr from-blue-950 via-slate-900 to-blue-900 border-2 border-blue-500/50 flex items-center justify-center shadow-xl">
            <div className="w-20 h-20 rounded-full border border-blue-400/30 flex items-center justify-center text-blue-300">
              <span className="font-bold text-2xl tracking-tighter">MS</span>
            </div>
            <div className="absolute -bottom-1 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Especialista
            </div>
          </div>
        )}

        {type === 'clinic' && (
          <div className="relative w-28 h-24 mb-4 flex items-center justify-center">
            <PenTool className="w-12 h-12 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </div>
        )}

        {title && (
          <h4 className="text-sm font-semibold text-slate-100 tracking-tight mb-1">
            {title}
          </h4>
        )}

        <div className="flex items-center gap-1.5 text-xs text-blue-400/90 font-medium bg-blue-950/60 px-3 py-1 rounded-md border border-blue-800/40 mt-1">
          <Sparkles className="w-3 h-3 shrink-0" />
          <span>{badge}</span>
        </div>

        {showReplaceNotice && (
          <p className="text-[11px] text-slate-400 mt-2 font-normal leading-relaxed">
            Foto do trabalho de Matheus Souza. Insira facilmente sua imagem no editor.
          </p>
        )}
      </div>

      <div className="absolute bottom-3 right-3 text-slate-500 group-hover:text-blue-400 transition-colors">
        <ZoomIn className="w-4 h-4" />
      </div>
    </div>
  );
};
