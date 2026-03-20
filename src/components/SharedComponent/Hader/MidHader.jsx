import React from "react";
import logo from "../../../assets/images/logo.png";
import { CiShoppingCart, CiUser } from "react-icons/ci";

const MidHader = () => {
  return (
   
      <div>
        <div  className="flex justify-between py-2 items-center container mx-auto px-24">
          <img className="w-20" src={logo} alt="" />
          <div className="">
            <label className="input w-120">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="pr-48" required placeholder="Search . . ." />
            </label>
          </div>
          <div  className=" flex gap-5">
            <div className="flex gap-1 items-center">
                <CiUser className="text-3xl"/>
                <div >
                    <p className="ct text-xs">Account</p>
                    <p className="ts">LOGIN</p>
                </div>
            </div>

            <div className="flex gap-1 items-center">
                <CiShoppingCart className="text-3xl"/>
                <div >
                    <p className="ct text-xs">Cart</p>
                    <p className="ts">LOGIN</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default MidHader;
