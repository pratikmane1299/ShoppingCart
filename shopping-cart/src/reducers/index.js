import { combineReducers } from 'redux';

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from './cart';

import products from './products';
import cart from './cart';

export default combineReducers({
  products,
  cart
});

export { addToCart, increaseQuantity, decreaseQuantity, removeCartItem };
