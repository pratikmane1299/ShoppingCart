import { getCart, addItemToCart } from "../API";

export const REQUEST_CART_DETAILS = 'REQUEST_CART_DETAILS';
export const RECIEVE_CART_DETAILS = 'RECIEVE_CART_DETAILS';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

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

export const increaseQuantity = (product) => {
  return {
    type: INCREASE_QUANTITY,
    payload: product
  }
}

export const decreaseQuantity = (product) => {
  return {
    type: DECREASE_QUANTITY,
    payload: product
  }
}

export const removeCartItem = (product) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: product
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

    case INCREASE_QUANTITY:
      return {
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }

          return item;
        })
      }
    case DECREASE_QUANTITY:
      const cartItem = state.items.find(item => item.id === action.payload.id);

      if (cartItem.quantity !== 1) {
        return {
          items: state.items.map(item => {
            if (item.id === action.payload.id && item.quantity ) {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
  
            return item;
          })
        }
      } else {
        return {
          items: state.items.filter(item => item.id !== action.payload.id)
        }
      }
    case REMOVE_CART_ITEM:
      return {
        items: state.items.filter(item => item.id !== action.payload.id)
      }

    default:
      return state;
  }
}
