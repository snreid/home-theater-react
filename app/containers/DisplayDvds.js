import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'

const DisplayDvds = ({ shouldDisplay, addDvd }) => (
  shouldDisplay &&
  <div>
    <button className='btn btn-default' onClick={addDvd}>
      Add DVDs
    </button>
    <VisibleDvds />
  </div>
)

export default DisplayDvds
