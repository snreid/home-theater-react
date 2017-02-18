import React, { PropTypes } from 'react'
import VisibleDvds from './VisibleDvds'

const DisplayDvds = ({ shouldDisplay, addDvd, openQuickScan }) => (
  shouldDisplay &&
  <div>
    <button className='btn btn-default' onClick={addDvd}>
      Add DVDs
    </button>
    <button className='btn btn-default' onClick={openQuickScan}>
      Quick Scanner
    </button>
    <VisibleDvds />
  </div>
)

export default DisplayDvds
