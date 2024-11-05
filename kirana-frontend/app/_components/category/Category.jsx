"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import GlobalApi from '@/app/GlobalApi';
import Link from 'next/link';

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const response = await GlobalApi.getCategory();
      console.log("API Called Successfully");  // Check if API is called
      console.log("Full Response:", response);  // Log the full response object
      console.log("Response Data:", response.data);  // Check if data exists
      console.log("Categories List:", response.data.data);  // Check the 'data' attribute
      
      setCategoryList(response.data || []);  // Set category list to state
    } catch (error) {
      console.log("Error in getCategoryList: " + error);  // Log error
    }
  };

  return (
    <>
      <div className="container px-0 py-10 pl-20 gap-5">
        <h1 className="text-2xl font-semibold py-5">Explore Categories</h1>
        {/* Updated styling for horizontal layout */}
        <div className="flex overflow-x-auto space-x-5 items-center">
          {categoryList?.data?.length > 0 ? (
            categoryList.data.map((category, index) => (
              <Link 
              key={index}
              href={"/product-category/"+category.title}
              className="bg-gray-200 p-6 ml-2 rounded-lg flex flex-col items-center justify-center cursor-pointer" 
              >                
                <Image
                  src={category?.img?.url ? `http://localhost:1337${category.img.url}` : '/fallback-image.png'}
                  className="hover:scale-125 border-2 rounded-lg hover:border-green-400 border-transparent transition-transform duration-300"
                  width={100}
                  height={100}
                  alt="Loading..."
                />
                <p className="pt-5">{category?.title}</p>
              </Link>
            ))
          ) : (
            <div className="flex justify-center items-center py-14 ml-20">
              <div className="absolute animate-spin rounded-full h-28 w-28 border-t-4 border-purple-500">
                <img
                  src="https://www.svgroup.com/show/509001/avatar-thinking-9.svg"
                  className="rounded-full h-24 w-24"
                  alt="Category"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;


