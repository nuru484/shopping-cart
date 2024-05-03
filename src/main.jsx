import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Homepage from './Homepage.jsx';
import ShoppingPage from './ShoppingPage.jsx';
import ErrorPage from './ErrorPage.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
