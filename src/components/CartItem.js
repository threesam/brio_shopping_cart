import React from 'react'
import { connect } from 'react-redux'
import { deleteItemFromCart } from '../actions'


const CartItem = ({ canDelete = false, name, price, id, image, quantity, deleteExistingItemFromCart, appState }) => {
  function handleDeleteItemFromCart() {
    const item = {
      id
    }
    deleteExistingItemFromCart(item)
  }

  return (
    <li key={id}>
      <img width="100" height="100" src={image} alt={`container of ${name}`} />
      <h3>{name}</h3>
      <span>({quantity}) x ${price}</span>
      {canDelete ? (<button onClick={handleDeleteItemFromCart}>delete</button>) : ''}
    </li>
  )
}

const mapStateToProps = (state) => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  deleteExistingItemFromCart: (item) => dispatch(deleteItemFromCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)