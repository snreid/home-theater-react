import React, { PropTypes } from 'react'
import VisibleLocations from './VisibleLocations'

const DisplayLocations = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <h2>Locations</h2>
    <VisibleLocations />
  </div>
)

export default DisplayLocations
