import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'

const DisplayDvds = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <button className='toggle-sidebar btn btn-default'>Add DVDs</button>
    <VisibleDvds />
  </div>
)

export default DisplayDvds
