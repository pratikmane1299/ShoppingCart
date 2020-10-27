import React from 'react'

import { ProductWrapper, ProductImageWrapper, Image, ProductInfo, ProductName, ProductPrice, AddToCartBtn } from './style'

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <Image src={product.image} alt={product.name} />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>&#8377;{product.price}</ProductPrice>
        <AddToCartBtn>add to basket</AddToCartBtn>
      </ProductInfo>
    </ProductWrapper>
  )
}

export default ProductItem
