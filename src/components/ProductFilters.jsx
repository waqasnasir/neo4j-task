import React from 'react';
import { 
  PriceRangeFilter, 
  CategoryFilter, 
  RatingFilter, 
  StockFilter 
} from './filters';

const ProductFilters = ({ 
  filters, 
  categories, 
  onPriceRangeChange, 
  onCategoryChange, 
  onRatingChange, 
  onStockFilterChange, 
  onClearAllFilters 
}) => {
  return (
    <aside className="space-y-6">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <button
            onClick={onClearAllFilters}
            className="btn-ghost text-sm"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-6">
          <PriceRangeFilter 
            priceRange={filters.priceRange}
            onPriceRangeChange={onPriceRangeChange}
          />

          <CategoryFilter 
            categories={categories}
            selectedCategories={filters.categories}
            onCategoryChange={onCategoryChange}
          />

          <RatingFilter 
            minRating={filters.minRating}
            onRatingChange={onRatingChange}
          />

          <StockFilter 
            inStockOnly={filters.inStockOnly}
            onStockFilterChange={onStockFilterChange}
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;
