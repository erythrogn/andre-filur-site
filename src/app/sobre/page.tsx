'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import CurriculoButton from '@/components/ui/CurriculoButton';
import CurriculoPortifolio from '@/components/ui/PortfolioButton';
import { useLanguage } from '@/lib/LanguageContext';

export default function SobrePage() {
  const { t } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Estado para controlar o áudio do vídeo
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.fromTo('.gsap-reveal', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  // Função para alternar o áudio usando a API do Vimeo (sem recarregar o iframe)
  const toggleAudio = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: 'setVolume', value: nextMuted ? 0 : 1 }),
        '*'
      );
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-creme text-fundo-principal overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <h1 className="heading-2 gsap-reveal">
              {t('about.title')}
            </h1>
            
            <p className="font-cormorant text-lg md:text-xl text-fundo-principal/80 leading-relaxed whitespace-pre-line gsap-reveal">
              {t('about.text')}
            </p>
          </div>

          <div className="relative flex flex-col items-center md:items-end mt-10 md:mt-0">
            
            <div className="relative w-full max-w-md mb-12 gsap-reveal">
              
              {/* 1. Container do Vídeo (Ajustado para 100% de largura do max-w-md) */}
              <div className="relative w-full aspect-[4/5] bg-fundo-principal/5 overflow-hidden rounded-sm shadow-xl group">
                <iframe 
                  ref={iframeRef}
                  // URL atualizada para permitir a manipulação de volume via API
                  src="https://player.vimeo.com/video/1194435833?autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&api=1" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  title="o proposito"
                ></iframe>

                <button 
                  onClick={toggleAudio}
                  className="absolute bottom-6 right-6 z-20 p-4 rounded-full bg-fundo-principal/40 backdrop-blur-md border border-creme/10 text-creme shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:scale-110 hover:bg-fundo-principal/80"
                  aria-label="Alternar Audio"
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    </svg>
                  )}
                </button>
              </div>

            </div>

            {/* Botão do Currículo */}
            <div className="gsap-reveal w-full max-w-md pt-8 border-t border-fundo-principal/10">
              <CurriculoButton />
            </div>
{/* Botão do Portifolio */}
            <div className="gsap-reveal w-full max-w-md pt-8 border-t border-fundo-principal/10">
              <CurriculoPortifolio />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}