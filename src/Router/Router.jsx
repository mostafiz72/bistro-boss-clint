
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
        element: <PrivateRoute><Shop /></PrivateRoute>
      },
      {
        path: "/order/:category",
        element: <PrivateRoute><Shop /></PrivateRoute>
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
]);

