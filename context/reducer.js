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
    case 'ADD_PRODUCT_TO_LIST':
      return {
        ...state,
        cart: {
          ...state.cart,
          listProduct: [action.payload, ...state.cart.listProduct],
        },
      }
    case 'REMOVE_ITEM_CART':
      return {
        ...state,
        cart: {
          totalCart: (store.cart.totalCart -= action.payload.price),
          numProducts: (store.cart.numProducts -= 1),
          listProduct: state.cart.listProduct.filter(
            (item) => item.id !== action.payload.id
          ),
        },
      }
    default:
      return state
  }
}

export default reducer
