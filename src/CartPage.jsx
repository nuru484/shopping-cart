import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../src/styles/cartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    const items = JSON.parse(localStorage.getItem('cart')) || {};
    setCartItems(items);
  };

  const handleRemoveItem = (id) => {
    let updatedCart = { ...cartItems };
    delete updatedCart[id];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const renderCartItems = () => {
    return Object.keys(cartItems).length > 0 ? (
      <ul className="cart-items-list">
        {Object.values(cartItems).map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.description}
              className="cart-item-image"
              width="100"
            />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="remove-item-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
        <div className="checkout-details">
          <div>Total Amount: $124</div>
          <button className="checkout-button">CheckOut</button>
        </div>
      </ul>
    ) : (
      <p>Your cart is empty.</p>
    );
  };

  return (
    <>
      <NavBar />
      <main>
        <div className="cart-container">
          <h2>Items in Cart</h2>
          {renderCartItems()}
        </div>
      </main>
    </>
  );
};

export default CartPage;
