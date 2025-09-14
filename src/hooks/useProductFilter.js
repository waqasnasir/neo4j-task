import { useState, useEffect, useCallback } from 'react';

export const useProductFilter = (products, searchTerm, filters) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hasFiltered, setHasFiltered] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  const filterProducts = useCallback(() => {
    let filtered = products.filter(product => {
      // Search filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Price range filter
      if (filters.priceRange.min > 0 && product.price < filters.priceRange.min) {
        return false;
      }
      if (filters.priceRange.max > 0 && product.price > filters.priceRange.max) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Rating filter
      if (product.rating < filters.minRating) {
        return false;
      }

      // Stock filter
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
    scrollToTop();
    setHasFiltered(true);
  }, [searchTerm, filters, products, scrollToTop, hasFiltered]);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filterProducts();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filterProducts]);

  return filteredProducts;
};
