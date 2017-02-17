import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'
import { toggleSidebar } from '../mixins/ToggleSidebar'

const DisplayDvds = ({ shouldDisplay }) => (
  shouldDisplay &&
  <div>
    <button className='btn btn-default' onClick={toggleSidebar}>
      Add DVDs
    </button>
    <VisibleDvds />
  </div>
)

export default DisplayDvds
