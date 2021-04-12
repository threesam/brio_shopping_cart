// define action creators

export const addItemToCart = (item) => ({
  type: 'ADD_ITEM',
  item
})

export const deleteItemFromCart = (item) => ({
  type: 'DELETE_ITEM',
  item
})

export const isCartOpen = (bool) => ({
  type: 'IS_CART_OPEN',
  bool
})