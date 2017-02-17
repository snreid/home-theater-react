import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'
import { toggleSidebar } from '../mixins/ToggleSidebar'

const DisplayDvds = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <button className='toggle-sidebar btn btn-default' onClick={toggleSidebar}>
      Add DVDs
    </button>
    <VisibleDvds />
  </div>
)

export default DisplayDvds
