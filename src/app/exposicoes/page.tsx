'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { useLanguage } from '@/lib/LanguageContext'
import EspacoArteVideo from '@/components/ui/EspacoArteVideo'
import { exhibitions, type Exhibition } from '@/data/exhibitions'

export default function ExposicoesPage() {
  const { language, t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-reveal', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen pt-32 pb-20 bg-creme text-fundo-principal">
      <div className="container-custom px-4">
        
        {/* Título da Página Dinâmico */}
        <h1 className="heading-1 mb-16 text-center gsap-reveal">
          {t('nav.exhibitions')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Coluna da Esquerda: Lista de Exposições */}
          <div className="lg:col-span-7 space-y-12">
            {exhibitions.length > 0 ? exhibitions.map((expo: Exhibition) => {
              
              // Lógica de tradução para os campos bilingues
              const titulo = language === 'en' && expo.nameEn ? expo.nameEn : expo.name;
              const local = language === 'en' && expo.locationEn ? expo.locationEn : expo.location;
              const tipoTexto = expo.type === 'individual' ? t('exhibitions.individual') : t('exhibitions.collective');

              return (
                <div key={expo.id} className="gsap-reveal border-b border-fundo-principal/10 pb-8">
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
          
          {/* Coluna da Direita: Vídeo com Sticky Scroll */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40 gsap-reveal">
              <EspacoArteVideo />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}