import React from "react";
import { Outlet } from "react-router";
import Hader from "../components/SharedComponent/Hader/Hader";

const Root = () => {
  return <div>
   <Hader></Hader>
    <Outlet></Outlet>
  </div>;
};

export default Root;
