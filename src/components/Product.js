import React from "react"

const Product = (props) => {
  const { name, price, description, image } = props
  return (
    <div>
      <h1>{name}</h1>
      <img width="500" height="500" src={image} alt={`container of ${name}`} />
      <p>{description}</p>
      <span>{`$${price}`}</span>
    </div>
  )
}

export default Product