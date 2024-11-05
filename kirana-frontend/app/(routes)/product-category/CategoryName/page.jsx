import Products from '@/app/_components/Products/Products';
import GlobalApi from '@/app/GlobalApi'
import React from 'react'

const ProductCategory = async ({params}) => {
  const response = await GlobalApi.getSingleCategory(params.CategoryName);
  const getProduct = response.data.data;
  // console.log(getProduct);
  return (
    <>
    <div className='container-fluid'>
      <h2>{params.CategoryName}</h2>
      <Products className='p-4 bg-green-600 text-white font-semibold text-3xl text-center' 
      getProduct={getProduct} />
    </div>
  </>
  );
}

export default ProductCategory