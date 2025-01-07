
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Menu from "../Pages/OurMenu/Menu";
import Shop from "../Pages/ShopPage/Shop";
import Login from "../Pages/Security/LoginPage/Login";
import Register from "../Pages/Security/RegisterPage/Register";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardCart from "../Pages/Dashboard/Carts/DashboardCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/order",
        element: <Shop />
      },
      {
        path: "/order/:category",
        element: <Shop />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardCart />
      }
    ]
  }
]);

