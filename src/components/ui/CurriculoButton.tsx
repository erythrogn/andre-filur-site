'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '@/lib/LanguageContext';

export default function CurriculoButton() {
  const { language } = useLanguage();
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.03,
            backgroundColor: '#1A1A1A',
            color: '#F5F1EA',
            borderColor: '#1A1A1A',
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            backgroundColor: 'transparent',
            color: '#1A1A1A',
            borderColor: 'rgba(26, 26, 26, 0.2)',
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-center py-8">
      <a
        ref={buttonRef}
        href="/documents/andre-filur-curriculo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 border border-fundo-principal/20 px-8 py-4 uppercase tracking-widest text-xs font-dm-mono text-fundo-principal bg-transparent rounded-none transition-shadow"
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="square" 
            strokeLinejoin="miter" 
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" 
          />
        </svg>
        <span>
          {language === 'pt' ? 'Visualizar Currículo' : 'View Curriculum Vitae'}
        </span>
      </a>
    </div>
  );
}
