import React, { PropTypes } from 'react'
import { Displays } from '../actions'

const Navigation = ({ display, changeToLocations, changeToDvds }) => (
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <li className="sidebar-brand">
        Home Theater
      </li>
      <li>
        <a href='#' onClick={changeToDvds}>
          DVD Library
        </a >
      </li>
      <li>
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
