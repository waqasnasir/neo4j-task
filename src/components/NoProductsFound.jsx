import React from 'react';
import { NoResultsIcon } from '../svg';

const NoProductsFound = ({ onClearAllFilters }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            <span className="text-primary-600 font-bold">0</span> products found
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            No results match your current filters
          </p>
        </div>
      </div>

      <div className="card p-12 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <NoResultsIcon className="w-12 h-12 text-gray-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          No products found
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Try adjusting your search terms or filters to find what you're looking for. 
          You can also clear all filters to see all available products.
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={onClearAllFilters}
            className="btn-primary"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoProductsFound;
