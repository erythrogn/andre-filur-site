'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  allWorks, 
  worksByCategory, 
  vimeoVideos,
  seriesNames,
  categoryPDFs,
  type Work 
} from '@/data/works';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// TIPOS E CONSTANTES
// ============================================
type FilterCategory = 'todos' | 'carranqueira' | 'encruzilhada' | 'ori' | 'exposicoes' | 'textos';

const FILTROS: { id: FilterCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'carranqueira', label: 'Carranqueira' },
  { id: 'encruzilhada', label: 'Encruzilhada' },
  { id: 'ori', label: 'Ori – Quartinhas' },
  { id: 'exposicoes', label: 'Exposições' },
  { id: 'textos', label: 'Textos Teóricos e Catálogos' },
];

// ============================================
// COMPONENTES AUXILIARES
// ============================================

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="work-card-anim group relative aspect-[4/5] bg-fundo-principal/5 overflow-hidden rounded-sm">
      <div className="relative w-full h-full">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* O overlay de hover permanece escuro para manter o forte apelo visual e legibilidade dos textos */}
      <div className="absolute inset-0 bg-gradient-to-t from-fundo-principal via-fundo-principal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <h3 className="font-cormorant text-2xl italic text-creme mb-2">
          {work.title}
        </h3>
        <p className="font-dm-mono text-[10px] uppercase text-ocre tracking-widest">
          {seriesNames.pt[work.category as keyof typeof seriesNames.pt] || work.category}
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
  return (
    <div className="relative aspect-video bg-fundo-principal/5 rounded-sm overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&color=8B7355`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={video.title}
        loading="lazy"
      />
    </div>
  );
}

function FilterButton({ filtro, isActive, onClick }: { filtro: typeof FILTROS[0]; isActive: boolean; onClick: () => void; }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`Filtrar por ${filtro.label}`}
      className={`
        font-dm-mono text-sm uppercase tracking-widest
        transition-all duration-300
        ${isActive 
          ? 'text-ocre border-b-2 border-ocre pb-1' 
          : 'text-fundo-principal/50 hover:text-fundo-principal pb-1'
        }
      `}
    >
      {filtro.label}
    </button>
  );
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export default function TrabalhosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos');

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'todos') return allWorks;
    if (activeFilter === 'textos') return [];
    return worksByCategory[activeFilter as keyof typeof worksByCategory] || [];
  }, [activeFilter]);

  const stats = useMemo(() => ({
    total: allWorks.length,
    porCategoria: {
      carranqueira: worksByCategory.carranqueira?.length || 0,
      encruzilhada: worksByCategory.encruzilhada?.length || 0,
      ori: worksByCategory.ori?.length || 0,
      exposicoes: worksByCategory.exposicoes?.length || 0,
    }
  }), []);

  useEffect(() => {
    ScrollTrigger.refresh();
    
    gsap.fromTo('.work-card-anim', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', overwrite: true }
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
        const labelFormatado = key === 'curriculo' ? 'Currículo Profissional' :
                               key === 'portfolio' ? 'Portfólio Completo' :
                               key === 'conceito' ? 'Texto de Conceito' :
                               `Catálogo Série ${key.charAt(0).toUpperCase() + key.slice(1)}`;

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-card-anim group flex items-center justify-between p-6 bg-fundo-principal/5 rounded-sm border border-fundo-principal/10 hover:border-ocre/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col pr-4">
              <span className="font-dm-mono text-[9px] uppercase tracking-widest text-ocre mb-1">Documento PDF</span>
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
          <h1 className="font-cormorant text-5xl md:text-6xl mb-4">Trabalhos</h1>
          <p className="font-dm-mono text-xs uppercase tracking-wider text-fundo-principal/60">
            {stats.total} obras · {vimeoVideos.length} vídeos
          </p>
        </header>

        {/* Abas de Filtros */}
        <nav className="flex flex-wrap justify-center gap-8 mb-16" aria-label="Filtros de categorias">
          {FILTROS.map((filtro) => (
            <FilterButton
              key={filtro.id}
              filtro={filtro}
              isActive={activeFilter === filtro.id}
              onClick={() => setActiveFilter(filtro.id)}
            />
          ))}
        </nav>

        {/* Seção Dinâmica */}
        <section aria-label={activeFilter === 'textos' ? "Material descritivo em PDF" : "Galeria de obras"} className={activeFilter === 'textos' ? "pdf-section-trigger" : ""}>
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
                Nenhuma obra encontrada nesta categoria
              </p>
            </div>
          )}
        </section>

        {/* Seções Globais (Aparecem apenas na aba "Todos") */}
        {activeFilter === 'todos' && vimeoVideos.length > 0 && (
          <section className="pt-16 border-t border-fundo-principal/10 mb-32" aria-label="Registros em vídeo">
            <header className="mb-12 text-center">
              <h2 className="font-cormorant text-4xl mb-3 text-ocre">Registros em Vídeo</h2>
              <p className="font-dm-mono text-[10px] uppercase tracking-widest text-fundo-principal/60">
                Processo · Exposições · Documentação
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vimeoVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        )}

        {activeFilter === 'todos' && (
          <section className="pt-16 border-t border-fundo-principal/10 pdf-section-trigger" aria-label="Material descritivo em PDF">
            <header className="mb-12 text-center">
              <h2 className="font-cormorant text-4xl mb-3 text-ocre">Textos Teóricos e Catálogos</h2>
              <p className="font-dm-mono text-[10px] uppercase tracking-widest text-fundo-principal/60">
                Publicações Oficiais · Conceito Artístico · Arquivos para Download
              </p>
            </header>
            {renderPDFGrid()}
          </section>
        )}

        {/* Rodapé Estatístico */}
        <aside className="mt-20 pt-16 border-t border-fundo-principal/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-cormorant text-4xl text-ocre mb-2">{stats.porCategoria.carranqueira}</p>
              <p className="font-dm-mono text-[9px] uppercase tracking-wider text-fundo-principal/60">Carranqueira</p>
            </div>
            <div>
              <p className="font-cormorant text-4xl text-ocre mb-2">{stats.porCategoria.encruzilhada}</p>
              <p className="font-dm-mono text-[9px] uppercase tracking-wider text-fundo-principal/60">Encruzilhada</p>
            </div>
            <div>
              <p className="font-cormorant text-4xl text-ocre mb-2">{stats.porCategoria.ori}</p>
              <p className="font-dm-mono text-[9px] uppercase tracking-wider text-fundo-principal/60">Ori</p>
            </div>
            <div>
              <p className="font-cormorant text-4xl text-ocre mb-2">{stats.porCategoria.exposicoes}</p>
              <p className="font-dm-mono text-[9px] uppercase tracking-wider text-fundo-principal/60">Exposições</p>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}