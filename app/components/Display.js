import React, { PropTypes } from 'react'
import DisplayLocations from '../containers/DisplayLocations'
import DisplayDvds from '../containers/DisplayDvds'
import VisibleSidebar from '../containers/VisibleSidebar'
import { Displays } from '../actions'

const Display = ({ display }) => (
  <div id="page-content-wrapper">
    <button className="hamburger is-closed" type="button" data-toggle="offcanvas">
      <span className="hamb-top"></span>
      <span className="hamb-middle"></span>
      <span className="hamb-bottom"></span>
    </button>
    <div className="container">
			<div className="row" id='main-row'>
        <div className='col-md-12' id='content'>
          <DisplayLocations shouldDisplay={ display == Displays.LOCATIONS } />
          <DisplayDvds shouldDisplay={ display == Displays.DVDS } />
        </div>
        <VisibleSidebar />
			</div>
    </div>
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Display
