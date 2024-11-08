"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  // const [user, setUser] = useEffect(null);
  // const [jwt, setJwt] = useState(null);
  // const [totalCart, setTotalCart] = useState(0);
  // const [cartItems, setCartItems] = useState([]);
  // const [subTotal, setSubTotal] = useState(0);
  // const router = useRouter();
  return (
    <>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold mb-4">Billing Details</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4 bg-white p-4 rounded-lg shadow-md">
              <form>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="zip">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your zip code"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="address">
                    Address
                  </label>
                  <textarea
                    id="address"
                    className="w-full border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your address"
                    rows="2"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-1 px-3 rounded w-full mt-3 text-sm">
                  Submit
                </button>
              </form>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-3">Summary</h2>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>Total</span>
                  <span>$21.98</span>
                </div>
                <button className="bg-blue-500 text-white py-1 px-3 rounded w-full mt-3 text-sm">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
