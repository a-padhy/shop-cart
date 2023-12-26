import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
  });

  const { checkout } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    if (
      !shippingDetails.fullName ||
      !shippingDetails.city ||
      !shippingDetails.address
    ) {
      alert("Please enter all details!");
      return;
    }
    alert("Order Confirmed!");
    setShippingDetails({ fullName: "", address: "", city: "" });
    checkout();
    navigate("/");
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <div className="w-2/3 pr-8">
          <h2 className="text-3xl font-semibold mb-4">Shipping Details</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={shippingDetails.fullName}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={shippingDetails.address}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={shippingDetails.city}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <button
              type="button"
              onClick={handleConfirmOrder}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
            >
              Confirm Order
            </button>
          </form>
        </div>
        <div className="w-1/3">
          <h2 className="text-3xl font-semibold mb-4">Order Summary</h2>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
