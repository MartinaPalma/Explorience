import store from './store'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cart: {
          ...state.cart,
          totalCart: (store.cart.totalCart += action.payload),
        },
      }
    case 'INCREMENT_PRODUCT':
      return {
        ...state,
        cart: {
          ...state.cart,
          numProducts: (store.cart.numProducts += 1),
        },
      }
    case 'DECREMENT_PRODUCT':
      return {
        ...state,
        cart: {
          ...state.cart,
          numProducts: (store.cart.numProducts -= 1),
        },
      }
    case 'VISIBLE_MODAL':
      return {
        ...state,
        modal: {
          visible: action.payload,
        },
      }
    default:
      return state
  }
}

export default reducer
