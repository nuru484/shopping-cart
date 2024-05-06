import { Link } from 'react-router-dom';
import Products from './Products';

const ShoppingPage = () => {
  return (
    <div>
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
              <Link to={'/cart-page'}>
                <img
                  src="../src/assets/icons8-cart-50.png"
                  alt="cart icon"
                  width={'30px'}
                />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <main className="shop-main">
        <Products />
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
    </div>
  );
};

export default ShoppingPage;
