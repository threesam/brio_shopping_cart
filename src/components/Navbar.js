import React from "react"
import { Link } from "@reach/router"
import styled from 'styled-components'
import { indexToLetter } from '../utils'
import { connect, useSelector, useDispatch } from 'react-redux'
import { isCartOpen } from '../actions'


const Navbar = ({ products }) => {
  const cartIsOpen = useSelector(state => state.cartIsOpen)
  const dispatch = useDispatch()

  return (
    <Header>
      <NavLink logo to="/"><strong>React Store</strong></NavLink>

      <Nav>
        <div>
        {products.map((product, i) => (
          <NavLink key={product.id} to={`product-${indexToLetter(i)}`}>{`Product ${indexToLetter(i).toUpperCase()}`}</NavLink>
          ))}
        </div>
        {!cartIsOpen && <Button onClick={() => dispatch(isCartOpen(true))}>View Cart</Button>}
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  width: 100vw;
  height: 3rem;
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  border-bottom: 1px solid lightgray;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: ${props => props.logo ? '' : '4rem'};
  text-align: ${props => props.logo ? 'center' : 'none'};
  font-size: ${props => props.logo ? '150%' : '100%'};
`
const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin-right: 2rem;
  font-size: 100%;
  font-family: inherit;
`

export default Navbar