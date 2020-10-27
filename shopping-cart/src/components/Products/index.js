import React from 'react'
import ProductItem from '../ProductItem'
import { ProductsTitleWrapper, ProductsWrapper, ProductsTitle, ProductsList } from './style'

const Products = ({ products }) => {
  return (
    <ProductsWrapper>
      <ProductsTitleWrapper>
        <ProductsTitle>Products</ProductsTitle>
      </ProductsTitleWrapper>
      <ProductsList>
        {
          products.map(product => {
            return <ProductItem product={product} key={product.id} />
          })
        }
      </ProductsList>
    </ProductsWrapper>
  )
}

export default Products
