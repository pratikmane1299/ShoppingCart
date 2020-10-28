export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const initialState = {
  items: []
}

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
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
    case ADD_TO_CART:
      const product = state.items.some(p => p.id === action.payload.id);
      if (product) {
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
      }
      return {
        items: [...state.items, { ...action.payload, quantity: 1 }]
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
