import React, { useState } from "react"
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addItemToCart, isCartOpen } from '../actions'

// imported styles
import { PrimaryButton } from '../styles/styles'

const Product = ({ name, price, description, image, id }) => {
  const dispatch = useDispatch()
  // init quantity to 1
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    if (!counter || counter < 2) return // prevent zero or negatives
    setCounter(counter - 1)
  }

  // dispatch actions
  const handleAddToCart = () => {
    const item = {
      id,
      name,
      price,
      description,
      image,
      quantity: +counter // coerce to number
    }
    dispatch(addItemToCart(item))
    dispatch(isCartOpen(true))
    setCounter(1)
  }

  const handleInputChange = (e) => setCounter(e.target.value)

  return (
    <>
      <H1>{name}</H1>
      <GridContainer>
        <ProductImage width="350" height="350" src={image} alt={`container of ${name}`} />
        <ProductDescription>{description}</ProductDescription>
      </GridContainer>
      <Price>{`$${price}`}</Price>

      <Quantity>
        <p>Quantity</p>
        <Counter>
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={counter} onChange={handleInputChange} />
        <button onClick={handleIncrement}>+</button>
        </Counter>
      </Quantity>
      <PrimaryButton onClick={handleAddToCart}>Add to Cart</PrimaryButton>
    </>
  )
}

// styles

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const H1 = styled.h1`
  padding: 2rem 0;
`

const ProductImage = styled.img`
  box-shadow: 5px 5px 5px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.1);
`

const ProductDescription = styled.p`
  font-size: 1.3rem;
  min-width: 350px;
  max-width: 500px;
`

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  padding-bottom: 1.5rem;
`

const Quantity = styled.div`
  display: block;
`

const Counter = styled.div`
  display: inline-block;
  margin: 0.5rem 0 1.5rem 0;
  box-shadow: 0 0 2px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 0.25rem;
  overflow: hidden;

  button {
    color: #333;
    width: 1.7rem;
  }

  input {
    width: 2.3rem;
  }
  
  * {
    width: 2rem;
    height: 2rem;
    outline: none;
    border: none;
    border-radius: 0;
    text-align: center;
  }
`

export default Product