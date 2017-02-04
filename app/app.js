import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const path = require('path')
import { importDvdLibrary } from './hometheaterinfo'

render(
  <div className="row">
    <div className="col-md-12">
      <button className="btn btn-default" onClick={importDvdLibrary} >Import</button>
    </div>
  </div>,
  document.getElementById('content')
)
