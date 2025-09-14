import React from 'react';

const PriceRangeFilter = ({ priceRange, onPriceRangeChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Min Price
          </label>
          <input
            type="number"
            placeholder="0"
            value={priceRange.min ?? ''}
            onChange={(e) => onPriceRangeChange('min', e.target.value)}
            min="0"
            step="1"
            className="input-field text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Max Price
          </label>
          <input
            type="number"
            placeholder="1000"
            value={priceRange.max ?? ''}
            onChange={(e) => onPriceRangeChange('max', e.target.value)}
            min={priceRange.min ?? 0}
            step="1"
            className="input-field text-sm"
          />
        </div>
      </div>
      {priceRange.min > 0 && priceRange.max > 0 && priceRange.min > priceRange.max && (
        <div className="text-xs text-warning-600 bg-warning-50 p-2 rounded-md">
          Max price will be adjusted to match min price
        </div>
      )}
    </div>
  );
};

export default PriceRangeFilter;
