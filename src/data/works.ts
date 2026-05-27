// src/data/works.ts
// Estrutura de dados das obras organizadas por série

export type Category = 'carranqueira' | 'encruzilhada' | 'ori' | 'exposicoes' | 'gravura' | 'mural' | 'pintura';

export interface Work {
  id: string;
  title: string;
  titleEn?: string;
  category: Category;
  image: string;
  year?: string;
  technique?: string;
  dimensions?: string;
  description?: string;
}

export interface CategoryData {
  name: string;
  slug: Category;
  pdf?: string;
  description?: string;
}

// ============================================
// PDFs POR CATEGORIA
// ============================================
export const categoryPDFs: Record<string, string> = {
  carranqueira: '/documents/Andre Filúr_Carranqueiras.pdf',
  encruzilhada: '/documents/Andre Filúr_Encruzilhada.pdf',
  ori: '/documents/Andre Filúr_Ori.pdf',
  conceito: '/documents/Andre Filúr_Conceito.pdf',
  portfolio: '/documents/Andre Filúr_Portfólio.pdf',
  curriculo: '/documents/andre-filur-curriculo.pdf',
};

// ============================================
// CATEGORIAS
// ============================================
export const categories: CategoryData[] = [
  { name: 'Carranqueira', slug: 'carranqueira', pdf: categoryPDFs.carranqueira },
  { name: 'Encruzilhada', slug: 'encruzilhada', pdf: categoryPDFs.encruzilhada },
  { name: 'Ori – Quartinhas', slug: 'ori', pdf: categoryPDFs.ori },
  { name: 'Exposições', slug: 'exposicoes' },
  { name: 'Gravura', slug: 'gravura' },
  { name: 'Mural', slug: 'mural' },
  { name: 'Pintura', slug: 'pintura' },
];

// ============================================
// SÉRIE: CARRANQUEIRA
// ============================================
export const carranqueiraWorks: Work[] = [
  { id: 'car-001', title: 'Andre Filúr – Aimê', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Aimê.jpg', year: '2024' },
  { id: 'car-002', title: 'Andre Filúr – Araci', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Araci.jpg', year: '2024' },
  { id: 'car-003', title: 'Andre Filúr – Jurema', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Jurema.jpg', year: '2024' },
  { id: 'car-004', title: 'Andre Filúr – Kauana', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Kauana.jpg', year: '2024' },
  { id: 'car-005', title: 'Andre Filúr – Obra Sem Título 01', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Obra_Sem Título_01.jpg', year: '2024' },
  { id: 'car-006', title: 'Andre Filúr – Obra Sem Título 02', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Obra_Sem Título_02.jpg', year: '2024' },
  { id: 'car-007', title: 'Andre Filúr – Arany', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Obras_Arany.jpg', year: '2024' },
  { id: 'car-008', title: 'Andre Filúr – Ybyara 02', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Ybyara_02.jpg', year: '2024' },
  { id: 'car-009', title: 'Andre Filúr – Ybyara', category: 'carranqueira', image: '/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Ybyara.jpg', year: '2024' }
];

// ============================================
// SÉRIE: ENCRUZILHADA
// ============================================
export const encruzilhadaWorks: Work[] = [
  { id: 'enc-001', title: 'Andre Filúr – Encruzilhada 01', category: 'encruzilhada', image: '/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_01.jpg', year: '2024' },
  { id: 'enc-002', title: 'Andre Filúr – Encruzilhada 02', category: 'encruzilhada', image: '/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_02.jpg', year: '2024' },
  { id: 'enc-003', title: 'Andre Filúr – Encruzilhada 03', category: 'encruzilhada', image: '/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_03.jpg', year: '2024' },
  { id: 'enc-004', title: 'Andre Filúr – Encruzilhada 04', category: 'encruzilhada', image: '/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_04.PNG', year: '2024' },
  { id: 'enc-005', title: 'IMG 0671', category: 'encruzilhada', image: '/Obras/Séries/ENCRUZILHADA/FOTOS/IMG_0671.jpg', year: '2024' }
];

// ============================================
// SÉRIE: ORI – QUARTINHAS
// ============================================
export const oriWorks: Work[] = [
  { id: 'ori-001', title: 'Andre Filúr – Ilumine seu Ori', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ilumine seu Ori_01.jpg', year: '2024' },
  { id: 'ori-002', title: 'Andre Filúr – Ori 01', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_01.jpg', year: '2024' },
  { id: 'ori-003', title: 'Andre Filúr – Ori 02', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_02.jpg', year: '2024' },
  { id: 'ori-004', title: 'Andre Filúr – Ori 03', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_03.jpg', year: '2024' },
  { id: 'ori-005', title: 'Andre Filúr – Ori 04', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_04.jpg', year: '2024' },
  { id: 'ori-006', title: 'Andre Filúr – Ori 05', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_05.jpg', year: '2024' },
  { id: 'ori-007', title: 'Andre Filúr – Ori 06', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_06.jpg', year: '2024' },
  { id: 'ori-008', title: 'Andre Filúr – Ori 07', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_07.jpg', year: '2024' },
  { id: 'ori-009', title: 'Andre Filúr – Ori 08', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_08.jpg', year: '2024' },
  { id: 'ori-010', title: 'Andre Filúr – Ori 09', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_09.jpg', year: '2024' },
  { id: 'ori-011', title: 'Andre Filúr – Ori 10', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_10.jpg', year: '2024' },
  { id: 'ori-012', title: 'Andre Filúr – Ori 11', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Ori_11.jpg', year: '2024' },
  { id: 'ori-013', title: 'Andre Filúr – Quartinha do capital', category: 'ori', image: '/Obras/Séries/ORI/Andre Filúr_Quartinha do capital.jpg', year: '2024' }
];

// ============================================
// GRAVURA
// ============================================
export const gravuraWorks: Work[] = [
  { id: 'grav-001', title: 'Print 01', category: 'gravura', image: '/Obras/Gravura/Andre Filúr_Print_01.jpg', year: '2024' },
  { id: 'grav-002', title: 'Print 02', category: 'gravura', image: '/Obras/Gravura/Andre Filúr_Print_02.jpg', year: '2024' },
  { id: 'grav-003', title: 'Print 03', category: 'gravura', image: '/Obras/Gravura/Andre Filúr_Print_03.jpg', year: '2024' },
  { id: 'grav-004', title: 'Print 04', category: 'gravura', image: '/Obras/Gravura/Andre Filúr_Print_04.jpg', year: '2024' },
  { id: 'grav-005', title: 'Print 05', category: 'gravura', image: '/Obras/Gravura/Andre Filúr_Print_05.jpg', year: '2024' }
];

// ============================================
// MURAL
// ============================================
export const muralWorks: Work[] = [
  { id: 'mur-001', title: 'Mural 01', category: 'mural', image: '/Obras/Mural/Andre Filúr_Mural_01.jpg', year: '2024' },
  { id: 'mur-002', title: 'Mural 02', category: 'mural', image: '/Obras/Mural/Andre Filúr_Mural_02.jpg', year: '2024' },
  { id: 'mur-003', title: 'Mural 03', category: 'mural', image: '/Obras/Mural/Andre Filúr_Mural_03.jpg', year: '2024' }
];

// ============================================
// PINTURA
// ============================================
export const pinturaWorks: Work[] = [
  { id: 'pint-001', title: 'Obra 01', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/Andre Filúr_Obra_01.jpg', year: '2024' },
  { id: 'pint-002', title: 'Obras 02', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/Andre Filúr_Obras_02.jpg', year: '2024' },
  { id: 'pint-003', title: 'Pintura 0471', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0471.PNG', year: '2024' },
  { id: 'pint-004', title: 'Pintura 0472', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0472.PNG', year: '2024' },
  { id: 'pint-005', title: 'Pintura 0473', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0473.PNG', year: '2024' },
  { id: 'pint-006', title: 'Pintura 0474', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0474.PNG', year: '2024' },
  { id: 'pint-007', title: 'Pintura 0475', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0475.PNG', year: '2024' },
  { id: 'pint-008', title: 'Pintura 0476', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0476.PNG', year: '2024' },
  { id: 'pint-009', title: 'Pintura 0477', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0477.PNG', year: '2024' },
  { id: 'pint-010', title: 'Pintura 0479', category: 'pintura', image: '/Obras/Pintura/FOTOS QUADROS/IMG_0479.PNG', year: '2024' }
];

// ============================================
// EXPOSIÇÕES
// ============================================
export const exposicoesWorks: Work[] = [
  { id: 'exp-001', title: 'Agentes da Arte 01', category: 'exposicoes', image: '/Obras/Exposição/AGENTES DA ARTE/34B6FEFE-905D-443E-80EA-82C766E20FDD.JPG', year: '2024' },
  { id: 'exp-002', title: 'Agentes da Arte 02', category: 'exposicoes', image: '/Obras/Exposição/AGENTES DA ARTE/3B7282F6-6387-494C-86E4-A38CA7FED6C4.JPG', year: '2024' },
  { id: 'exp-003', title: 'Agentes da Arte 03', category: 'exposicoes', image: '/Obras/Exposição/AGENTES DA ARTE/a7159946-e046-4e55-bfb1-f3a9c7186b0e.JPG', year: '2024' },
  { id: 'exp-004', title: 'Agentes da Arte 04', category: 'exposicoes', image: '/Obras/Exposição/AGENTES DA ARTE/c829e381-95de-4586-b7cb-aca5c3298f32.JPG', year: '2024' },
  { id: 'exp-005', title: 'Podpah 01', category: 'exposicoes', image: '/Obras/Exposição/PODPAH/64BEDCBD-60ED-4BB2-80A1-9AAEE475DCE9.JPG', year: '2024' },
  { id: 'exp-006', title: 'Podpah 02', category: 'exposicoes', image: '/Obras/Exposição/PODPAH/DSC09867.JPEG', year: '2024' },
  { id: 'exp-007', title: 'Podpah 03', category: 'exposicoes', image: '/Obras/Exposição/PODPAH/DSC09905.JPEG', year: '2024' },
  { id: 'exp-008', title: 'Podpah 04', category: 'exposicoes', image: '/Obras/Exposição/PODPAH/DSC09923.JPEG', year: '2024' },
  { id: 'exp-009', title: 'Podpah 05', category: 'exposicoes', image: '/Obras/Exposição/PODPAH/DSC09927.JPEG', year: '2024' },
  { id: 'exp-010', title: 'Podpah 06', category: 'exposicoes', image: '/Obras/Exposição/PODPAH/DSC09933.JPEG', year: '2024' },
  { id: 'exp-011', title: 'Podpah 07', category: 'exposicoes', image: '/Obras/Exposição/PODPAH/DSC09964.JPEG', year: '2024' }
];

// ============================================
// VÍDEOS DO VIMEO
// ============================================
export const vimeoVideos = [
  { id: "1194787179", title: "Registro em Vídeo 1" },
  { id: "1194787180", title: "Registro em Vídeo 2" },
  { id: "1194787345", title: "Registro em Vídeo 3" },
  { id: "1194787331", title: "Registro em Vídeo 4" },
  { id: "1194787178", title: "Registro em Vídeo 5" },
  { id: "1194787252", title: "Registro em Vídeo 6" },
  { id: "1194787177", title: "Registro em Vídeo 7" },
];

// ============================================
// EXPORTAÇÃO CONSOLIDADA
// ============================================
export const allWorks: Work[] = [
  ...carranqueiraWorks,
  ...encruzilhadaWorks,
  ...oriWorks,
  ...gravuraWorks,
  ...muralWorks,
  ...pinturaWorks,
  ...exposicoesWorks,
];

// Agrupar obras por categoria
export const worksByCategory = {
  carranqueira: carranqueiraWorks,
  encruzilhada: encruzilhadaWorks,
  ori: oriWorks,
  exposicoes: exposicoesWorks,
  gravura: gravuraWorks,
  mural: muralWorks,
  pintura: pinturaWorks,
};

// Nomes das séries para i18n
export const seriesNames = {
  pt: {
    carranqueira: 'Carranqueira',
    encruzilhada: 'Encruzilhada',
    ori: 'Ori',
    exposicoes: 'Exposições',
    gravura: 'Gravura',
    mural: 'Mural',
    pintura: 'Pintura',
  },
  en: {
    carranqueira: 'Carranqueira',
    encruzilhada: 'Crossroads',
    ori: 'Ori',
    exposicoes: 'Exhibitions',
    gravura: 'Engraving',
    mural: 'Mural',
    pintura: 'Painting',
  },
};