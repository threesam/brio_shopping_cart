import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../components/CartItem'
import { getSubtotal } from '../utils'

const Checkout = ({ appState }) => (
  <div>
    <h1>Checkout</h1>
    <ul>
      {appState.items.map(item => (<CartItem key={item.id} {...item} />))}
    </ul>
    <p>{appState.items.length !== 0
      ? `Total: $${getSubtotal(appState.items)}`
      : 'empty cart'}</p>
    <button onClick={() => window.alert('purchased')}>Purchase</button>
  </div>
)

const mapStateToProps = (state) => ({
  appState: state
})

export default connect(mapStateToProps)(Checkout)