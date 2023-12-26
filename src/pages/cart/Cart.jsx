import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem product={product} key={product.id} />;
          }
          return <></>;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="bg-blue-500 inline-block p-5 mt-4 text-white font-semibold rounded-md">
            {" "}
            Subtotal: ${totalAmount}{" "}
          </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
