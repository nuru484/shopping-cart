import { Link } from 'react-router-dom';
import { useSearch } from './SearchContext';

const NavBar = () => {
  const { setSearchTerm } = useSearch();

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
              onChange={(e) => setSearchTerm(e.target.value)}
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
    </>
  );
};

export default NavBar;
