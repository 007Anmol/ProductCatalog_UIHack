import React from 'react';
import { X, Star, ShoppingCart, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <span className="text-2xl font-bold text-violet-400">${product.price}</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-white">{product.rating}</span>
            </div>
            <span className="mx-4 text-gray-500">|</span>
            <div className="flex items-center text-gray-300">
              <Package className="w-5 h-5 mr-1" />
              {product.stock} in stock
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};