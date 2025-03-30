import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { FilterState } from '../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableTags: string[];
  categories: string[];
}

export const Filters: React.FC<FiltersProps> = ({
  filters,
  onFilterChange,
  availableTags,
  categories
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-violet-600 focus:outline-none"
          value={filters.searchQuery}
          onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
        />
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-gray-300 block mb-2">Category</label>
            <select
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-violet-600 focus:outline-none"
              value={filters.category}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Price Range</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-violet-600 focus:outline-none"
                value={filters.minPrice || ''}
                onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-violet-600 focus:outline-none"
                value={filters.maxPrice || ''}
                onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Minimum Rating</label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              className="w-full accent-violet-600"
              value={filters.minRating}
              onChange={(e) => onFilterChange({ ...filters, minRating: Number(e.target.value) })}
            />
            <div className="text-gray-400 text-sm text-right">{filters.minRating} stars</div>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filters.tags.includes(tag)
                      ? 'bg-violet-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => {
                    const newTags = filters.tags.includes(tag)
                      ? filters.tags.filter(t => t !== tag)
                      : [...filters.tags, tag];
                    onFilterChange({ ...filters, tags: newTags });
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};