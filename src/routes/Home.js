import React from 'react'
import { Link } from '@reach/router'
import { indexToLetter } from '../utils'

const Home = ({ products }) => (
  <div>
    <h1>Products</h1>
    <ul>
      {products.map((product, i) => {
        const { name, price } = product
        return (
          <li key={i}>
            <Link to={`product-${indexToLetter(i)}`}>
              {name}
              <span> - ${price}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Home