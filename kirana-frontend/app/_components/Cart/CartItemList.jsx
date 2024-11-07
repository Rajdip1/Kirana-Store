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
      
    </div>
  );
};

export default CartItemList;
