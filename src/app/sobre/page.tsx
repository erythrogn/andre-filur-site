'use client'

import CurriculoButton from '@/components/ui/CurriculoButton';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function SobrePage() {
  const { t } = useLanguage()

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

          {/* Coluna Direita - Foto e Currículo */}
          <div className="space-y-10 flex flex-col">
            
            {/* Imagem de Perfil com Next/Image */}
            <div className="relative w-full aspect-[4/5] max-w-md bg-fundo-principal/5 gsap-reveal">
              <Image 
                src="/images/Andre_perfil.jpeg" 
                alt="André Filúr" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Botão do Currículo */}
            <div className="gsap-reveal pt-8 border-t border-fundo-principal/10 max-w-md w-full">
              <CurriculoButton />
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}