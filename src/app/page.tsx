'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Player from '@vimeo/player'
import { useLanguage } from '@/lib/LanguageContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const { t } = useLanguage()
  const textRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<Player | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    // Inicializa a API do Vimeo para controlo de audio
    if (iframeRef.current && !playerRef.current) {
      playerRef.current = new Player(iframeRef.current)
    }

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

  const toggleAudio = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.setVolume(1)
        setIsMuted(false)
      } else {
        playerRef.current.setVolume(0)
        setIsMuted(true)
      }
    }
  }

  return (
    <main className="w-full min-h-screen flex flex-col bg-creme">
      <section className="relative w-full h-screen overflow-hidden bg-fundo-principal flex items-center justify-center group">
        
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90">
  <Image 
    src="/images/imagehome.jpeg" 
    alt="Imagem O Propósito"
    fill
    className="object-cover"
    priority
  />
</div>

        {/* Botao de Audio com Animacao Robusta */}
        <button 
          onClick={toggleAudio}
          className="absolute bottom-10 right-10 z-20 p-4 rounded-full bg-fundo-principal/40 backdrop-blur-md border border-creme/10 text-creme shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:scale-110 hover:bg-fundo-principal/80"
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
      </section>

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
