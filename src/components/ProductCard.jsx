import React from 'react';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="card-hover group overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium text-sm bg-error-600 px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors h-10 flex items-start">
          {product.name}
        </h3>

        <div className="flex items-center">
          <StarRating 
            rating={product.rating} 
            showText={true} 
            reviews={product.reviews}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </div>
          <div className={`flex items-center space-x-2 text-sm font-medium ${
            product.inStock ? 'text-success-600' : 'text-error-600'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              product.inStock ? 'bg-success-500' : 'bg-error-500'
            }`}></div>
            <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
