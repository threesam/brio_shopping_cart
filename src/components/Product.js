import React, { useState } from "react"
import { connect } from 'react-redux'
import { addItemToCart } from '../actions'

const Product = ({ name, price, description, image, id, addNewItemToCart, deleteExistingItemFromCart, appState }) => {
  // set initial quantity to 1
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    if (!counter || counter < 2) return // prevent zero or negatives
    setCounter(counter - 1)
  }

  // redux actions
  const handleAddToCart = () => {
    const item = {
      id,
      name,
      price,
      description,
      image,
      quantity: +counter // coerce to number
    }
    addNewItemToCart(item)
  }

  const handleInputChange = (e) => setCounter(e.target.value)

  return (
    <div className="product">
      <h1>{name}</h1>
      <img width="500" height="500" src={image} alt={`container of ${name}`} />
      <p>{description}</p>
      <span>{`$${price}`}</span>

      <h2>Quantity</h2>
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={counter} onChange={handleInputChange} />
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
  addNewItemToCart: (item) => dispatch(addItemToCart(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)