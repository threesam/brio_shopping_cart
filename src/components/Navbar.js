import React, { useState } from "react"
import { Link } from "@reach/router"
import styled from 'styled-components'
import { indexToLetter } from '../utils'

// components
import Cart from './Cart'

const Navbar = ({ products }) => {
  // cart modal state
  const [show, setShow] = useState(false)
  const openCart = () => setShow(true)
  const closeCart = () => setShow(false)

  return (
    <Header>
      <NavLink to="/"><strong>React Store</strong></NavLink>

      <Nav>
        {products.map((product, i) => (
          <NavLink key={product.id} to={`product-${indexToLetter(i)}`}>{`Product ${indexToLetter(i).toUpperCase()}`}</NavLink>
        ))}

        {!show && <button onClick={openCart}>View Cart</button>}
        <Cart closeCart={closeCart} show={show} />
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  border-bottom: 1px solid lightgray;
`

const Nav = styled.nav`
  width: 50rem;
  display: flex;
  flex-flow: row;
`

const NavLink = styled(Link)`
  text-decoration: none;
  margin-left: 1rem;
`

export default Navbar