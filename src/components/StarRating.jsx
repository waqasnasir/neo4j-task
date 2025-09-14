import React from 'react';
import { StarIcon } from '../svg';

const StarRating = ({ rating, size = 'default', showText = false, reviews = null, className = '' }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon key={i} filled={true} className={`${className} star-filled`} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarIcon key="half" half={true} className={`${className} star-filled`} />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} filled={false} className={`${className} star-empty`} />
      );
    }

    return stars;
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <div className="flex space-x-0.5">
        {renderStars()}
      </div>
      {showText && (
        <span className="text-sm text-gray-600 ml-1">
          {rating} {reviews && `(${reviews.toLocaleString()})`}
        </span>
      )}
    </div>
  );
};

export default StarRating;
