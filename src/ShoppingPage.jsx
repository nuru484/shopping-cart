import DisplayProducts from './DisplayProducts';
import Footer from './Footer';
import NavBar from './NavBar';

const ShoppingPage = () => {
  return (
    <div>
      <NavBar />
      <main className="shop-main">
        <DisplayProducts />
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingPage;
