import React from 'react';

const RatingFilter = ({ minRating, onRatingChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Rating</h3>
      <div className="space-y-2">
        {[4, 3, 2, 1].map(rating => (
          <label key={rating} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
            <input
              type="radio"
              name="rating"
              checked={minRating === rating}
              onChange={() => onRatingChange(rating)}
              className="filter-radio"
            />
            <span className="text-sm text-gray-700 flex-1">{rating} stars & up</span>
            {minRating === rating && (
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-3 h-3 ${i < rating ? 'text-warning-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}
          </label>
        ))}
        <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
          <input
            type="radio"
            name="rating"
            checked={minRating === 0}
            onChange={() => onRatingChange(0)}
            className="filter-radio"
          />
          <span className="text-sm text-gray-700 flex-1">All ratings</span>
        </label>
      </div>
    </div>
  );
};

export default RatingFilter;
