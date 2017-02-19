import React, { PropTypes } from 'react'
import DisplayLocations from '../containers/DisplayLocations'
import DisplayDvds from '../containers/DisplayDvds'
import VisibleSidebar from '../containers/VisibleSidebar'
import VisibleAlerts from '../containers/VisibleAlerts'
import { Displays } from '../actions'

const Display = ({ display, addDvd, openQuickScan }) => (
  <div id="page-content-wrapper">
    <button className="hamburger is-closed" type="button" data-toggle="offcanvas">
      <span className="hamb-top"></span>
      <span className="hamb-middle"></span>
      <span className="hamb-bottom"></span>
    </button>
    <div className="container" id='main-container'>
      <nav id='main-nav' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
        </div>
      </nav>
			<div className="row" id='main-row'>
        <div className='col-md-12' id='content'>
          <VisibleAlerts />
          <DisplayLocations shouldDisplay={ display == Displays.LOCATIONS } />
          <DisplayDvds shouldDisplay={ display == Displays.DVDS } addDvd={() => addDvd()} openQuickScan={() => openQuickScan()} />
        </div>
        <VisibleSidebar />
			</div>
    </div>
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
  addDvd: PropTypes.func.isRequired,
  openQuickScan: PropTypes.func.isRequired,
}

export default Display
