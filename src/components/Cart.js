import React from "react"
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getSubtotal } from '../utils'
import { isCartOpen } from '../actions'

// components
import CartItem from '../components/CartItem'

// imported styles
import { Ul, P } from '../styles/styles'
import './Cart.css'

const Cart = ({ changeIsCartOpenTo, appState }) => {
  const { items, cartIsOpen } = appState

  const handleCloseCart = () => {
    changeIsCartOpenTo(false)
  }

  return (
    <section className={cartIsOpen ? "show" : "hide"}>
      <div onClick={handleCloseCart}></div>
      <Aside>
        <H1>Cart</H1>
        <Ul>
          {items.length !== 0
            ? items.map(item => (<CartItem key={item.id} {...item} canDelete="true" />))
            : <li>Cart is empty.</li>}
        </Ul>
        <Div>
          {items.length !== 0
            ? <P>Subtotal: ${getSubtotal(items).toFixed(2)}</P>
            : <P>$0.00</P>}
          {items.length !== 0
            ? <Button to="checkout" onClick={handleCloseCart}>Checkout</Button>
            : <DisabledButton>Checkout</DisabledButton>
          }
        </Div>
      </Aside>
    </section>
  )
}

// styles
const Aside = styled.aside`
  width: 100%;
  padding: 2rem;
  background: white;
`

const H1 = styled.h1`
  padding: 0 0 2rem 0.5rem;
  font-size: 1.5rem;
`

const Div = styled.div`
  padding-left: 0.5rem;
`


const Button = styled(Link)`
  font-size: 105%;
  padding: 7px 12px;
  background-color: #347ab7;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
`

const DisabledButton = styled.button`
  font-size: 105%;
  padding: 7px 12px;
  background-color: silver;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;

  :focus {
    outline: none;
  }
`

const mapStateToProps = (state) => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  changeIsCartOpenTo: (bool) => dispatch(isCartOpen(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)