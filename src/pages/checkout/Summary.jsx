import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data";

const Summary = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div key={product.id}>
                <div className="flex m-1 gap-3">
                  <img src={product.image} alt="img" className="w-32 h-24" />
                  <p>
                    <b>{product.name}</b>
                    <p>${product.price}</p>
                    <p>{`No. of items ${cartItems[product.id]}`}</p>
                  </p>
                </div>
              </div>
            );
          }
          return <></>;
        })}
      </div>
      <p className="bg-blue-500 inline-block p-5 mt-4 text-white font-semibold rounded-md">
        Subtotal: ${totalAmount.toFixed(2)}
      </p>
    </div>
  );
};

export default Summary;
