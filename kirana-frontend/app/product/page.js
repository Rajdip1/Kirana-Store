import { Button } from "@headlessui/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductDetail from "../_components/Products/ProductDetail";

const Product = ({ product }) => {
  return (
    <>
      <div className="container">
        <div classname="grid grid-cols-4 items-center">
          <div className="product_col inline-block gap-10 ml-20 mr-20 h-50 w-30 shadow-lg rounded-lg flex-col">
            {/* <div className=""> */}
            <Image
              src={product?.img?.url ? `http://localhost:1337${product.img.url}` : '/fallback-image.png'}
              className="cursor-pointer hover:scale-110 hover:transition-transform  mb-4 p-5"
              width={200}
              height={50}
              alt="Image"
            />
            {/* </div> */}

            <div className="flex items-center py-2">
              <svg
                className="w-6 h-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>

              <svg
                className="w-6 h-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>

              <svg
                className="w-6 h-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>

              <svg
                className="w-6 h-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>

              <svg
                className="w-6 h-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>

              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {product?.rating}
              </span>
            </div>

            <div className="grid grid-cols-2 items-center ml-2 py-2">
              <h3>{product?.title}</h3>
              <h1 className="text-start font-semibold text-lg ml-12">
                ${product?.price}
              </h1>
            </div>

            <div className="grid grid-cols-2 items-center py-2 px-0">
              <Dialog>
                <DialogTrigger asChild>
                <button
                className="ml-2 inline-flex items-center justify-center whitespace-nowrap 
                          rounded-lg font-medium ring-offset-background transition-colors 
                          focus-visible:outl ine-none focus-visible:ring-2 
                          focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                          disabled:opacity 50 text-primary-foreground
                          hover:bg-primary/90 w-20 h-10 px-4 py-2 bg-green-600 text-xs"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-R6hkjsja:"
                data-
                state="closed"
                size={28}
              >
                Add To Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-shopping-basket ps-2"
                >
                  <path d="m15 11-1 9"></path>
                  <path d="m19 11-4-7"></path>
                  <path d="M2 11h20"></path>
                  <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.611.7-7.4"></path>
                  <path d="M4.5 15.5h15"></path>
                  <path d="m5 11 4-7"></path>
                  <path d="m9 11 1 9"></path>
                </svg>
              </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <ProductDetail product={product} />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <HeartIcon
                className="inline-block font-semibold m-0 p-0 ml-14 hover:text-red-600 cursor-pointer"
                width={25}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
