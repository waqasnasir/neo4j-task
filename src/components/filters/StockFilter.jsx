import React from 'react';

const StockFilter = ({ inStockOnly, onStockFilterChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Availability</h3>
      <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={onStockFilterChange}
          className="filter-checkbox"
        />
        <span className="text-sm text-gray-700 flex-1">In Stock Only</span>
      </label>
    </div>
  );
};

export default StockFilter;
