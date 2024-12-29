
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainLayout from "../Pages/MainLayout/MainLayout";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { 
            path: "/", 
            element: <Home /> 
        },
      ],
    },
  ]);

