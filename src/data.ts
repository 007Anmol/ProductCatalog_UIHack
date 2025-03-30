import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-fidelity audio with active noise cancellation and 30-hour battery life.',
    price: 299.99,
    category: 'Electronics',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    tags: ['wireless', 'audio', 'premium'],
    stock: 15
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart monitoring, and smartphone notifications.',
    price: 199.99,
    category: 'Electronics',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    tags: ['smartwatch', 'fitness', 'tech'],
    stock: 25
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Premium mesh back chair with lumbar support and adjustable features.',
    price: 349.99,
    category: 'Furniture',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800',
    tags: ['office', 'ergonomic', 'furniture'],
    stock: 8
  },
  {
    id: '4',
    name: 'Ultra-wide Monitor',
    description: '34-inch curved display perfect for productivity and gaming.',
    price: 699.99,
    category: 'Electronics',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    tags: ['monitor', 'gaming', 'ultrawide'],
    stock: 5
  },
  {
    id: '5',
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with custom switches.',
    price: 159.99,
    category: 'Electronics',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800',
    tags: ['keyboard', 'gaming', 'mechanical'],
    stock: 20
  }
];