import React, { PropTypes } from 'react'
import DisplayLocations from '../containers/DisplayLocations'
import DisplayDvds from '../containers/DisplayDvds'
import VisibleAlerts from '../containers/VisibleAlerts'
import VisibleTopNav from '../containers/VisibleTopNav'
import { Displays } from '../actions'

const Display = ({ display }) => (
  <div id="page-content-wrapper">
    <button className="hamburger is-closed" type="button" data-toggle="offcanvas">
      <span className="hamb-top"></span>
      <span className="hamb-middle"></span>
      <span className="hamb-bottom"></span>
    </button>
    <div className="container" id='main-container'>
			<div className="row" id='main-row'>
        <VisibleTopNav />
        <div className='col-md-12' id='content'>
          <VisibleAlerts />
          <DisplayLocations shouldDisplay={ display == Displays.LOCATIONS } />
          <DisplayDvds shouldDisplay={ display == Displays.DVDS } addDvd={() => addDvd()} openQuickScan={() => openQuickScan()} />
        </div>
			</div>
    </div>
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Display
