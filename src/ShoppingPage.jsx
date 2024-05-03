import { Link } from 'react-router-dom';

const ShoppingPage = () => {
  return (
    <div>
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
        <p>Item1</p>
        <p>Item2</p>
        <p>Item3</p>
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
    </div>
  );
};

export default ShoppingPage;
