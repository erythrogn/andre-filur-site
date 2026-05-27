'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/lib/LanguageContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const { t } = useLanguage()
  const textRef = useRef<HTMLDivElement>(null)
  const imageHeroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de entrada da Imagem (Fade in + leve escala)
      gsap.fromTo(
        imageHeroRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: 'power2.out',
          delay: 0.2
        }
      )

      // Animação do Texto ao rolar
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="w-full min-h-screen flex flex-col bg-creme">
      
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center pt-24 pb-12 px-6 bg-creme z-10">
        
       
        <div 
          ref={imageHeroRef}
          className="relative w-full max-w-5xl aspect-[16/10] bg-areia p-3 shadow-2xl shadow-fundo-principal/10 rounded-sm overflow-hidden opacity-0"
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <Image 
              src="/images/imagehome.jpeg" 
              alt="André Filúr – O Propósito"
              fill
              quality={100}
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

      </section>

      <section className="relative w-full py-32 px-6 flex justify-center items-center z-20 bg-creme">
        <div ref={textRef} className="max-w-3xl text-center flex flex-col items-center gap-8 opacity-0">
          <h1 className="heading-1">André Filúr</h1>
          <p className="label-text opacity-60">{t('home.subtitle')}</p>
          <p className="font-cormorant text-2xl md:text-4xl text-fundo-principal italic leading-relaxed mt-4">
            {t('home.bio')}
          </p>
          <p className="label-text mt-8 border-t border-fundo-principal/10 pt-8 w-full max-w-md mx-auto">
            {t('home.practices')}
          </p>
        </div>
      </section>
    </main>
  )
}