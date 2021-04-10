import React, { useState } from "react"
import { connect } from 'react-redux'
import { addItemToCart } from '../actions'

const Product = ({ name, price, description, image, id, addNewItemToCart, appState }) => {
  console.log('appState', appState.items)
  // product counter
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    if (!counter || counter < 2) return
    setCounter(counter - 1)
  }

  // redux action
  function handleAddToCart() {
    const item = {
      id,
      quantity: counter
    }
    addNewItemToCart(item)
  }


  return (
    <div className="product">
      <h1>{name}</h1>
      <img width="500" height="500" src={image} alt={`container of ${name}`} />
      <p>{description}</p>
      <span>{`$${price}`}</span>

      <h2>Quantity</h2>
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  addNewItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)