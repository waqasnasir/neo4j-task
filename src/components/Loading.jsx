import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
              </div>
            </div>
            <div className="w-full sm:w-96">
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Skeleton */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="card p-6 animate-pulse">
              <div className="flex items-center justify-between mb-6">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="space-y-2">
                      {i === 0 ? (
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-10 bg-gray-200 rounded"></div>
                          <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                      ) : (
                        [...Array(3)].map((_, j) => (
                          <div key={j} className="h-8 bg-gray-200 rounded"></div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Skeleton */}
          <main className="flex-1 min-w-0">
            <div className="space-y-6">
              {/* Results Header Skeleton */}
              <div>
                <div className="h-6 bg-gray-200 rounded w-48 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>

              {/* Product Grid Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card-hover overflow-hidden animate-pulse">
                    {/* Product Image Skeleton */}
                    <div className="relative aspect-square overflow-hidden bg-gray-200">
                      <div className="absolute top-3 left-3 w-16 h-6 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Product Info Skeleton */}
                    <div className="p-4 space-y-3">
                      {/* Product Name Skeleton */}
                      <div className="h-10 bg-gray-200 rounded"></div>

                      {/* Rating Skeleton */}
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, j) => (
                            <div key={j} className="w-4 h-4 bg-gray-200 rounded"></div>
                          ))}
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>

                      {/* Price and Stock Skeleton */}
                      <div className="flex items-center justify-between">
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Loading;
