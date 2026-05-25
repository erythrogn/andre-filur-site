export interface Work {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  image?: string;
  imagePath?: string;
  year?: string;
  description?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  type: string;
  year: string;
  location: string;
}