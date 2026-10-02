export interface SiteConfig {
  nome: string;
  instagram: string;
  instagramUrl: string;
  whatsappNumber: string;
  whatsappMessage: string;
  checkoutUrl: string;
  videoVslUrl: string;
  videoPosterUrl: string;
  precoOriginal: string;
  precoOferta: string;
  precoParcelado: string;
  garantiaDias: number;
  expertPhotoUrl: string;
  expertBio: string;
}

export interface CourseModule {
  numero: string;
  titulo: string;
  descricao: string;
  iconName: string;
  duracaoAprox?: string;
}

export interface ResultItem {
  id: string;
  titulo: string;
  categoria: 'antes_depois' | 'procedimento' | 'linha_frontal' | 'clientes' | 'bastidores';
  legenda: string;
  imageUrl: string;
  detalhes?: string;
}

export interface TestimonialItem {
  id: string;
  nome: string;
  cidade: string;
  depoimento: string;
  resultado: string;
  avatarUrl: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}
