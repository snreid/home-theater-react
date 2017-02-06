import React, { PropTypes } from 'react'
import { Displays } from '../actions'

const Navigation = ({ display, changeToLocations, changeToDvds }) => (
  <div>
    <button className="btn btn-default" onClick={changeToLocations}>
      Locations
    </button>
    <button className="btn btn-default" onClick={changeToDvds}>
      DVD Library
    </button>
  </div>
)

Navigation.propTypes = {
  display: PropTypes.string.isRequired,
  changeToLocations: PropTypes.func.isRequired,
  changeToDvds: PropTypes.func.isRequired,
}

export default Navigation
