import React, { PropTypes } from 'react'
import QuickScanDvd from '../containers/QuickScanDvd'
import AddDvd from '../containers/AddDvd'
import AddLocation from '../containers/AddLocation'

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')

var Tooltip = require('react-bootstrap').Tooltip
var OverlayTrigger = require('react-bootstrap').OverlayTrigger

const TopNav = () => {
  var addDVDTooltip = (
    <Tooltip id='add-dvd-tooltip'>Add DVD</Tooltip>
  )
  var addLocationTooltip = (
    <Tooltip id='add-dvd-tooltip'>Add Location</Tooltip>
  )
  var quickScanTooltip = (
    <Tooltip id='quick-scan-tooltip'><strong>Quick Scanner</strong> add DVDs by scanning their barcode.</Tooltip>
  )

  return(
    <div>
      <nav id='main-nav' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <OverlayTrigger placement='bottom' overlay={addLocationTooltip}>
            <button className='btn btn-default navbar-btn navbar-right'
                    data-toggle='modal'
                    data-target='#addLocationModal'>
              <span className='glyphicon glyphicon-map-marker' aria-hidden='true'></span>
            </button>
          </OverlayTrigger>
          <OverlayTrigger placement='bottom' overlay={addDVDTooltip}>
            <button className='btn btn-default navbar-btn navbar-right'
                    data-toggle='modal'
                    data-target='#addDvdModal'>
                <span className='glyphicon glyphicon-cd' aria-hidden='true'></span>
            </button>
          </OverlayTrigger>
          <OverlayTrigger placement='bottom' overlay={quickScanTooltip}>
            <button className='btn btn-default navbar-btn navbar-right'
                    data-toggle='modal'
                    data-target='#quickScanModal'>
              <span className='glyphicon glyphicon-barcode' aria-hidden='true'></span>
            </button>
          </OverlayTrigger>

          <form className='navbar-form navbar-right' role='search'>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Search'/>
            </div>
            <button className='btn btn-default'>
              <span className='glyphicon glyphicon-search' aria-hidden='true'></span>
            </button>
          </form>
        </div>
      </nav>

      <QuickScanDvd />
      <AddDvd />
      <AddLocation />

    </div>
  )
}

export default TopNav
