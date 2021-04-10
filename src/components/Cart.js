import React from "react"
import { Link } from '@reach/router'
import './Cart.css'

const Cart = (props) => {
  const { show, closeCart } = props

  return (
    <aside className={show ? "show" : "hide"}>
      <button onClick={closeCart}>X</button>
      <h1>Cart</h1>
      <Link to="checkout">Checkout</Link>
    </aside>
  )
}

export default Cart