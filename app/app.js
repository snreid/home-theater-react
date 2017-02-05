import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const path = require('path')
import dvdApp from './reducers'
import { refreshLocations } from './actions'
import App from './components/App'

let store = createStore(dvdApp, applyMiddleware(thunk))
store.dispatch(refreshLocations())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
