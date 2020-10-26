import React from 'react'
import { connect } from 'react-redux'

import Header from '../Header'
import Products from '../Products';
import Cart from '../Cart';

import { ContentWrapper } from './style'

const ShoppingCartApp = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Products />
        <Cart />
      </ContentWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart.items,
  total: state.cart.total
})

export default connect(mapStateToProps)(ShoppingCartApp);
