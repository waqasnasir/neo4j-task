import { useState, useCallback, useEffect } from 'react';

export const useFilters = (priceRange) => {
  const [filters, setFilters] = useState({
    priceRange: priceRange,
    categories: [],
    minRating: 0,
    inStockOnly: false
  });

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      priceRange: priceRange
    }));
  }, [priceRange]);

  const handlePriceRangeChange = useCallback((field, value) => {
    // Convert to number, default to 0 if empty or invalid
    const numValue = value === '' ? 0 : parseInt(value, 10) || 0;
    
    setFilters(prev => {
      const newPriceRange = {
        ...prev.priceRange,
        [field]: numValue
      };
      
      // Ensure max is not less than min
      if (field === 'min' && newPriceRange.max > 0 && newPriceRange.min > newPriceRange.max) {
        newPriceRange.max = newPriceRange.min;
      }
      if (field === 'max' && newPriceRange.min > 0 && newPriceRange.max < newPriceRange.min) {
        newPriceRange.min = newPriceRange.max;
      }
      
      return {
        ...prev,
        priceRange: newPriceRange
      };
    });
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  }, []);

  const handleRatingChange = useCallback((rating) => {
    setFilters(prev => ({
      ...prev,
      minRating: rating
    }));
  }, []);

  const handleStockFilterChange = useCallback(() => {
    setFilters(prev => ({
      ...prev,
      inStockOnly: !prev.inStockOnly
    }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters({
      priceRange: priceRange,
      categories: [],
      minRating: 0,
      inStockOnly: false
    });
  }, [priceRange]);

  return {
    filters,
    handlePriceRangeChange,
    handleCategoryChange,
    handleRatingChange,
    handleStockFilterChange,
    clearAllFilters
  };
};
