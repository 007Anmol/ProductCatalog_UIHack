import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded-full text-sm">
          ${product.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-300">{product.rating}</span>
          <span className="ml-auto text-gray-400">{product.stock} in stock</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {product.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};