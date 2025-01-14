
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
import Users from "../Pages/Dashboard/Carts/Admin/Users";
import AddUser from "../Pages/Dashboard/Carts/Admin/AddUser";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/Carts/Admin/ManageItems";
import UpdateItems from "../Pages/Dashboard/Carts/Admin/UpdateItems";
import Payment from "../Pages/Dashboard/Carts/Payment/Payment";

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
        element: <PrivateRoute><DashboardCart /></PrivateRoute>
      },
      {
        path: "/dashboard/users",
        element: <AdminRoute><Users /></AdminRoute>
      },
      {
        path: "/dashboard/additems",
        element: <AdminRoute><AddUser /></AdminRoute> // add user name a kinto item add kora hoytese ekhane user name use kora hoyse.....
      },
      {
        path: "/dashboard/manageitems",
        element: <AdminRoute><ManageItems /></AdminRoute> // add user name a kinto item add kora hoytese ekhane user name use kora hoyse.....
      },
      {
        path: "/dashboard/manageitems/:id",
        element: <AdminRoute><UpdateItems /></AdminRoute>, // add user name a kinto item add kora hoytese ekhane user name use kora hoyse.....
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "/dashboard/payment",
        element: <AdminRoute><Payment /></AdminRoute> // add user name a kinto item add kora hoytese ekhane user name use kora hoyse.....
      },
    ]
  }
]);

