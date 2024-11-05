"use client";
import GlobalApi from "@/app/GlobalApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";

const CreateAccount = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if(jwt) {
      router.push("/");
    }
  },[router])

  const onCreateAccount = () => {

    if(password.length < 8) {
      toast("Password must be at least 8 characters");
      return;
    }

    GlobalApi.registerUser(username, email, password).then((response) => {
      console.log("response", response.data.user);
      console.log("response", response.data.jwt);

      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      sessionStorage.setItem("jwt", JSON.stringify(response.data.jwt));

      router.push("/sign-in");

      toast("Account Created Successfully");

    }).catch((e) => {
      toast(e?.response?.data?.error?.message);
      console.log("Error ",e);
    });
  };

  return (
    <div>
      <div class="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 class="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Create Account
        </h1>
        <form action="#" class="w-full flex flex-col gap-4">
          <div class="flex items-start flex-col justify-start">
            <label
              for="username"
              class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 
              dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="email"
              class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 
              dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="password"
              class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 
              dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            onClick={() => onCreateAccount()}
          >
            Register
          </button>
        </form>

        <div class="mt-4 text-center">
          <span class="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
          </span>
          <a class = 'cursor-pointer'
          onClick={() => router.push("/sign-in")}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
