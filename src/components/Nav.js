import React, { useState } from "react"
import { Link } from "@reach/router"

import Cart from './Cart'


const Nav = ({ products }) => {
  const [show, setShow] = useState(false)
  const openCart = () => setShow(true)
  const closeCart = () => setShow(false)
  return (
    <nav>
      <Link to="/">Store</Link>

      {products.map((product, i) => (
        <Link key={i} to={`product-${i + 1}`}>{`Product ${i + 1}`}</Link>
      ))}

      {!show && <button onClick={openCart}>Show Cart</button>}
      <Cart closeCart={closeCart} show={show} />
    </nav>
  )
}

export default Nav