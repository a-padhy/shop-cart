import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data";
import { ShopContext } from "../../context/shop-context";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = PRODUCTS.find((p) => p.id === productId);

  const { addToCart, cartItems } = useContext(ShopContext);
  const itemCount = cartItems[productId];

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <img
            className="w-full h-auto max-h-96 object-contain"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-4 md:mt-0 lg:mt-0">
          <div className="text-3xl font-semibold">{product.name}</div>
          <p className="text-gray-500 text-lg mt-2">{product.details}</p>
          <div className="mt-4">
            <span className="text-gray-700 text-2xl font-bold">
              ${product.price}
            </span>
          </div>
          <button
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow active:bg-yellow-700"
            onClick={() => addToCart(productId)}
          >
            Add to Cart {itemCount > 0 && <>({itemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
