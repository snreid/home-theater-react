import React, { PropTypes } from 'react'
import AddLocation from './AddLocation'
import VisibleLocations from './VisibleLocations'

const DisplayLocations = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <h2>Locations</h2>
    <AddLocation />
    <VisibleLocations />
  </div>
)

export default DisplayLocations
