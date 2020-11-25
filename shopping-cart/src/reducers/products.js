import { getAllProducts } from "../API";

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECIEVE_PRODUCTS = 'RECIEVE_PRODUCTS';

const initialState = {
  products: [],
  loading: false,
}

const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

const recieveProducts = (products) => ({
  type: RECIEVE_PRODUCTS,
  payload: products
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(requestProducts());

    setTimeout(async () => {
      const response = await getAllProducts();
      dispatch(recieveProducts(response.data));
    }, 1500);

  }
} 

export default function productsReducer(state = initialState, action) {
  switch (action.type) {

    case REQUEST_PRODUCTS:
      return { ...state, loading: true };
    
    case RECIEVE_PRODUCTS:
      return { loading: false, products: action.payload }

    default:
      return state
  }
}
