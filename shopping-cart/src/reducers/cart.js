import { getCart, addItemToCart, increaseQty, decreaseQty, removeItem } from "../API";

export const REQUEST_CART_DETAILS = 'REQUEST_CART_DETAILS';
export const RECIEVE_CART_DETAILS = 'RECIEVE_CART_DETAILS';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const INCREASE_QUANTITY_SUCCESS = 'INCREASE_QUANTITY_SUCCESS';
export const DECREASE_QUANTITY_SUCCESS = 'DECREASE_QUANTITY_SUCCESS';
export const REMOVE_CART_ITEM_SUCCESS = 'REMOVE_CART_ITEM_SUCCESS';

const initialState = {
  items: [],
  loading: false
}

function requestCartDetails() {
  return { type: REQUEST_CART_DETAILS };
}

function recieveCartDetails(items) {
  return { type: RECIEVE_CART_DETAILS, payload: items }
}

export function fetchCartDetails() {
  return async (dispatch) => {
    dispatch(requestCartDetails());

    const response = await getCart();
    dispatch(recieveCartDetails(response.data));
  }
}

function addToCartSuccess(product) {
  return { type: ADD_TO_CART_SUCCESS, payload: product };
}

export const addToCart = (productId) => {
  return async (dispatch) => {
    const response = await addItemToCart(productId);

    dispatch(addToCartSuccess(response.data));
  }
}

function increaseQtySuccess(product) {
  return { type: INCREASE_QUANTITY_SUCCESS, payload: product }
}

export const increaseQuantity = (productId) => {
  return async (dispatch) => {
    const response = await increaseQty(productId);

    dispatch(increaseQtySuccess(response.data));
  }
}

function decreaseQtySuccess(product) {
  return { type: DECREASE_QUANTITY_SUCCESS, payload: product }
}

export const decreaseQuantity = (productId) => {
  return async (dispatch) => {
    const response = await decreaseQty(productId);

    dispatch(decreaseQtySuccess(response.data));
  }
}

function removeItemSuccess(product) {
  return { type: REMOVE_CART_ITEM_SUCCESS, payload: product }
}

export const removeCartItem = (productId) => {
  return async (dispatch) => {
    const response = await removeItem(productId);

    console.log(response);

    dispatch(removeItemSuccess(response.data));
  }
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CART_DETAILS:
      return { ...state, loading: true };

    case RECIEVE_CART_DETAILS:
    return { ...state, loading: false, items: action.payload }

    case ADD_TO_CART_SUCCESS:
      const product = state.items.some(p => p.id === action.payload.id);
      if (product) {
        return {
          items: state.items.map(item => {
            if (item.id === action.payload.id) {
              return action.payload
            }

            return item;
          })
        }
      }
      return {
        items: [...state.items, action.payload ]
      }

    case INCREASE_QUANTITY_SUCCESS:
      return {
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        })
      }

    case DECREASE_QUANTITY_SUCCESS:
      return {
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        })
      }

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        items: state.items.filter(item => item.id !== action.payload.id)
      }

    default:
      return state;
  }
}
