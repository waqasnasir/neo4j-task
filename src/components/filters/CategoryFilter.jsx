import React from 'react';

const CategoryFilter = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Categories</h3>
      <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
        {categories.map(category => (
          <label key={category} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="filter-checkbox"
            />
            <span className="text-sm text-gray-700 flex-1">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
