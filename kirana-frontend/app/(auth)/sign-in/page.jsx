"use client";
import GlobalApi from "@/app/GlobalApi";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "sonner";  // Import the toast function

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const OnSignIn = (e) => {
    e.preventDefault();  // Prevent form submission
    GlobalApi.signIn(email, password)
      .then((response) => {
        console.log("response", response.data.user);
        console.log("response", response.data.jwt);

        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        sessionStorage.setItem("jwt", JSON.stringify(response.data.jwt));

        router.push("/create-account");
        toast.success("Logged in successfully!");
      })
      .catch((e) => {
        toast.error(e?.response?.data?.error?.message || "Login failed");
        console.log("Error ", e);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Log in
        </h1>
        <form onSubmit={OnSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                defaultChecked
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-xs text-indigo-500 hover:text-indigo-700"
              onClick={() => router.push("/create-account")}  // Navigate to Create Account
            >
              Create Account
            </button>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
