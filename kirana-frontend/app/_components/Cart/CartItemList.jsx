"use client";

import React, { useState } from "react";

const CartItemList = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate user login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Example of adding an item to the cart (only if logged in)
  const addToCart = (item) => {
    if (isLoggedIn) {
      setCartItems((prevItems) => [...prevItems, item]);
    } else {
      alert("Please log in to add items to the cart.");
    }
  };

  // Dummy item to add to cart (this can come from user interaction, product page, etc.)
  const handleAddItem = () => {
    const newItem = {
      name: "Sample Product",
      description: "A description of the product.",
      price: 19.99,
      quantity: 1,
    };
    addToCart(newItem);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Product Image"
                    className="mr-4"
                  />
                  <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="text-red-500 hover:text-red-700">
                    <i className="fas fa-trash"></i>
                  </button>
                  <div className="mx-4">
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-16 text-center"
                      readOnly
                    />
                  </div>
                  <span className="font-bold">${item.price.toFixed(2)}</span>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}

        <div className="flex justify-center mt-6">
          {!isLoggedIn ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogin}
            >
              Log In
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddItem}
            >
              Add Item to Cart
            </button>
          )}
        </div>

        {cartItems.length > 0 && (
          <div>
            <div className="flex justify-between items-center">
              <span className="font-bold">Subtotal:</span>
              <span className="font-bold">
                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Taxes:</span>
              <span>$1.00</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <span className="font-bold">Total:</span>
              <span className="font-bold">
                ${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 1).toFixed(
                  2
                )}
              </span>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItemList;
