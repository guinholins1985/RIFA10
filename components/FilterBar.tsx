import React from 'react';
import { FILTER_ICON } from '../Icons';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSearch: (term: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onSelectCategory, onSearch }) => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {FILTER_ICON}
          <select 
            className="p-2 rounded border border-gray-300"
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value)}
          >
            <option value="Todas">Todas as Categorias</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <input 
          type="text"
          placeholder="Buscar por título..."
          className="p-2 rounded border border-gray-300 w-1/3"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterBar;
