import React, { PropTypes } from 'react'
import AddDvd from '../containers/AddDvd'
import DvdDetails from '../containers/DvdDetails'
import { Sidebars } from '../actions'

const Sidebar = ({ displayingDvd, sidebar }) => {
  return (
    <div id='sidebar-right' className="sidebar collapsed col-md-3 ">
      <div className='well affix'>
      <AddDvd shouldDisplay={ sidebar == Sidebars.ADD_DVD }/>
      <DvdDetails dvd={displayingDvd} shouldDisplay={sidebar == Sidebars.SHOW_DVD} />
      </div>
    </div>
  )
}

export default Sidebar

