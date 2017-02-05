import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'

const DisplayDvds = ({ shouldDisplay }) => (
  shouldDisplay &&
  <VisibleDvds />
)

export default DisplayDvds
