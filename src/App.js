import React from 'react'
import { Router } from "@reach/router"

// routes
import Home from './routes/Home'
import Checkout from './routes/Checkout'

// components
import Nav from './components/Nav'
import Product from './components/Product'

// data
import products from "./data/products"


const App = () => {


  return (
    <div className="App">
      <Nav products={products} />

      <Router>
        <Home products={products} path="/" />
        <Checkout path="checkout" />
        {products.map((product, i) => {
          return (
            <Product {...product} path={`product-${i + 1}`} />
          )
        })}
      </Router>
    </div>
  )
}

export default App;
