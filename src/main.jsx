import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SearchProvider } from './SearchContext';

import Homepage from './Homepage.jsx';
import ShoppingPage from './ShoppingPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import CartPage from './CartPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shopping-page',
    element: <ShoppingPage />,
  },
  {
    path: 'cart-page',
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </React.StrictMode>
);
