'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  allWorks, 
  worksByCategory, 
  vimeoVideos,
  categoryPDFs,
  type Work 
} from '@/data/works';
import { useLanguage } from '@/lib/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// COMPONENTES AUXILIARES
// ============================================

function WorkCard({ work }: { work: Work }) {
  const { t } = useLanguage();
  
  // Conversão segura (casting) para evitar bloqueios do TypeScript
  const categoryKey = `works.${work.category}` as Parameters<typeof t>[0];

  return (
    <article className="work-card-anim group relative aspect-[4/5] bg-fundo-principal/5 overflow-hidden rounded-sm drop-shadow-[0_15px_25px_rgba(0,0,0,0.05)]">
      <div className="relative w-full h-full">
        <Image
          src={work.image}
          alt={work.title}
          title="" 
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-fundo-principal via-fundo-principal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        {/* O <h3> com o nome da obra foi removido daqui */}
        <p className="font-dm-mono text-[10px] uppercase text-ocre tracking-widest">
          {t(categoryKey)}
        </p>
        {work.year && (
          <p className="font-dm-mono text-[9px] text-areia mt-1">
            {work.year}
          </p>
        )}
      </div>
    </article>
  );
}

function VideoCard({ video }: { video: { id: string; title: string } }) {
  const { t } = useLanguage();

  return (
    <article className="video-card-anim group flex flex-col gap-4 w-full">
      <div className="relative aspect-video bg-fundo-principal/5 rounded-sm overflow-hidden border border-transparent transition-all duration-700 ease-out group-hover:border-ocre/30 group-hover:shadow-[0_15px_30px_rgba(139,115,85,0.15)]">
        <iframe
          className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&color=8B7355`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.title}
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col gap-1 px-2 transition-opacity duration-700 opacity-60 group-hover:opacity-100 cursor-default">
        <h3 className="text-xs font-dm-mono font-medium tracking-widest uppercase text-fundo-principal">
          {video.title}
        </h3>
        <span className="text-[9px] font-dm-mono tracking-widest uppercase text-ocre">
          {t('works.audiovisual')}
        </span>
      </div>
    </article>
  );
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export default function TrabalhosPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  // Arrays gerados dinamicamente com as novas traduções
  const FILTROS = useMemo(() => [
    { id: 'todos', label: t('works.all') },
    { id: 'carranqueira', label: t('works.carranqueira') },
    { id: 'encruzilhada', label: t('works.encruzilhada') },
    { id: 'ori', label: t('works.ori') },
    { id: 'gravura', label: t('works.gravura') },
    { id: 'mural', label: t('works.mural') },
    { id: 'pintura', label: t('works.pintura') },
    { id: 'exposicoes', label: t('works.exhibitions') },
    { id: 'textos', label: t('works.textos') },
  ], [t]);

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'todos') return allWorks;
    if (activeFilter === 'textos') return [];
    return worksByCategory[activeFilter as keyof typeof worksByCategory] || [];
  }, [activeFilter]);

  const stats = useMemo(() => ({
    total: allWorks.length,
    porCategoria: [
      { id: 'carranqueira', key: 'works.carranqueira', count: worksByCategory.carranqueira?.length || 0 },
      { id: 'encruzilhada', key: 'works.encruzilhada', count: worksByCategory.encruzilhada?.length || 0 },
      { id: 'ori', key: 'works.ori', count: worksByCategory.ori?.length || 0 },
      { id: 'gravura', key: 'works.gravura', count: worksByCategory.gravura?.length || 0 },
      { id: 'mural', key: 'works.mural', count: worksByCategory.mural?.length || 0 },
      { id: 'pintura', key: 'works.pintura', count: worksByCategory.pintura?.length || 0 },
      { id: 'exposicoes', key: 'works.exhibitions', count: worksByCategory.exposicoes?.length || 0 },
    ] as const
  }), []);

  useEffect(() => {
    ScrollTrigger.refresh();
    
    gsap.fromTo('.work-card-anim', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', overwrite: true }
    );

    gsap.fromTo('.video-card-anim',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', overwrite: true,
        scrollTrigger: {
          trigger: '.video-section-trigger',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo('.pdf-card-anim',
      { opacity: 0, scale: 0.96, y: 20 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'back.out(1.1)', overwrite: true,
        scrollTrigger: {
          trigger: '.pdf-section-trigger',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [activeFilter, filteredWorks]);

  const renderPDFGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(categoryPDFs).map(([key, url]) => {
        const labelFormatado = key === 'curriculo' ? t('works.resume') :
                               key === 'portfolio' ? t('works.portfolio') :
                               key === 'conceito' ? t('works.concept') :
                               `${t('works.catalog')} ${key.charAt(0).toUpperCase() + key.slice(1)}`;

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-card-anim group flex items-center justify-between p-6 bg-fundo-principal/5 rounded-sm border border-fundo-principal/10 hover:border-ocre/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col pr-4">
              <span className="font-dm-mono text-[9px] uppercase tracking-widest text-ocre mb-1">{t('works.pdf_document')}</span>
              <h3 className="font-cormorant text-xl text-fundo-principal group-hover:text-ocre transition-colors duration-300">
                {labelFormatado}
              </h3>
            </div>
            <div className="p-3 bg-fundo-principal/10 rounded-sm group-hover:bg-ocre/10 transition-all duration-300 flex-shrink-0">
              <svg className="w-5 h-5 text-fundo-principal/70 group-hover:text-ocre transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        );
      })}
    </div>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-creme text-fundo-principal">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Cabeçalho */}
        <header className="mb-16 text-center">
          <h1 className="font-cormorant text-5xl md:text-6xl mb-4">{t('nav.works')}</h1>
          <p className="font-dm-mono text-xs uppercase tracking-wider text-fundo-principal/60">
            {stats.total} {t('works.artworks_count')} · {vimeoVideos.length} {t('works.videos_count')}
          </p>
        </header>

        {/* Abas de Filtros */}
        <nav className="flex flex-wrap justify-center gap-8 mb-16" aria-label="Filtros de categorias">
          {FILTROS.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setActiveFilter(filtro.id)}
              aria-pressed={activeFilter === filtro.id}
              className={`font-dm-mono text-sm uppercase tracking-widest transition-all duration-300 ${
                activeFilter === filtro.id 
                  ? 'text-ocre border-b-2 border-ocre pb-1' 
                  : 'text-fundo-principal/50 hover:text-fundo-principal pb-1'
              }`}
            >
              {filtro.label}
            </button>
          ))}
        </nav>

        {/* Seção Dinâmica */}
        <section aria-label={activeFilter === 'textos' ? t('works.texts_title') : t('works.all')} className={activeFilter === 'textos' ? "pdf-section-trigger" : ""}>
          {activeFilter === 'textos' ? (
            <div className="mb-32">
              {renderPDFGrid()}
            </div>
          ) : filteredWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {filteredWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-dm-mono text-fundo-principal/60 uppercase tracking-wider text-sm">
                {t('works.not_found')}
              </p>
            </div>
          )}
        </section>

        {/* Seções Globais */}
        {activeFilter === 'todos' && vimeoVideos.length > 0 && (
          <section className="pt-16 border-t border-fundo-principal/10 mb-32 video-section-trigger" aria-label="Registros em vídeo">
            <header className="mb-12 text-center">
              <h2 className="font-cormorant text-4xl mb-3 text-ocre">{t('works.videos_title')}</h2>
              <p className="font-dm-mono text-[10px] uppercase tracking-widest text-fundo-principal/60">
                {t('works.videos_subtitle')}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {vimeoVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        )}

        {activeFilter === 'todos' && (
          <section className="pt-16 border-t border-fundo-principal/10 pdf-section-trigger" aria-label="Material descritivo em PDF">
            <header className="mb-12 text-center">
              <h2 className="font-cormorant text-4xl mb-3 text-ocre">{t('works.texts_title')}</h2>
              <p className="font-dm-mono text-[10px] uppercase tracking-widest text-fundo-principal/60">
                {t('works.texts_subtitle')}
              </p>
            </header>
            {renderPDFGrid()}
          </section>
        )}

        {/* Rodapé Estatístico Dinâmico */}
        <aside className="mt-20 pt-16 border-t border-fundo-principal/10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center">
            {stats.porCategoria.map((categoria) => (
              <div key={categoria.id} className="min-w-[100px]">
                <p className="font-cormorant text-4xl text-ocre mb-2">{categoria.count}</p>
                <p className="font-dm-mono text-[9px] uppercase tracking-wider text-fundo-principal/60">
                  {t(categoria.key as Parameters<typeof t>[0])}
                </p>
              </div>
            ))}
          </div>
        </aside>

      </div>
    </main>
  );
}