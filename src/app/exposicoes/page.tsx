'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/lib/LanguageContext'
import EspacoArteVideo from '@/components/ui/EspacoArteVideo'
import { exhibitions, type Exhibition } from '@/data/exhibitions'

// Garantir que o plugin é registado apenas no lado do cliente
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ExposicoesPage() {
  const { language, t } = useLanguage()
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Animação Premium para Título e Vídeo (Entrada suave de baixo para cima)
      gsap.fromTo('.fade-in', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out', stagger: 0.2 }
      )

      // 2. ScrollTrigger individual para cada item da lista
      // Cria um efeito em que cada item flutua suavemente para a posição assim que entra na tela
      const items = gsap.utils.toArray('.expo-item')
      items.forEach((item: any) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 30, x: -15 }, // Inicia ligeiramente abaixo e à esquerda
          { 
            opacity: 1, 
            y: 0, 
            x: 0, 
            duration: 1.2, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%', // A animação dispara quando o topo do item atinge 85% da janela
              toggleActions: 'play none none none' // Executa a animação apenas uma vez (sem reverter no scroll up)
            }
          }
        )
      })

    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-20 bg-creme text-fundo-principal">
      <div className="container-custom px-4">
        
        <h1 className="heading-1 mb-16 text-center fade-in opacity-0">
          {t('nav.exhibitions')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7 space-y-12">
            {exhibitions.length > 0 ? exhibitions.map((expo: Exhibition) => {
              
              const titulo = language === 'en' && expo.nameEn ? expo.nameEn : expo.name;
              const local = language === 'en' && expo.locationEn ? expo.locationEn : expo.location;
              const tipoTexto = expo.type === 'individual' ? t('exhibitions.individual') : t('exhibitions.collective');

              return (
                <div key={expo.id} className="expo-item opacity-0 border-b border-fundo-principal/10 pb-8">
                  <h2 className="heading-3 mb-2">{titulo}</h2>
                  
                  <p className="label-text mt-2 opacity-70 font-medium">
                    {expo.year} | {local}, {expo.city}
                  </p>
                  
                  <div className="mt-4">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-widest border border-fundo-principal/30 px-3 py-1 opacity-60">
                      {tipoTexto}
                    </span>
                  </div>
                </div>
              )
            }) : (
              <p className="opacity-50 font-dm-mono uppercase tracking-widest text-sm text-center py-10">
                Carregando exposições...
              </p>
            )}
          </div>
          
          <div className="lg:col-span-5 h-full">
            <div className="lg:sticky lg:top-40 h-fit fade-in opacity-0">
              <EspacoArteVideo />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}