import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Maximize, Edit3, Sparkles, Upload, Video as VideoIcon, Check, RefreshCw } from 'lucide-react';
import defaultPoster from '../assets/images/vsl_video_poster_1790671127125.jpg';

interface VideoVSLProps {
  videoUrl?: string;
  posterUrl?: string;
  onEditVideo?: () => void;
  onCtaClick?: () => void;
}

export const VideoVSL: React.FC<VideoVSLProps> = ({
  videoUrl,
  posterUrl,
  onEditVideo,
  onCtaClick,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const [aspectFormat, setAspectFormat] = useState<'vertical' | 'landscape'>('vertical');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideoUrl = localVideoUrl || videoUrl;
  const activePoster = posterUrl || defaultPoster;

  // Helper to detect embed types
  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=') || url.includes('youtu.be/')) {
      const id = url.includes('v=')
        ? url.split('v=')[1]?.split('&')[0]
        : url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes('youtube.com/shorts/')) {
      const id = url.split('shorts/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes('vimeo.com/')) {
      const id = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    if (url.includes('drive.google.com/file/d/')) {
      const id = url.split('/d/')[1]?.split('/')[0];
      return `https://drive.google.com/file/d/${id}/preview`;
    }
    return null;
  };

  const embedUrl = activeVideoUrl ? getEmbedUrl(activeVideoUrl) : null;
  const isDirectVideo = activeVideoUrl && !embedUrl;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objUrl = URL.createObjectURL(file);
      setLocalVideoUrl(objUrl);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (isDirectVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else if (activeVideoUrl) {
      setIsPlaying(!isPlaying);
    } else {
      // Trigger file selector or edit
      fileInputRef.current?.click();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video-vsl" className="relative py-12 sm:py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Above video badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase bg-blue-950/60 border border-blue-800/60 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>ASSISTA AO VÍDEO ATÉ O FINAL</span>
          </div>
          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white uppercase font-display tracking-tight text-balance">
            Como faturei mais de <span className="text-sky-400">R$ 200 mil</span> em apenas 6 meses
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
            Matheus Souza revela os bastidores do método com a caneta de micropigmentação
          </p>
        </div>

        {/* Video Player Card Frame */}
        <div className="flex justify-center">
          <div className={`relative w-full transition-all duration-300 ${aspectFormat === 'vertical' ? 'max-w-[340px] sm:max-w-[380px]' : 'max-w-3xl'}`}>
            {/* Ambient edge glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-sky-400/20 to-blue-700/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

            <div className={`relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-blue-500/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] ${
              aspectFormat === 'vertical' ? 'aspect-[9/16]' : 'aspect-video'
            }`}>
              {embedUrl && isPlaying ? (
                <iframe
                  src={embedUrl}
                  title="Vídeo de Apresentação do Método"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isDirectVideo && isPlaying ? (
                <div className="relative w-full h-full group/video">
                  <video
                    ref={videoRef}
                    src={activeVideoUrl}
                    controls={false}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                    onEnded={() => setIsPlaying(false)}
                  />

                  {/* Custom Controls Overlay for Clean Luxury Look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none">
                    <div className="flex items-center justify-between text-xs text-slate-300 pointer-events-auto">
                      <span className="font-semibold text-white drop-shadow">Apresentação Oficial</span>
                      <span className="px-2 py-0.5 rounded bg-blue-600/80 text-[10px] font-bold text-white uppercase tracking-wider">HD</span>
                    </div>

                    <div className="flex items-center justify-between text-white pointer-events-auto">
                      <button
                        onClick={togglePlay}
                        className="p-2.5 rounded-full bg-blue-600/80 hover:bg-blue-600 text-white transition cursor-pointer"
                        aria-label="Pausar ou reproduzir"
                      >
                        <Play className="w-5 h-5 fill-white" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={toggleMute}
                          className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition cursor-pointer"
                          aria-label="Ativar ou desativar som"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
                        </button>
                        <button
                          onClick={toggleFullscreen}
                          className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition cursor-pointer"
                          aria-label="Tela cheia"
                        >
                          <Maximize className="w-4 h-4 text-slate-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Cover Poster State with Interactive Play Trigger */
                <div className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden group select-none">
                  {/* Real Video Frame / Poster */}
                  <img
                    src={activePoster}
                    alt="Vídeo de Apresentação de Matheus Souza"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50 pointer-events-none" />

                  {/* Top bar info */}
                  <div className="relative z-10 w-full p-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-blue-300">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      <span>Vídeo Oficial</span>
                    </span>

                    <span className="text-[11px] font-mono text-slate-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      HD 1080p
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="relative z-10 flex flex-col items-center">
                    <button
                      onClick={togglePlay}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-600 flex items-center justify-center text-white shadow-[0_0_50px_rgba(37,99,235,0.8)] group-hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none"
                      aria-label="Assistir ao vídeo"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1.5 fill-white text-white drop-shadow" />
                      <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-60 pointer-events-none" />
                    </button>

                    <span className="mt-4 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-xs font-bold text-white tracking-wider uppercase shadow-lg backdrop-blur-sm">
                      Clique para Iniciar o Vídeo
                    </span>
                  </div>

                  {/* Bottom sound prompt & description */}
                  <div className="relative z-10 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Volume2 className="w-4 h-4 text-sky-400 animate-pulse" />
                        <span className="font-medium text-white">Som ativado na reprodução</span>
                      </div>
                      <span className="text-[11px] text-slate-400">0:47 min</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video actions: Local upload or link config */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileUpload}
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-blue-500/30 text-xs font-semibold text-slate-200 transition-all cursor-pointer shadow-sm hover:border-blue-400"
          >
            <Upload className="w-3.5 h-3.5 text-blue-400" />
            <span>{localVideoUrl ? 'Trocar arquivo de vídeo (MP4)' : 'Carregar arquivo de vídeo (MP4)'}</span>
          </button>

          {onEditVideo && (
            <button
              onClick={onEditVideo}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-300 transition-all cursor-pointer shadow-sm hover:text-white"
            >
              <Edit3 className="w-3.5 h-3.5 text-sky-400" />
              <span>Inserir link (YouTube, Vimeo, Drive)</span>
            </button>
          )}

          {/* Toggle format: Vertical (9:16) / Landscape (16:9) */}
          <button
            onClick={() => setAspectFormat(prev => prev === 'vertical' ? 'landscape' : 'vertical')}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] font-medium text-slate-400 hover:text-slate-200 transition cursor-pointer"
            title="Alternar enquadramento"
          >
            <RefreshCw className="w-3 h-3 text-slate-400" />
            <span>Formato: {aspectFormat === 'vertical' ? 'Vertical (9:16)' : 'Horizontal (16:9)'}</span>
          </button>
        </div>

        {/* Bottom takeaway guarantee line */}
        <div className="text-center mt-5">
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
            Descubra a técnica de micropigmentação capilar com tebori e agulha para transformar sua carreira estética.
          </p>
        </div>
      </div>
    </section>
  );
};
