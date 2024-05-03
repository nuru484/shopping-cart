import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Logo</li>
          <li>
            <input type="search" />
          </li>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/shopping-page'}>Shop</Link>
          </li>
          <li>Cart</li>
        </ul>
      </nav>
      <main>
        <h1>Your one-stop destination for all your shopping needs</h1>
        <p>
          Discover an unparalleled shopping experience with our extensive
          selection of products, unbeatable prices, and exceptional customer
          service. Shop now and transform your shopping journey with us.
        </p>
        <button>Shop Now</button>
        <div className="feature-items">
          <p>Item1</p>
          <p>Item2</p>
          <p>Item3</p>
        </div>
      </main>
      <footer>
        <div>
          <p>Company Name</p>
          <p>&copy; 2024 Abdul-Majeed Nurudeen. All rights reserved.</p>
        </div>
        <div>
          <a href="https://github.com/nuru484">Source Code</a>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
