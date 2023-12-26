import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

const CartItem = ({ product }) => {
  const { image, name, price, id } = product;
  const { removeFromCart, cartItems, updateCartItemCount, addToCart } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={image} alt="prod-img" className="" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            className=""
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
