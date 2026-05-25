export interface Exhibition {
  id: string
  year: string
  name: string
  nameEn: string
  type: 'individual' | 'collective'
  location: string
  locationEn: string
  city: string
}

export const exhibitions: Exhibition[] = [
  {
    id: '1',
    year: '2024',
    name: 'Travessia: Matéria e Espírito',
    nameEn: 'Crossing: Matter and Spirit',
    type: 'individual',
    location: 'Galeria Arte Contemporânea',
    locationEn: 'Contemporary Art Gallery',
    city: 'São Paulo, Brasil',
  },
  {
    id: '2',
    year: '2024',
    name: 'Encruzilhadas Urbanas',
    nameEn: 'Urban Crossroads',
    type: 'collective',
    location: 'Museu de Arte Moderna',
    locationEn: 'Museum of Modern Art',
    city: 'Rio de Janeiro, Brasil',
  },
  {
    id: '3',
    year: '2023',
    name: 'Ori: Consciência e Ancestralidade',
    nameEn: 'Ori: Consciousness and Ancestry',
    type: 'individual',
    location: 'Centro Cultural',
    locationEn: 'Cultural Center',
    city: 'São Paulo, Brasil',
  },
  {
    id: '4',
    year: '2023',
    name: 'Coletiva: Vozes do Interior',
    nameEn: 'Group Show: Inner Voices',
    type: 'collective',
    location: 'Galeria Tempo',
    locationEn: 'Tempo Gallery',
    city: 'Belo Horizonte, Brasil',
  },
  {
    id: '5',
    year: '2022',
    name: 'Carranqueira: Guardiões do Rio',
    nameEn: 'Carranqueira: River Guardians',
    type: 'individual',
    location: 'Espaço Cultural São Francisco',
    locationEn: 'São Francisco Cultural Space',
    city: 'Salvador, Brasil',
  },
  {
    id: '6',
    year: '2022',
    name: 'Arte Contemporânea Brasileira',
    nameEn: 'Brazilian Contemporary Art',
    type: 'collective',
    location: 'Pinacoteca',
    locationEn: 'Pinacoteca',
    city: 'São Paulo, Brasil',
  },
]
