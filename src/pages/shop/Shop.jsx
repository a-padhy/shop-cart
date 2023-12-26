import React from "react";
import { PRODUCTS } from "../../data";
import Product from "./Product";
const Shop = () => {
  return (
    <div>
      <div className="mt-32 text-center text-4xl">All Products</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {PRODUCTS.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
