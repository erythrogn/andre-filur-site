'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLanguage } from '@/lib/LanguageContext'
import EspacoArteVideo from '@/components/ui/EspacoArteVideo'
import { exhibitions, type Exhibition } from '@/data/exhibitions'

export default function ExposicoesPage() {
  const { language, t } = useLanguage()
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fade-in', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo('.expo-item', 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', delay: 0.2 }
      )
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    // Removido o overflow-x-hidden para devolver a vida ao sticky
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
          
          {/* Adicionado h-full no pai e h-fit no filho para ancoragem perfeita do sticky */}
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