import { useState } from 'react';
import '../src/styles/productCard.css';

const ProductDetails = ({ product }) => {
  const [initialInputValue, setInitialInputValue] = useState(1);

  const handleInputValueChange = (event) => {
    setInitialInputValue(parseInt(event.target.value, 10) || 0);
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const productID = product.id.toString();

    if (cart[productID]) {
      cart[productID].quantity += initialInputValue;
    } else {
      cart[productID] = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        quantity: initialInputValue,
      };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

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
                prevValue > 1 ? prevValue - 1 : prevValue
              );
            }}
          >
            Decrease
          </button>
          <input
            type="text"
            name="counter"
            value={initialInputValue}
            onChange={handleInputValueChange}
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
        <button className="add-to-cart" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export { ProductDetails };
