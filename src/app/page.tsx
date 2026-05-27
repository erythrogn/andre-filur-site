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

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      {/* SEÇÃO DA IMAGEM HERO */}
      <section className="relative w-full h-screen overflow-hidden bg-fundo-principal flex items-center justify-center group">
        
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <Image 
            src="/images/imagehome.jpeg" 
            alt="Imagem O Propósito"
            fill
            quality={100}
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* SEÇÃO DE TEXTO COM ANIMAÇÃO GSAP */}
      <section className="relative w-full py-32 px-6 flex justify-center items-center z-20">
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