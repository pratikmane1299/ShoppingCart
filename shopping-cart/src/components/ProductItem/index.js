import React from 'react';

import {
  ProductWrapper,
  ProductImageWrapper,
  Image,
  ProductInfo,
  ProductName,
  ProductPrice,
  AddToCartBtn,
} from './style';

const ProductItem = ({ product, onAddToCart, isAuthenticated }) => {

  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <Image src={product.imageUrl} alt={product.name} />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>&#8377;{product.price}</ProductPrice>
        {isAuthenticated && (
          <AddToCartBtn onClick={onAddToCart}>add to basket</AddToCartBtn>
        )}
        {/* <AddToCartBtn onClick={onAddToCart}>add to basket</AddToCartBtn> */}
      </ProductInfo>
    </ProductWrapper>
  );
};

export default ProductItem;
