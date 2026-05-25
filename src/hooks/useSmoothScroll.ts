'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useSmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Seleciona todos os elementos que devem aparecer suavemente na tela
    const revealElements = document.querySelectorAll('.gsap-reveal');

    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { 
          y: 60, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out', // Animacao robusta e fluida (respiro cognitivo)
          scrollTrigger: {
            trigger: el,
            start: 'top 85%', // Dispara quando o topo do elemento atinge 85% da altura da tela
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Limpeza na desmontagem do componente para evitar vazamento de memoria
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
