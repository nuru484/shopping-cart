import { useState, useEffect } from 'react';
import NavBar from './NavBar';

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
      </ul>
    ) : (
      <p>Your cart is empty.</p>
    );
  };

  return (
    <>
      <NavBar />
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {renderCartItems()}
      </div>
    </>
  );
};

export default CartPage;
