import React from "react"
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import { getSubtotal } from '../utils'
import { isCartOpen } from '../actions'

import CartItem from '../components/CartItem'
import './Cart.css'

const Cart = ({ changeIsCartOpenTo, appState }) => {
  const { items, cartIsOpen } = appState

  const handleCloseCart = () => {
    changeIsCartOpenTo(false)
  }

  return (
    <section className={cartIsOpen ? "show" : "hide"}>
      <div onClick={handleCloseCart}></div>
      <aside>
        <h1>Cart</h1>
        <ul>
          {items.map(item => (<CartItem key={item.id} {...item} canDelete="true" />))}
        </ul>
        <p>{items.length !== 0
          ? `Subtotal: $${getSubtotal(items)}`
          : 'empty cart'}</p>
        <Link to="checkout" onClick={handleCloseCart}>Checkout</Link>
      </aside>
    </section>
  )
}

const mapStateToProps = (state) => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  changeIsCartOpenTo: (bool) => dispatch(isCartOpen(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)