import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchProducts,
  fetchCartDetails,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from '../../reducers/';

import Products from '../Products';
import Cart from '../Cart';

import { ContentWrapper } from './style';

const ShoppingCartApp = ({
  products,
  isloadingProducts,
  fetchProducts,
  cart,
  isCartLoading,
  isAuthenticated,
  fetchCartDetails,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
}) => {

  useEffect(() => {
    fetchProducts();
    if (isAuthenticated) {
      fetchCartDetails();
    }
  }, [fetchCartDetails, fetchProducts, isAuthenticated])

  return (
    <>
      {/* <Header /> */}
      <ContentWrapper>
        <Products 
          products={products} 
          loading={isloadingProducts} 
          addToCart={addToCart} 
          isAuthenticated={isAuthenticated} 
        />
        <Cart
          cartItems={cart}
          loading={isCartLoading}
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
  cart: state.cart.items,
  isCartLoading: state.cart.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchCartDetails,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
})(ShoppingCartApp);
