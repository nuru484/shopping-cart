import { useState } from 'react';
import useFetchProducts from './FetchProduct';
import { ProductDetails } from './ProductDetails';
import Product from './Product';
import { useSearch } from './SearchContext';
const DisplayProducts = ({ numberOfItems }) => {
  const { products, isLoading, error } = useFetchProducts({ numberOfItems });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { searchTerm } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return selectedProduct ? (
    <>
      <ProductDetails product={selectedProduct} />
      <button className="back-button" onClick={() => setSelectedProduct(null)}>
        Back to list
      </button>
    </>
  ) : (
    <div className="product-list">
      <ul className="products">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="product-item"
            onClick={() => setSelectedProduct(product)}
          >
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayProducts;
