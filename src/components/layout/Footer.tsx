'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A1A1A] text-[#EAE8E3] border-t border-[#EAE8E3]/10">
      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xs tracking-widest uppercase opacity-60 text-center md:text-left">
          &copy; {year} André Filúr.<br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
        </div>
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-medium opacity-80">
          <span className="cursor-default hover:opacity-50 transition-opacity">@studionascen</span>
          <div className="w-1 h-1 rounded-full bg-[#EAE8E3] opacity-30"></div>
          <a href="https://dimen-6.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#EAE8E3] hover:after:w-full after:transition-all after:duration-300">@dimen6</a>
        </div>
      </div>
    </footer>
  );
}