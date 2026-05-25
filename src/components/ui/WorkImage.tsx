'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Garante que o plugin só é registado no navegador (evita erros no build da Vercel)
if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger);
}

export interface WorkImageProps {
 src: string;
 alt: string;
 className?: string;
 title?: string;
 category?: string;
 year?: string;
}

export default function WorkImage({ src, alt, className = '', title, category, year }: WorkImageProps) {
 const containerRef = useRef<HTMLDivElement>(null);
 const imageWrapperRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const ctx = gsap.context(() => {
 // Animação da obra subindo e aparecendo suavemente ao entrar no ecrã
 gsap.fromTo(
 containerRef.current,
 { opacity: 0, y: 80 },
 {
 opacity: 1,
 y: 0,
 duration: 1.5,
 ease: 'power3.out',
 scrollTrigger: {
 trigger: containerRef.current,
 start: 'top 85%', // A animação inicia quando 85% do ecrã atinge a imagem
 toggleActions: 'play none none reverse',
 },
 }
 );
 }, containerRef);

 return () => ctx.revert();
 }, []);

 return (
 <div ref={containerRef} className="flex flex-col gap-5 w-full group drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]">
 {/* Moldura da Arte com Efeito de Escala ao passar o rato */}
 <div 
 ref={imageWrapperRef} 
 className="overflow-hidden relative w-full bg-[#1A1A1A]/5 cursor-pointer drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]"
 >
 <img
 src={src}
 alt={alt}
 className={`w-full h-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.03] ${className}`}
 />
 </div>
 
 {/* Plaqueta de Museu (Ocultada dinamicamente caso não haja metadados) */}
 {(title || category || year) && (
 <div className="flex flex-col gap-1 text-[#1A1A1A] px-2 transition-opacity duration-700 opacity-50 group-hover:opacity-100 cursor-default drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]">
 {title && (
 <h3 className="text-xs font-medium tracking-widest uppercase drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]">
 {title}
 </h3>
 )}
 <div className="flex justify-between items-center text-[10px] tracking-widest uppercase mt-2 drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]">
 {category && <span>{category}</span>}
 {year && <span>{year}</span>}
 </div>
 </div>
 )}
 </div>
 );
}
