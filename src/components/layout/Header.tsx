'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

  useEffect(() => {
    if (isMobileOpen) {
      gsap.to(mobileMenuRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', display: 'flex' });
      gsap.fromTo('.mobile-nav-item', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'power2.out' });
    } else {
      gsap.to(mobileMenuRef.current, { y: '-100%', opacity: 0, duration: 0.6, ease: 'power3.inOut', onComplete: () => gsap.set(mobileMenuRef.current, { display: 'none' }) });
    }
  }, [isMobileOpen]);

  const navLinks = [
    { href: '/', label: language === 'pt' ? 'Início' : 'Home' },
    { href: '/trabalhos', label: language === 'pt' ? 'Trabalhos' : 'Works' },
    { href: '/exposicoes', label: language === 'pt' ? 'Exposições' : 'Exhibitions' },
    { href: '/sobre', label: language === 'pt' ? 'Sobre' : 'About' },
    { href: '/contato', label: language === 'pt' ? 'Contato' : 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 bg-creme/90 backdrop-blur-md text-fundo-principal border-b border-fundo-principal/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
        
        {/* Logo renderizada com o componente oficial do Next.js - Zero erros de ESLint e Tipagem */}
       <Link href="/" className="relative z-50 flex items-center w-40 h-10" onClick={() => setIsMobileOpen(false)}>
          <Image 
           src="/images/logo-af-rgb.png" 
  alt="André Filúr Logo" 
  fill
  className="object-contain object-left"
  sizes="(max-width: 768px) 150px, 200px"
  priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`hover:text-ocre transition-colors ${pathname === link.href ? 'text-ocre font-bold' : 'text-fundo-principal/80'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-fundo-principal opacity-30 mx-2"></div>
          <button onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} className="hover:text-ocre transition-colors font-medium">
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>

        <div className="md:hidden flex items-center relative z-50">
          <button onClick={toggleMenu} className="focus:outline-none p-2" aria-label="Toggle Menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              {isMobileOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile com Fundo Sólido Garantido */}
      <div 
        ref={mobileMenuRef} 
        className="fixed inset-0 w-full h-screen bg-creme text-fundo-principal flex-col justify-center items-center gap-8 hidden z-40" 
        style={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="flex flex-col items-center gap-6 mt-12">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMobileOpen(false)} 
              className={`mobile-nav-item text-3xl uppercase tracking-widest ${pathname === link.href ? 'text-ocre font-bold' : 'opacity-70 font-light'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-nav-item mt-12 flex items-center gap-6 border border-fundo-principal/20 rounded-full px-6 py-3">
          <button onClick={() => setLanguage('pt')} className={`text-lg tracking-widest transition-opacity ${language === 'pt' ? 'font-bold' : 'opacity-40'}`}>PT</button>
          <div className="w-[1px] h-6 bg-fundo-principal opacity-20"></div>
          <button onClick={() => setLanguage('en')} className={`text-lg tracking-widest transition-opacity ${language === 'en' ? 'font-bold' : 'opacity-40'}`}>EN</button>
        </div>
      </div>
    </header>
  );
}



