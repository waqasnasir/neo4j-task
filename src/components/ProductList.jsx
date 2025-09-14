import React from 'react';
import ProductCard from './ProductCard';
import NoProductsFound from './NoProductsFound';

const ProductList = ({ filteredProducts, hasActiveFilters, onClearAllFilters }) => {
  if (filteredProducts.length === 0) {
    return <NoProductsFound onClearAllFilters={onClearAllFilters} />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          <span className="text-primary-600 font-bold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''} found
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {hasActiveFilters ? 'Filtered results' : 'Showing all results'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
