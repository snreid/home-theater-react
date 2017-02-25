import React, { PropTypes } from 'react'
import VisibleHomeTheater from './VisibleHomeTheater'

const DisplayHomeTheater = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <VisibleHomeTheater />
  </div>
)

export default DisplayHomeTheater
