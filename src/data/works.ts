// src/data/works.ts
// Estrutura de dados das obras organizadas por série

export type Category = 'carranqueira' | 'encruzilhada' | 'ori' | 'exposicoes';

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
];

// ============================================
// SÉRIE: CARRANQUEIRA
// ============================================
export const carranqueiraWorks: Work[] = [
  {
    id: 'car-001',
    title: 'Andre Filúr – Aimê',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Aimê.jpg',
    year: '2024',
  },
  {
    id: 'car-002',
    title: 'Andre Filúr – Araci',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Araci.jpg',
    year: '2024',
  },
  {
    id: 'car-003',
    title: 'Andre Filúr – Jurema',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Jurema.jpg',
    year: '2024',
  },
  {
    id: 'car-004',
    title: 'Andre Filúr – Kauana',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Kauana.jpg',
    year: '2024',
  },
  {
    id: 'car-005',
    title: 'Andre Filúr – Obra Sem Título 01',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Obra_Sem Título_01.jpg',
    year: '2024',
  },
  {
    id: 'car-006',
    title: 'Andre Filúr – Obra Sem Título 02',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Obra_Sem Título_02.jpg',
    year: '2024',
  },
  {
    id: 'car-007',
    title: 'Andre Filúr – Arany',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Obras_Arany.jpg',
    year: '2024',
  },
  {
    id: 'car-008',
    title: 'Andre Filúr – Ybyara 02',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Ybyara_02.jpg',
    year: '2024',
  },
  {
    id: 'car-009',
    title: 'Andre Filúr – Ybyara',
    category: 'carranqueira',
    image: '/images/Obras/Séries/CARRANQUEIRAS/Andre Filúr_Ybyara.jpg',
    year: '2024',
  }
];

// ============================================
// SÉRIE: ENCRUZILHADA
// ============================================
export const encruzilhadaWorks: Work[] = [
  {
    id: 'enc-001',
    title: 'Andre Filúr – Encruzilhada 01',
    category: 'encruzilhada',
    image: '/images/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_01.jpg',
    year: '2024',
  },
  {
    id: 'enc-002',
    title: 'Andre Filúr – Encruzilhada 02',
    category: 'encruzilhada',
    image: '/images/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_02.jpg',
    year: '2024',
  },
  {
    id: 'enc-003',
    title: 'Andre Filúr – Encruzilhada 03',
    category: 'encruzilhada',
    image: '/images/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_03.jpg',
    year: '2024',
  },
  {
    id: 'enc-004',
    title: 'Andre Filúr – Encruzilhada 04',
    category: 'encruzilhada',
    image: '/images/Obras/Séries/ENCRUZILHADA/FOTOS/Andre Filúr_Encruzilhada_04.PNG',
    year: '2024',
  },
  {
    id: 'enc-005',
    title: 'IMG 0671',
    category: 'encruzilhada',
    image: '/images/Obras/Séries/ENCRUZILHADA/FOTOS/IMG_0671.jpg',
    year: '2024',
  }
];

// ============================================
// SÉRIE: ORI – QUARTINHAS
// ============================================
export const oriWorks: Work[] = [
  {
    id: 'ori-001',
    title: 'Andre Filúr – Ilumine seu Ori',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ilumine seu Ori_01.jpg',
    year: '2024',
  },
  {
    id: 'ori-002',
    title: 'Andre Filúr – Ori 01',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_01.jpg',
    year: '2024',
  },
  {
    id: 'ori-003',
    title: 'Andre Filúr – Ori 02',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_02.jpg',
    year: '2024',
  },
  {
    id: 'ori-004',
    title: 'Andre Filúr – Ori 03',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_03.jpg',
    year: '2024',
  },
  {
    id: 'ori-005',
    title: 'Andre Filúr – Ori 04',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_04.jpg',
    year: '2024',
  },
  {
    id: 'ori-006',
    title: 'Andre Filúr – Ori 05',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_05.jpg',
    year: '2024',
  },
  {
    id: 'ori-007',
    title: 'Andre Filúr – Ori 06',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_06.jpg',
    year: '2024',
  },
  {
    id: 'ori-008',
    title: 'Andre Filúr – Ori 07',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_07.jpg',
    year: '2024',
  },
  {
    id: 'ori-009',
    title: 'Andre Filúr – Ori 08',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_08.jpg',
    year: '2024',
  },
  {
    id: 'ori-010',
    title: 'Andre Filúr – Ori 09',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_09.jpg',
    year: '2024',
  },
  {
    id: 'ori-011',
    title: 'Andre Filúr – Ori 10',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_10.jpg',
    year: '2024',
  },
  {
    id: 'ori-012',
    title: 'Andre Filúr – Ori 11',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Ori_11.jpg',
    year: '2024',
  },
  {
    id: 'ori-013',
    title: 'Andre Filúr – Quartinha do capital',
    category: 'ori',
    image: '/images/Obras/Séries/ORI/Andre Filúr_Quartinha do capital.jpg',
    year: '2024',
  }
];

// ============================================
// EXPOSIÇÕES
// ============================================
export const exposicoesWorks: Work[] = [
  {
    id: 'exp-001',
    title: 'Agentes da Arte 01',
    category: 'exposicoes',
    image: '/images/Obras/Exposição/AGENTES DA ARTE/34B6FEFE-905D-443E-80EA-82C766E20FDD.JPG',
    year: '2024',
  },
  {
    id: 'exp-002',
    title: 'Agentes da Arte 02',
    category: 'exposicoes',
    image: '/images/Obras/Exposição/AGENTES DA ARTE/3B7282F6-6387-494C-86E4-A38CA7FED6C4.JPG',
    year: '2024',
  },
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
  ...exposicoesWorks,
];

// Agrupar obras por categoria
export const worksByCategory = {
  carranqueira: carranqueiraWorks,
  encruzilhada: encruzilhadaWorks,
  ori: oriWorks,
  exposicoes: exposicoesWorks,
};

// Nomes das séries para i18n
export const seriesNames = {
  pt: {
    carranqueira: 'Carranqueira',
    encruzilhada: 'Série Encruzilhada',
    ori: 'Ori – Quartinhas',
    exposicoes: 'Exposições',
  },
  en: {
    carranqueira: 'Carranqueira',
    encruzilhada: 'Crossroads Series',
    ori: 'Ori – Quartinhas',
    exposicoes: 'Exhibitions',
  },
};