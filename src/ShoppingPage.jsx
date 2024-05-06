import FetchProducts from './FetchProduct';
import Footer from './Footer';
import NavBar from './NavBar';

const ShoppingPage = () => {
  return (
    <div>
      <NavBar />
      <main className="shop-main">
        <FetchProducts />
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingPage;
