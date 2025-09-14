import { useState, useEffect } from 'react';
import { ProductAPI } from './external-api/product-api';
import Header from './components/Header';
import ProductFilters from './components/ProductFilters';
import ProductList from './components/ProductList';
import Loading from './components/Loading';
import Error from './components/Error';
import { useFilters } from './hooks/useFilters';
import { useProductFilter } from './hooks/useProductFilter';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData, priceRangeData] = await Promise.all([
          ProductAPI.getProducts(),
          ProductAPI.getCategories(),
          ProductAPI.getPriceRange()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
        setPriceRange(priceRangeData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const {
    filters,
    handlePriceRangeChange,
    handleCategoryChange,
    handleRatingChange,
    handleStockFilterChange,
    clearAllFilters
  } = useFilters(priceRange);

  const filteredProducts = useProductFilter(products, searchTerm, filters);

  // Check if any filters are active
  const hasActiveFilters = searchTerm || 
    filters.categories.length > 0 || 
    filters.minRating > 0 || 
    filters.inStockOnly ||
    (filters.priceRange.min > priceRange.min) ||
    (filters.priceRange.max < priceRange.max);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleClearAllFilters = () => {
    setSearchTerm('');
    clearAllFilters();
  };

  const handleRetry = () => {
    window.location.reload();
  };


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onClearSearch={clearSearch}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
          <aside className="sm:w-64 lg:w-80 flex-shrink-0">
            <ProductFilters
              filters={filters}
              categories={categories}
              priceRange={priceRange}
              onPriceRangeChange={handlePriceRangeChange}
              onCategoryChange={handleCategoryChange}
              onRatingChange={handleRatingChange}
              onStockFilterChange={handleStockFilterChange}
              onClearAllFilters={handleClearAllFilters}
            />
          </aside>

          <main className="flex-1 min-w-0">
            {error ? (
              <Error error={error} onRetry={handleRetry} />
            ) : (
              <ProductList
                filteredProducts={filteredProducts}
                hasActiveFilters={hasActiveFilters}
                onClearAllFilters={handleClearAllFilters}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
