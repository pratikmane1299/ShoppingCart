import axios from 'axios';

const BASE_URL = 'http://localhost:4242/api/v1/';

export function getAllProducts() {
  return axios.get(`${BASE_URL}products`);
}
