import React, { PropTypes } from 'react'
import { Displays } from '../actions'

const Navigation = ({ display, changeToLocations, changeToDvds }) => (
  <div id="sidebar-wrapper" role="navigation" className="navbar navbar-inverse navbar-fixed-top">
    <ul className="nav sidebar-nav">
			<li className="sidebar-brand">
				<a href="#">
					Home Theater
				</a>
			</li>
			<li className="nav-closer" data-toggle="offcanvas">
				<a href='#' onClick={changeToDvds}>
					DVD Library
				</a>
			</li>
			<li className="nav-closer" data-toggle="offcanvas">
				<a href="#" onClick={changeToLocations}>
					Locations
				</a>
			</li>
    </ul>
  </div>
)

Navigation.propTypes = {
  display: PropTypes.string.isRequired,
  changeToLocations: PropTypes.func.isRequired,
  changeToDvds: PropTypes.func.isRequired,
}

export default Navigation
