'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Work } from '@/types';

interface LightboxProps {
 work: Work | null;
 onClose: () => void;
 language: string;
}

export default function Lightbox({ work, onClose, language }: LightboxProps) {
 const overlayRef = useRef<HTMLDivElement>(null);
 const contentRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 if (work) {
 document.body.style.overflow = 'hidden';
 
 const ctx = gsap.context(() => {
 gsap.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' });
 gsap.fromTo(contentRef.current, 
 { scale: 0.95, opacity: 0, y: 20 }, 
 { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
 );
 });
 return () => ctx.revert();
 } else {
 document.body.style.overflow = 'unset';
 }
 }, [work]);

 if (!work) return null;

 return (
 <div 
 ref={overlayRef}
 className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/95 backdrop-blur-sm p-4 md:p-12 opacity-0 drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]"
 onClick={onClose}
 >
 
 <button 
 type="button"
 className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors focus:outline-none z-[110] drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]"
 onClick={onClose}
 title="Close lightbox"
 aria-label="Close lightbox"
 >
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
 <line x1="18" y1="6" x2="6" y2="18" />
 <line x1="6" y1="6" x2="18" y2="18" />
 </svg>
 </button>

 <div 
 ref={contentRef}
 className="relative w-full h-full max-w-6xl max-h-[85vh] flex flex-col justify-center items-center pointer-events-none opacity-0 drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]"
 >
 <img 
 src={(work as any).image || (work as any).imagePath} 
 alt={(work as any).title} 
 className="w-auto h-full max-h-full object-contain pointer-events-auto drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]"
 />
 
 {/* Metadados da obra no Lightbox */}
 <div className="absolute bottom-[-40px] left-0 text-white/60 text-xs tracking-widest uppercase flex gap-4 pointer-events-auto drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]">
 <span>{(work as any).title}</span>
 {(work as any).year && <span className="opacity-50 drop-shadow-[0_15px_25px_rgba(93,74,58,0.45)]">| {(work as any).year}</span>}
 </div>
 </div>
 </div>
 );
}
