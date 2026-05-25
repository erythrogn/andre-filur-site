'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Player from '@vimeo/player'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EspacoArteVideo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<Player | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (iframeRef.current && !playerRef.current) {
      playerRef.current = new Player(iframeRef.current)
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
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
    <div ref={containerRef} className="w-full flex flex-col items-center justify-center py-8 px-4 sm:px-6 opacity-0 relative">
      <div className="relative w-full max-w-[290px] sm:max-w-[360px] md:max-w-[450px] aspect-[9/16] bg-fundo-principal/5 border border-fundo-principal/5 drop-shadow-[0_15px_30px_rgba(93,74,58,0.25)] overflow-hidden group">
        
        <iframe 
          ref={iframeRef}
          src="https://player.vimeo.com/video/1191272448?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1" 
          className="absolute top-0 left-0 w-full h-full scale-[1.02]"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          title="Espaçodearte"
          style={{ pointerEvents: 'none' }}
        ></iframe>

        <div className="absolute inset-0 bg-transparent pointer-events-auto z-10"></div>
        
        {/* Botao de Audio com Animacao Robusta para o Video Vertical */}
        <button 
          onClick={toggleAudio}
          className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-creme/80 backdrop-blur-md border border-fundo-principal/10 text-fundo-principal shadow-[0_5px_15px_rgba(93,74,58,0.3)] transition-all duration-500 ease-out hover:scale-110 hover:bg-creme"
          aria-label="Alternar Audio"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
