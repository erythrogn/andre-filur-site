'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import CurriculoButton from '@/components/ui/CurriculoButton';
import CurriculoPortifolio from '@/components/ui/PortfolioButton';
import { useLanguage } from '@/lib/LanguageContext';

export default function SobrePage() {
  const { t } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-reveal', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-creme text-fundo-principal overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ========================================== */}
          {/* COLUNA ESQUERDA - Texto Biográfico         */}
          {/* ========================================== */}
          <div className="space-y-10">
            <h1 className="heading-2 gsap-reveal">
              {t('about.title')}
            </h1>
            
            <div className="relative pl-6 border-l border-fundo-principal/20 gsap-reveal">
              <p className="font-cormorant text-xl md:text-2xl text-fundo-principal/90 leading-relaxed whitespace-pre-line">
                {t('about.text')}
              </p>
            </div>
          </div>

          {/* ========================================== */}
          {/* COLUNA DIREITA - Vídeo e Ações             */}
          {/* ========================================== */}
          <div className="relative flex flex-col items-center md:items-end mt-10 md:mt-0">
            
            <div className="relative w-full max-w-md mb-10 gsap-reveal">
              
              {/* Estética de Galeria (Passe-partout) para o Vídeo */}
              <div className="relative w-full aspect-[4/5] p-2 bg-fundo-principal/5 rounded-sm shadow-2xl shadow-fundo-principal/10">
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <iframe 
                    ref={iframeRef}
                    // Adicionado 'background=1' para silenciar e ocultar controlos nativos
                    src="https://player.vimeo.com/video/1194435833?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    title="o proposito"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* Grupo de Botões Alinhados e Harmonizados */}
            <div className="gsap-reveal w-full max-w-md pt-6 border-t border-fundo-principal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="w-full -my-4">
                <CurriculoButton />
              </div>
              <div className="w-full -my-4">
                <CurriculoPortifolio />
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}