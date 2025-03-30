import React, { useState, useMemo } from 'react';
import { Layout, ArrowUpDown } from 'lucide-react';
import { products } from './data';
import { Product, FilterState, SortOption } from './types';
import { ProductCard } from './components/ProductCard';
import { Filters } from './components/Filters';
import { ProductModal } from './components/ProductModal';

function App() {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    minPrice: 0,
    maxPrice: 0,
    minRating: 0,
    searchQuery: '',
    tags: [],
  });

  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(() => 
    Array.from(new Set(products.map(p => p.category))),
    []
  );

  const availableTags = useMemo(() => 
    Array.from(new Set(products.flatMap(p => p.tags))),
    []
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        if (filters.category && product.category !== filters.category) return false;
        if (filters.minPrice && product.price < filters.minPrice) return false;
        if (filters.maxPrice && product.price > filters.maxPrice) return false;
        if (filters.minRating && product.rating < filters.minRating) return false;
        if (filters.tags.length && !filters.tags.every(tag => product.tags.includes(tag))) return false;
        if (filters.searchQuery) {
          const search = filters.searchQuery.toLowerCase();
          return (
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search) ||
            product.tags.some(tag => tag.toLowerCase().includes(search))
          );
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layout className="w-8 h-8 text-violet-400" />
              <h1 className="text-2xl font-bold">Product Catalog</h1>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-gray-300">Sort by:</label>
              <select
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-violet-600 focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="name">Name</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside>
            <Filters
              filters={filters}
              onFilterChange={setFilters}
              availableTags={availableTags}
              categories={categories}
            />
          </aside>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={setSelectedProduct}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products match your filters</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;