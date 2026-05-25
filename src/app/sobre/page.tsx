'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import CurriculoButton from '@/components/ui/CurriculoButton';
import { useLanguage } from '@/lib/LanguageContext';

export default function SobrePage() {
  const { t } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Animação robusta de entrada na montagem do componente
  useEffect(() => {
    gsap.fromTo('.gsap-reveal', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-creme text-fundo-principal overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ========================================== */}
          {/* COLUNA ESQUERDA - Texto Institucional      */}
          {/* ========================================== */}
          <div className="space-y-8">
            <h1 className="heading-2 gsap-reveal">
              {t('about.title')}
            </h1>
            
            <p className="font-cormorant text-lg md:text-xl text-fundo-principal/80 leading-relaxed whitespace-pre-line gsap-reveal">
              {t('about.text')}
            </p>
          </div>

          {/* ========================================== */}
          {/* COLUNA DIREITA - Composição de Mídia       */}
          {/* ========================================== */}
          <div className="relative flex flex-col items-end mt-10 md:mt-0">
            
            {/* Bloco de Composição (Vídeo + Imagem) */}
            <div className="relative w-full max-w-lg mb-16">
              
              {/* 1. Container do Vídeo (Fundo / Direita) */}
              <div className="relative w-[80%] aspect-[4/5] ml-auto bg-fundo-principal/5 overflow-hidden rounded-sm gsap-reveal shadow-xl">
                <iframe 
                  ref={iframeRef}
                  src="https://player.vimeo.com/video/1194435833?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  title="o proposito"
                ></iframe>
              </div>

              {/* 2. Container da Imagem (Frente / Esquerda / Sobreposta) */}
              {/* A borda 'border-creme' cria um efeito de recorte visual muito elegante */}
              <div className="absolute -bottom-10 left-0 w-[55%] aspect-square border-[10px] border-creme bg-fundo-secundario overflow-hidden rounded-sm shadow-2xl gsap-reveal z-10">
                <Image 
                  src="/images/Andre_perfil.jpeg" 
                  alt="Retrato de André Filúr" 
                  fill 
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

            </div>

            {/* Botão do Currículo */}
            <div className="gsap-reveal w-full max-w-lg flex justify-end pt-8 border-t border-fundo-principal/10">
              <div className="w-[80%]"> {/* Alinhado geometricamente com o vídeo */}
                <CurriculoButton />
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}