
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Menu from "../Pages/OurMenu/Menu";

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
      ],
    },
  ]);

