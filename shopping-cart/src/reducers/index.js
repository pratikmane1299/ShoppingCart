import { combineReducers } from 'redux';

import {
  fetchCartDetails,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from './cart';

import products, { fetchProducts } from './products';
import cart from './cart';

export default combineReducers({
  products,
  cart
});

export { fetchProducts, fetchCartDetails, addToCart, increaseQuantity, decreaseQuantity, removeCartItem };
