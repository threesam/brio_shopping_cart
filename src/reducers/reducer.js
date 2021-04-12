const initialState = {
  items: [],
  cartIsOpen: false
}

const appReducer = (state = initialState, action) => {
  // grab ids from cart
  const cartIds = state.items.map(item => item.id)

  switch (action.type) {
    case 'ADD_ITEM':
      // check if cart already includes new item
      if (cartIds.includes(action.item.id)) {
        // if duplicate exists, add new and old quantity
        const appendedItems = state.items.map(item => {
          if (item.id === action.item.id) {
            item.quantity += action.item.quantity
            return item
          } else {
            return item
          }
        })
        return {
          ...state,
          items: appendedItems
        }
        // if non-duplicate item, concat
      } else {
        return {
          ...state,
          items: state.items.concat(action.item)
        }
      }

    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.item.id)
      }

    case 'IS_CART_OPEN':
      return {
        ...state,
        cartIsOpen: action.bool
      }

    default:
      return state
  }
}

export default appReducer