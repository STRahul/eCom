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
