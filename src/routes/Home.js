import React from 'react'
import { Link } from '@reach/router'

const Home = ({ products }) => (
  <div>
    <h1>Products</h1>
    <ul>
      {products.map((product, i) => {
        const { name, price } = product
        return (
          <li>
            <Link to={`product-${i + 1}`}>
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