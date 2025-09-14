import React from 'react';
import { ErrorIcon } from '../svg';

const Error = ({ onRetry }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            <span className="text-primary-600 font-bold">0</span> products found
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Unable to load products
          </p>
        </div>
      </div>

      <div className="card p-12 text-center bg-error-50 border-error-200">
        <div className="w-24 h-24 mx-auto mb-6 bg-error-100 rounded-full flex items-center justify-center">
          <ErrorIcon className="w-12 h-12 text-error-600" />
        </div>
        
        <h3 className="text-xl font-semibold text-error-900 mb-3">
          Unable to load products
        </h3>
        
        <p className="text-error-700 mb-8 max-w-md mx-auto">
          There was a problem loading the products. This might be a temporary issue. 
          Please try again or contact support if the problem persists.
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={onRetry}
            className="bg-error-600 hover:bg-error-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
