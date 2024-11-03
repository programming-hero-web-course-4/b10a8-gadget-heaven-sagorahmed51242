import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/statistics",
            element:<Statistics/>
        },
        {
            path:"/dashboard",
            element: <Dashboard/>
        }
    ]
  },
]);

export default router;