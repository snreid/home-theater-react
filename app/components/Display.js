import React, { PropTypes } from 'react'
import DisplayLocations from '../containers/DisplayLocations'
import DisplayDvds from '../containers/DisplayDvds'
import { Displays } from '../actions'

const Display = ({ display }) => (
  <div className="col-md-12" id="content">
    <div className="container-fluid">
			<div className="row">
				<button className="btn btn-default" id="toggle-sidebar-left">
					<span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
				</button>
			</div>
      <DisplayLocations shouldDisplay={ display == Displays.LOCATIONS } />
      <DisplayDvds shouldDisplay={ display == Displays.DVDS } />
    </div>
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Display
