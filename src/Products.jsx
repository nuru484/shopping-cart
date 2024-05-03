import { useState, useEffect } from 'react';
import { ProductCard, ProductCardDetails } from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=5'
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
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return selectedProduct ? (
    <div>
      <ProductCardDetails product={selectedProduct} />
      <button onClick={() => setSelectedProduct(null)}>Back to list</button>
    </div>
  ) : (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => setSelectedProduct(product)}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
