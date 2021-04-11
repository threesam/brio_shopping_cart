import React from "react"
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import { getSubtotal } from '../utils'

import CartItem from '../components/CartItem'
import './Cart.css'

const Cart = ({ show, closeCart, appState }) => {
  const { items } = appState

  return (
    <section>
      <div onClick={closeCart}></div>
      <aside className={show ? "show" : "hide"}>
        <h1>Cart</h1>
        <ul>
          {items.map(item => (<CartItem key={item.id} {...item} canDelete="true" />))}
        </ul>
        <p>{items.length !== 0
          ? `Subtotal: $${getSubtotal(items)}`
          : 'empty cart'}</p>
        <Link to="checkout">Checkout</Link>
      </aside>
    </section>
  )
}

const mapStateToProps = (state) => ({
  appState: state
})

export default connect(mapStateToProps)(Cart)