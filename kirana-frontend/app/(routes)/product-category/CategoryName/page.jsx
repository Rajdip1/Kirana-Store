import Products from '@/app/_components/Products/Products';
import GlobalApi from '@/app/GlobalApi';
import React from 'react';

const ProductCategory = async ({ params: { CategoryName } }) => {
  try {
    const response = await GlobalApi.getSingleCategory(CategoryName);
    const getProduct = response.data.data;

    return (
      <>
        <div className='container-fluid'>
          <h2>{CategoryName}</h2>
          <Products
            className='p-4 bg-green-600 text-white font-semibold text-3xl text-center'
            getProduct={getProduct}
          />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching category data:", error);
    return <p>Error loading products. Please try again later.</p>;
  }
};

export default ProductCategory;
