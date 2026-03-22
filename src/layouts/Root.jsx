import React from "react";
import { Outlet } from "react-router";
import Hader from "../components/SharedComponent/Hader/Hader";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return <div>
   <Hader></Hader>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>;
};

export default Root;
