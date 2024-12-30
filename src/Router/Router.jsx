
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Menu from "../Pages/OurMenu/Menu";
import Shop from "../Pages/ShopPage/Shop";

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

    ],
  },
]);

