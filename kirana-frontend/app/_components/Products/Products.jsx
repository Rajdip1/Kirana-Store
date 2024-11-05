import Product from '@/app/product/page';

import React from 'react';


function Products({getProduct}) {
    
  return (
    <>
    <div className='container py-10 px-2'>
        <div className='grid grid-cols-3 items-center gap-20'>
            {getProduct?.map((product, index) => {
              return <Product key={index} product={product}/>;
            })} 
        </div>
    </div>
    </>
  )
}

export default Products