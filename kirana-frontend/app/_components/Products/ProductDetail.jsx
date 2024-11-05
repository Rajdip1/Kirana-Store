"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductDetail = ({ product }) => {
  const jwt = sessionStorage.getItem("jwt");
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [productTotalPrice, setProductTotalPrice] = useState(product?.price);

  const handleQuantityChange = (action) => {
    let newQuantity = quantity;

    if (action === "increase") {
      newQuantity = quantity + 1;
    } else if (action === "decrease" && quantity > 1) {
      newQuantity = quantity - 1;
    }

    setQuantity(newQuantity);
    setProductTotalPrice(newQuantity * product?.price);
  };

  const AddToCart = () => {
    if (!jwt) {
      router.push("/sign-in");
      return;
    }

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === product?.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({
        id: product?.id,
        title: product?.title,
        price: product?.price,
        quantity: quantity,
        totalPrice: quantity * product?.price,
        imageUrl: product?.img.url,
      });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    sessionStorage.setItem("totalCart", totalItems);

    const event = new CustomEvent("cartUpdated", { detail: totalItems });
    window.dispatchEvent(event);

    console.log("Cart updated:", cart);
    alert("Product added to cart!");
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500">★</span>
          ))}
        {halfStar && <span className="text-yellow-500">☆</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={index + fullStars} className="text-gray-400">★</span>
          ))}
      </div>
    );
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={product?.img?.url ? `http://localhost:1337${product.img.url}` : "/fallback-image.png"}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{product?.title}</h2>

              {/* Product Description */}
              <p className="text-gray-700 mb-4">{product?.description}</p>

              {/* Product Rating */}
              <div className="mb-4 flex items-center">
                <span className="text-lg font-semibold mr-2">Rating:</span>
                {renderStars(product?.rating)}
                <span className="ml-2 text-gray-600">{product?.rating?.toFixed(1)} / 5</span>
              </div>

              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">Price: ${product?.price}</span>
              </div>
              <div>
                <p className="font-semibold text-xl text-gray-950">
                  ${(quantity * productTotalPrice).toFixed(2)}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity: {quantity}
                </label>
                <div className="flex items-center">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-md text-black"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    className="w-12 text-center rounded-md border-gray-300 mx-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    readOnly
                  />
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-md text-black"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    onClick={AddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
