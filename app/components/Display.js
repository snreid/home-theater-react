import React, { PropTypes } from 'react'
import DisplayLocations from '../containers/DisplayLocations'
import DisplayDvds from '../containers/DisplayDvds'
import { Displays } from '../actions'

const Display = ({ display }) => (
  <div>
    <DisplayLocations shouldDisplay={ display == Displays.LOCATIONS } />
    <DisplayDvds shouldDisplay={ display == Displays.DVDS } />
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Display
