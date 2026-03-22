import React from "react";
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="border-y border-gray-200 py-2  ">
      <div className="flex items-center justify-between container mx-auto px-24">
        <div className="flex items-center gap-2 bgp text-white py-2 px-6 rounded-md">
          <BiCategory />
          <p>All Category</p>
        </div>
        <div className="flex items-center gap-12">
          <NavLink className={({isActive} )=>isActive?`cp`:``} to="/">Home</NavLink>
          <NavLink className={({isActive} )=>isActive?`cp`:``} to="/shop">Shop Now</NavLink>
          <NavLink className={({isActive} )=>isActive?`cp`:``} to="/about">About</NavLink>
         
          <NavLink className={({isActive} )=>isActive?`cp`:``} to="/contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-2 bgp text-white py-2 px-6 rounded-md">
          <LuShoppingCart />
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
