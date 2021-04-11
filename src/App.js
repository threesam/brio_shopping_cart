import React from 'react'
import { Router } from "@reach/router"
import { indexToLetter } from './utils'

// routes
import Home from './routes/Home'
import Checkout from './routes/Checkout'

// components
import Navbar from './components/Navbar'
import Product from './components/Product'

// data
import products from "./data/products"

const App = () => {
  return (
    <div className="App">
      <Navbar products={products} />

      <Router>
        <Home products={products} path="/" />
        <Checkout path="checkout" />
        {products.map((product, i) => (
          <Product key={i} {...product} path={`product-${indexToLetter(i)}`} />
          )
        )}
      </Router>
    </div>
  )
}

export default App
   