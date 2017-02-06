import React, { PropTypes } from 'react'
import VisibleDisplay from '../containers/VisibleDisplay'
import { Displays } from '../actions'

const App = ({ display }) => (
  <div>
    <VisibleDisplay />
  </div>
)

App.propTypes = {
  display: PropTypes.string.isRequired
}
export default App
