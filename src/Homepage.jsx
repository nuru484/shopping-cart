import { Link } from 'react-router-dom';
import Products from './Products';
import '../src/styles/homepage.css';

const Homepage = () => {
  return (
    <>
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item logo">SHOPTEST</li>
          <li className="nav-item">
            <input
              type="search"
              name="search"
              id="search-input"
              className="search-box"
              placeholder="Search products..."
            />
          </li>
          <div>
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/shopping-page'} className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item cart">
              <img
                src="../src/assets/icons8-cart-50.png"
                alt="cart icon"
                width={'30px'}
              />
            </li>
          </div>
        </ul>
      </nav>
      <main className="main-content">
        <h1 id="main-heading">
          Your one-stop destination for all your shopping needs
        </h1>
        <p id="main-description">
          Discover an unparalleled shopping experience with our extensive
          selection of products, unbeatable prices, and exceptional customer
          service. Shop now and transform your shopping journey with us.
        </p>
        <Link to={'/shopping-page'} className="shop-button">
          Shop Now
        </Link>
        <div className="featured-items">
          <h1 id="product-list-heading">Featured Items</h1>
          <Products numberOfItems={4} />
        </div>
      </main>
      <footer className="main-footer">
        <div className="footer-content">
          <p className="company-name">Shop Test</p>
          <p className="copyright">&copy; 2024 All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/nuru484" className="source-code-link">
            <img
              src="../src/assets/icons8-github-24.png"
              alt="github icon"
              width={'25px'}
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
