import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div>
        <Image src = {process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
            product.attributes.images.data[0].attributes.url
        }
        width={500} heigth={200}
        alt='image' />
    </div>
  )
}

export default ProductItem