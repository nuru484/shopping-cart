import { useState } from 'react';
import '../src/styles/productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <span>
        <img
          src={product.image}
          alt={product.description}
          width="100px"
          className="product-image"
        />
      </span>

      <h1 className="product-title">{product.title}</h1>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

const ProductCardDetails = ({ product }) => {
  const [initialInputValue, setInitialInputValue] = useState(0);

  return (
    <div className="product-details" id={`product-details-${product.id}`}>
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.description}
          width="100px"
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">${product.price}</p>
        <div className="product-quantity">
          <button
            className="quantity-decrease"
            onClick={() => {
              setInitialInputValue((prevValue) =>
                prevValue > 0 ? prevValue - 1 : prevValue
              );
            }}
          >
            Decrease
          </button>
          <input
            type="text"
            name="counter"
            min="0"
            max="10"
            value={initialInputValue}
            step="1"
            className="quantity-input"
          />

          <button
            className="quantity-increase"
            onClick={() => {
              setInitialInputValue((prevValue) => prevValue + 1);
            }}
          >
            Increase
          </button>
        </div>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
};

export { ProductCard, ProductCardDetails };
