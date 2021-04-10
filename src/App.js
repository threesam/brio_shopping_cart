import React from 'react'
import { Router } from "@reach/router"
import { connect } from 'react-redux'
import { addTask } from './actions'

// routes
import Home from './routes/Home'
import Checkout from './routes/Checkout'

// components
import Nav from './components/Nav'
import Product from './components/Product'

// data
import products from "./data/products"


const App = ({ appState, addNewTask }) => {

  function handleAddTask() {
    const task = document.querySelector('.task').value
    addNewTask(task)
  }

  return (
    <div className="App">
      <h1>Tasks</h1>
      <div className="tasks">
        {appState.tasks.map((task, i) => (
          <p key={i}>{task}</p>
        ))}
      </div>

      <input type="text" className="task" />
      <button onClick={handleAddTask}>Add Task</button>
      <hr />
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

const mapStateToProps = (state) => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  addNewTask: task => dispatch(addTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
   