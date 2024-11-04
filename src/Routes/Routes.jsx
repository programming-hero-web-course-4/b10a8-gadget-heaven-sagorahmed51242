import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Products from "../Components/Products";
import AllProducts from "../pages/AllProducts";
import MainAlllProducs from "../Components/MainAlllProducs";
import ProductDetails from "../pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            path:"/",
            element:<Home/>,
            loader: ()=> fetch('../Category.json'),
            children:[
              {
                path:"/",
                element:<Products/>,
                loader: ()=> fetch('../Data.json')
              },
              {
                path:"/:category",
                element:<Products/>,
                loader: ()=> fetch('../Data.json')
              }
            ]
        },
        {
            path:"/products",
            element:<AllProducts/>,
            children:[
              {
                path:"/products",
                element:<MainAlllProducs/>,
                loader: () => fetch('../Data.json')
              },
              {
                path:"/products/:products",
                element:<MainAlllProducs/>,
                loader: () => fetch('../Data.json')
              }
            ]
        },
        {
            path:"/statistics",
            element:<Statistics/>
        },
        {
            path:"/product-details/:id",
            element:<ProductDetails/>,
            loader: () => fetch('../Data.json')
        },
        {
            path:"/dashboard",
            element: <Dashboard/>
        }
    ]
  },
]);

export default router;