import { Link } from 'react-router-dom';

const ShoppingPage = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/shopping-page'}>Shop</Link>
      <div>Welcome to the shopping page</div>
    </div>
  );
};

export default ShoppingPage;
