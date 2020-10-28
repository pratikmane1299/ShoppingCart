import React from 'react'
import { connect } from 'react-redux'

import { addToCart, increaseQuantity, decreaseQuantity } from '../../reducers/';

import Header from '../Header'
import Products from '../Products';
import Cart from '../Cart';

import { ContentWrapper } from './style'

const ShoppingCartApp = ({ products, addToCart, cart, increaseQuantity, decreaseQuantity }) => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Products products={products} addToCart={addToCart} />
        <Cart 
          cartItems={cart} 
          increaseQuantity={increaseQuantity} 
          decreaseQuantity={decreaseQuantity} 
        />
      </ContentWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart.items
})

export default connect(
  mapStateToProps,
  { addToCart, increaseQuantity, decreaseQuantity }
)(ShoppingCartApp);
