import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'
import AddDvd from './AddDvd'

const DisplayDvds = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <h2>DVD Library</h2>
    <AddDvd />
    <VisibleDvds />
  </div>
)

export default DisplayDvds
