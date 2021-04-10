import React from 'react'
import ReactDOM from 'react-dom'
// component
import App from './App'

// sync redux store
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)