import axios from 'axios';

const BASE_URL = 'http://localhost:4242/api/v1/';

// TODO: implement authentication
const userId = 1;

export function getAllProducts() {
  return axios.get(`${BASE_URL}products`);
}

export function getCart() {
  return  axios.get(`${BASE_URL}cart/${userId}`);
}

export function addItemToCart(productId) {
  return axios.post(`${BASE_URL}cart/add-to-cart`, { userId, productId });
}

export function increaseQty(productId) {
  return axios.put(`${BASE_URL}cart/increase-qty`, { userId, productId });
}

export function decreaseQty(productId) {
  return axios.put(`${BASE_URL}cart/decrease-qty`, { userId, productId });
}

export function removeItem(productId) {
  return axios.delete(`${BASE_URL}cart/delete-item`, { data: { userId, productId }});
}
