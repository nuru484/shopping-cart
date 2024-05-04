import { useState, useEffect } from 'react';
import { ProductCard, ProductCardDetails } from './ProductCard';
import '../src/styles/products.css';

const Products = ({ numberOfItems }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=${numberOfItems}`
        );
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return selectedProduct ? (
    <>
      <ProductCardDetails product={selectedProduct} />
      <button className="back-button" onClick={() => setSelectedProduct(null)}>
        Back to list
      </button>
    </>
  ) : (
    <div className="product-list">
      <ul className="products">
        {products.map((product) => (
          <li
            key={product.id}
            className="product-item"
            onClick={() => setSelectedProduct(product)}
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
