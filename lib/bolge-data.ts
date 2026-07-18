export interface Bolge {
  slug: string;
  name: string;
  city: string;
}

export const bolgeler: Bolge[] = [
  // Kocaeli İlçeleri
  { slug: "kocaeli", name: "Kocaeli", city: "Kocaeli" },
  { slug: "gebze", name: "Gebze", city: "Kocaeli" },
  { slug: "izmit", name: "İzmit", city: "Kocaeli" },
  { slug: "darica", name: "Darıca", city: "Kocaeli" },
  { slug: "cayirova", name: "Çayırova", city: "Kocaeli" },
  { slug: "dilovasi", name: "Dilovası", city: "Kocaeli" },
  { slug: "korfez", name: "Körfez", city: "Kocaeli" },
  { slug: "derince", name: "Derince", city: "Kocaeli" },
  { slug: "kartepe", name: "Kartepe", city: "Kocaeli" },
  { slug: "golcuk", name: "Gölcük", city: "Kocaeli" },
  { slug: "karamursel", name: "Karamürsel", city: "Kocaeli" },
  { slug: "kandira", name: "Kandıra", city: "Kocaeli" },
  { slug: "basiskele", name: "Başiskele", city: "Kocaeli" },

  // İstanbul (Popüler)
  { slug: "istanbul", name: "İstanbul", city: "İstanbul" },
  { slug: "tuzla", name: "Tuzla", city: "İstanbul" },
  { slug: "pendik", name: "Pendik", city: "İstanbul" },
  { slug: "kartal", name: "Kartal", city: "İstanbul" },
  { slug: "kadikoy", name: "Kadıköy", city: "İstanbul" },
  { slug: "besiktas", name: "Beşiktaş", city: "İstanbul" },
  { slug: "sisli", name: "Şişli", city: "İstanbul" },
  { slug: "maltepe", name: "Maltepe", city: "İstanbul" },
  { slug: "atasehir", name: "Ataşehir", city: "İstanbul" },
  { slug: "umraniye", name: "Ümraniye", city: "İstanbul" },
];
