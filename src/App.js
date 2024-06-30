import './App.css';

import MainComponent from './components/MainComponent';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Layout from './components/Layout';
import Cart from './components/Cart';
import Auth from './components/Auth';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainComponent />
      },
      {
        path: 'productDetails',
        element: <ProductDetails />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'auth',
        element: <Auth />
      }
    ]
  },
 
])
function App() {
  return (
      <RouterProvider router={appRouter} /> 
  );
}

export default App;
