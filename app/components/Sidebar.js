import React, { PropTypes } from 'react'
import AddDvd from '../containers/AddDvd'
import EditDvd from '../containers/EditDvd'
import DvdDetails from '../containers/DvdDetails'
import QuickScanDvd from '../containers/QuickScanDvd'
import { Sidebars } from '../actions'
import { closeSidebar } from '../mixins/ToggleSidebar'

const Sidebar = ({ displayingDvd, locations, sidebar }) => {
  return (
    <div id='sidebar-right' className="sidebar collapsed col-md-3 ">
      <div className='well affix'>
        <span className='pull-right' onClick={closeSidebar}>
          X
        </span>
        <AddDvd shouldDisplay={ sidebar == Sidebars.ADD_DVD }/>
        <DvdDetails dvd={displayingDvd} locations={locations} shouldDisplay={sidebar == Sidebars.SHOW_DVD} />
        <EditDvd displayingDvd={displayingDvd} location={locations} shouldDisplay={sidebar == Sidebars.EDIT_DVD} />
        <QuickScanDvd locations={locations} shouldDisplay={sidebar == Sidebars.QUICK_SCAN } />
      </div>
    </div>
  )
}

export default Sidebar

