import { combineReducers } from 'redux';

import {
  fetchCartDetails,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from './cart';

import { registerAction, registerSuccess, registerFailure, loginAction, 
  loginFailure, fetchLoggedInUserAction, logoutAction } from './auth';

import products, { fetchProducts } from './products';
import cart from './cart';
import auth from './auth';

export default combineReducers({
  products,
  cart,
  auth,
});

export {
  fetchProducts,
  fetchCartDetails,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
  registerAction,
  registerSuccess,
  registerFailure,
  loginAction, 
  loginFailure,
  fetchLoggedInUserAction,
  logoutAction,
};
