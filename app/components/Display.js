import React, { PropTypes } from 'react'
import DisplayLocations from '../containers/DisplayLocations'
import DisplayDvds from '../containers/DisplayDvds'
import { Displays } from '../actions'

const Display = ({ display, changeToLocations, changeToDvds}) => (
  <div>
    <button className="btn btn-default" onClick={changeToLocations}>
      Locations
    </button>
    <button className="btn btn-default" onClick={changeToDvds}>
      DVD Library
    </button>
    <DisplayLocations shouldDisplay={ display == Displays.LOCATIONS } />
    <DisplayDvds shouldDisplay={ display == Displays.DVDS } />
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
  changeToLocations: PropTypes.func.isRequired,
  changeToDvds: PropTypes.func.isRequired,
}

export default Display
