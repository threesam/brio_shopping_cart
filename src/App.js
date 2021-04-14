import React from 'react'
import { Router } from "@reach/router"
import { indexToLetter } from './utils'
import GlobalStyle from './styles/globalStyles'

// routes
import Home from './routes/Home'
import Checkout from './routes/Checkout'

// components
import PageLayout from './components/PageLayout'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'

// data
import products from "./data/products"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar products={products} />
        <Cart />
        <PageLayout>
          <Router>
              <Home products={products} path="/" />
              <Checkout path="checkout" />
              {products.map((product, i) => (
                <Product key={i} {...product} path={`product-${indexToLetter(i)}`} />
                )
                )}
          </Router>
        </PageLayout>
      </div>
    </>
  )
}

export default App
   