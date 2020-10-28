import React from 'react';

import ProductItem from '../ProductItem';

import {
  ProductsTitleWrapper,
  ProductsWrapper,
  ProductsTitle,
  ProductsList,
} from './style';

const Products = ({ products, addToCart }) => {
  return (
    <ProductsWrapper>
      <ProductsTitleWrapper>
        <ProductsTitle>Products</ProductsTitle>
      </ProductsTitleWrapper>
      <ProductsList>
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </ProductsList>
    </ProductsWrapper>
  );
};

export default Products;
