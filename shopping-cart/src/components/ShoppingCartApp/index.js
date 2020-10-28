import React from 'react';
import { connect } from 'react-redux';

import {
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
  addToCart,
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
}) => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Products products={products} addToCart={addToCart} />
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
  products: state.products,
  cart: state.cart.items
});

export default connect(mapStateToProps, {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
})(ShoppingCartApp);
