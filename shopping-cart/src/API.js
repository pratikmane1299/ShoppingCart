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
