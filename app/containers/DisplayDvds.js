import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'

const DisplayDvds = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <VisibleDvds />
  </div>
)

export default DisplayDvds
