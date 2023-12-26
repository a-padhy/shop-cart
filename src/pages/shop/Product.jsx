import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className=" border rounded-lg w-72 h-80 m-8 flex flex-col justify-center items-center bg-white"
    >
      <img src={product.image} alt="prod-img" className="w-80" />
      <div className="text-center">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default Product;
