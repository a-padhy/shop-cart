import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-gray-800 flex justify-end items-center">
      <div className="mr-16 flex items-center">
        <Link to="/" className="no-underline text-white ml-5 text-2xl">
          Shop
        </Link>
        <Link to="/cart" className="no-underline text-white ml-5 text-2xl">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
