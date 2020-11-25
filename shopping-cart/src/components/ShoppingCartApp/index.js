import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchProducts,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from '../../reducers/';

import Header from '../Header';
import Products from '../Products';
import Cart from '../Cart';

import { ContentWrapper } from './style';

const ShoppingCartApp = ({
  products,
  isloadingProducts,
  fetchProducts,
  addToCart,
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
}) => {

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])

  return (
    <>
      <Header />
      <ContentWrapper>
        <Products products={products} loading={isloadingProducts} addToCart={addToCart} />
        <Cart
          cartItems={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeCartItem={removeCartItem}
        />
      </ContentWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  isloadingProducts: state.products.loading,
  cart: state.cart.items
});

export default connect(mapStateToProps, {
  fetchProducts,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
})(ShoppingCartApp);
