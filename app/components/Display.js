import React, { PropTypes } from 'react'
import DisplayLocations from '../containers/DisplayLocations'
import DisplayDvds from '../containers/DisplayDvds'
import { Displays } from '../actions'

const Display = ({ display }) => (
  <div className="col-md-9" id="content">
    <div className="container-fluid">
      <DisplayLocations shouldDisplay={ display == Displays.LOCATIONS } />
      <DisplayDvds shouldDisplay={ display == Displays.DVDS } />
			<div className="row">
				<button className="btn btn-default" id="toggle-sidebar-left">
					Toggle Navigation
				</button>
			</div>
    </div>
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Display
