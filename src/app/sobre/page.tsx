'use client';

import { useRef } from 'react';
import CurriculoButton from '@/components/ui/CurriculoButton';
import { useLanguage } from '@/lib/LanguageContext';

export default function SobrePage() {
  const { t } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Coluna Esquerda - Texto Institucional */}
          <div className="space-y-8 gsap-reveal">
            <h1 className="heading-2 gsap-reveal">
              {t('about.title')}
            </h1>
            
            <p className="font-cormorant text-lg md:text-xl text-fundo-principal leading-relaxed whitespace-pre-line">
              {t('about.text')}
            </p>
          </div>

          {/* Coluna Direita - Vídeo e Currículo */}
          <div className="space-y-10 flex flex-col">
            
            {/* Container do Vídeo Corrigido */}
            <div className="relative w-full aspect-[4/5] max-w-md bg-fundo-principal/5 gsap-reveal overflow-hidden rounded-sm">
              <iframe 
                ref={iframeRef}
                src="https://player.vimeo.com/video/1194435833?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                title="o proposito"
              ></iframe>
            </div>

            {/* Botão do Currículo */}
            <div className="gsap-reveal pt-8 border-t border-fundo-principal/10 max-w-md w-full">
              <CurriculoButton />
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}