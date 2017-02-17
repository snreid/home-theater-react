import React, { PropTypes } from 'react'
import AddDvd from '../containers/AddDvd'
import { Sidebars } from '../actions'

const Sidebar = ({ sidebar }) => {
  return (
    <div id='sidebar-right' className="sidebar collapsed col-md-3 ">
      <div className='well affix'>
      <AddDvd shouldDisplay={ sidebar == Sidebars.ADD_DVD }/>
      </div>
    </div>
  )
}

export default Sidebar

