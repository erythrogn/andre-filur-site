'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { useLanguage } from '@/lib/LanguageContext'
import EspacoArteVideo from '@/components/ui/EspacoArteVideo'
import { exhibitions } from '@/data/exhibitions'

export default function ExposicoesPage() {
  const { language } = useLanguage()

  useEffect(() => {
    gsap.fromTo('.gsap-reveal', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 })
  }, [])

  const exposList = Array.isArray(exhibitions) ? exhibitions : Object.values(exhibitions || {});

  return (
    <main className="min-h-screen pt-32 pb-20 bg-creme text-fundo-principal">
      <div className="container-custom px-4">
        <h1 className="heading-1 mb-16 text-center">{language === 'pt' ? 'Exposições' : 'Exhibitions'}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            {exposList.length > 0 ? exposList.map((expo: any, i: number) => {
              
              const titulo = expo.titulo || expo.title || expo.name || expo.nome || '';
              const dataStr = expo.data || expo.date || expo.ano || expo.year || '';
              const localStr = expo.local || expo.location || expo.cidade || expo.city || '';
              // Coleta de textos profundos do ficheiro
              const descricao = expo.descricao || expo.description || expo.texto || expo.text || expo.conteudo || '';

              return (
                <div key={i} className="gsap-reveal border-b border-fundo-principal/10 pb-8">
                  <h2 className="heading-2">{titulo}</h2>
                  
                  <p className="label-text mt-2 opacity-70 font-medium">
                    {dataStr} {localStr ? ` | ${localStr}` : ''}
                  </p>
                  
                  {descricao && (
                    <p className="body-text mt-4 opacity-90 whitespace-pre-line leading-relaxed">
                      {descricao}
                    </p>
                  )}
                  
                  {expo.tipo && (
                    <div className="mt-4">
                      <span className="inline-block text-[10px] font-mono uppercase tracking-widest border border-fundo-principal/30 px-3 py-1 opacity-60">
                        {expo.tipo}
                      </span>
                    </div>
                  )}
                </div>
              )
            }) : (
              <p className="opacity-50 italic">Carregando exposições...</p>
            )}
          </div>
          
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <EspacoArteVideo />
          </div>
        </div>
      </div>
    </main>
  )
}