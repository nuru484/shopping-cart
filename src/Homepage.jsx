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
            <li className="nav-item cart">Cart</li>
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
        <button className="shop-button">Shop Now</button>
        <div className="featured-items">
          <h1 id="product-list-heading">Featured Items</h1>
          <Products numberOfItems={4} />
        </div>
      </main>
      <footer className="main-footer">
        <div className="footer-content">
          <p className="company-name">Company Name</p>
          <p className="copyright">
            &copy; 2024 Abdul-Majeed Nurudeen. All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/nuru484" className="source-code-link">
            Source Code
          </a>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
