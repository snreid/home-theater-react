import React, { PropTypes } from 'react'
import { Displays } from '../actions'

const Navigation = ({ display, changeToLocations, changeToDvds }) => (
  <div id="sidebar-left" className="sidebar col-md-3 collapsed">
    <div className="list-group">
      <div className="list-group-item disabled">
        Home Theater
      </div>
			<a className="list-group-item" href='#' onClick={changeToDvds}>
				DVD Library
			</a>
			<a className="list-group-item" href="#" onClick={changeToLocations}>
				Locations
			</a>
    </div>
  </div>
)

Navigation.propTypes = {
  display: PropTypes.string.isRequired,
  changeToLocations: PropTypes.func.isRequired,
  changeToDvds: PropTypes.func.isRequired,
}

export default Navigation
