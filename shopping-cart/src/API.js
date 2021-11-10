import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

const BASE_URL = isProduction
  ? 'https://redux-shopping-cart-api.herokuapp.com/api/v1/'
  : 'http://localhost:4040/api/v1/';

axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use(function (config) {

  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export function getAllProducts() {
  return axios.get(`${BASE_URL}products`);
}

export function getCart() {
  return  axios.get(`${BASE_URL}cart/`);
}

export function addItemToCart(productId) {
  return axios.post(`${BASE_URL}cart/add-to-cart`, { productId });
}

export function increaseQty(productId) {
  return axios.put(`${BASE_URL}cart/increase-qty`, { productId });
}

export function decreaseQty(productId) {
  return axios.put(`${BASE_URL}cart/decrease-qty`, { productId });
}

export function removeItem(productId) {
  return axios.delete(`${BASE_URL}cart/delete-item`, { data: { productId }});
}

export function register(body) {
  return axios.post(`${BASE_URL}auth/register`, body);
}

export function login(body) {
  return axios.post(`${BASE_URL}auth/login`, body);
}

export function fetchCurrentUser() {
  return axios.get(`${BASE_URL}auth`);
}
