import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ShopNow from "../pages/ShopNow/ShopNow";

import Contact from "../pages/Contact/Contact";
import SingleProductPage from "../components/SharedComponent/SingleProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <ShopNow></ShopNow>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
   
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path: "/shop/:id",
        element:<SingleProductPage></SingleProductPage>
      },
    ],
  },
]);
