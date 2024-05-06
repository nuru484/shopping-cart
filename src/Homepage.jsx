import { Link } from 'react-router-dom';
import DisplayProducts from './DisplayProducts';
import NavBar from './NavBar';
import '../src/styles/homepage.css';
import Footer from './Footer';

const Homepage = () => {
  return (
    <>
      <NavBar />
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
          <DisplayProducts numberOfItems={4} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
