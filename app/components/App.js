import React, { PropTypes } from 'react'
import VisibleDisplay from '../containers/VisibleDisplay'
import VisibleNavigation from '../containers/VisibleNavigation'

const App = ({ display }) => (
  <div>
		<VisibleNavigation />
    <VisibleDisplay />
  </div>
)

App.propTypes = {
  display: PropTypes.string.isRequired
}

export default App
