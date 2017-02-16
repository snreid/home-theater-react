import React, { PropTypes } from 'react'
import AddDvd from '../containers/AddDvd'

const Sidebar = () => (
  <div id='sidebar-right' className="sidebar collapsed col-md-3 ">
    <div className='well affix'>
      <AddDvd />
    </div>
  </div>
)

export default Sidebar

