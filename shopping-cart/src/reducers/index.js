import { combineReducers } from 'redux';

import {
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

export { fetchProducts, addToCart, increaseQuantity, decreaseQuantity, removeCartItem };
