export const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
  items: []
}

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
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
    default:
      return state;
  }
}
