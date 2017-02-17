import React, { PropTypes } from 'react'
import AddDvd from '../containers/AddDvd'
import DvdDetails from '../containers/DvdDetails'
import { Sidebars } from '../actions'
import { closeSidebar } from '../mixins/ToggleSidebar'

const Sidebar = ({ displayingDvd, sidebar }) => {
  return (
    <div id='sidebar-right' className="sidebar collapsed col-md-3 ">
      <div className='well affix'>
      <div className='row'>
        <div className='col-md-12'>
          <button className='btn btn-default pull-right' onClick={closeSidebar}>
            x
          </button>
        </div>
      </div>
        <AddDvd shouldDisplay={ sidebar == Sidebars.ADD_DVD }/>
        <DvdDetails dvd={displayingDvd} shouldDisplay={sidebar == Sidebars.SHOW_DVD} />
      </div>
    </div>
  )
}

export default Sidebar

