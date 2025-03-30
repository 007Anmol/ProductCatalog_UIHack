export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  tags: string[];
  stock: number;
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'name';

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  searchQuery: string;
  tags: string[];
}