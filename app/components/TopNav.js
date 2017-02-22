import React, { PropTypes } from 'react'
import QuickScanDvd from '../containers/QuickScanDvd'
import AddDvd from '../containers/AddDvd'
import AddLocation from '../containers/AddLocation'
import { searchDvds } from '../actions'

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')
var Tooltip = require('react-bootstrap').Tooltip
var OverlayTrigger = require('react-bootstrap').OverlayTrigger

const TopNav = ({ dispatch, locations }) => {
  var addDVDTooltip = (
    <Tooltip id='add-dvd-tooltip'>Add DVD</Tooltip>
  )
  var addLocationTooltip = (
    <Tooltip id='add-dvd-tooltip'>Add Location</Tooltip>
  )
  var quickScanTooltip = (
    <Tooltip id='quick-scan-tooltip'><strong>Quick Scanner</strong> add DVDs by scanning their barcode.</Tooltip>
  )
  let search_node
  let location_node

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

          <form className='navbar-form navbar-right'
                role='search'
                onSubmit={e => {
                  e.preventDefault()
                  let filters
                  if(location_node.value.trim()){
                    filters = { location_id: location_node.value }
                  }
                  dispatch(searchDvds(search_node.value, filters))
                }}
          >
            <div className='form-group'>
              <input type='text'
                    className='form-control'
                    placeholder='Search'
                    ref={node=>{
                      search_node = node
                    }}
              />
            </div>
            <div className='form-group'>
                <select className='form-control'
                        defaultValue=''
                        ref={node => {
                          location_node= node
                        }}>
                  <option value=''>
                    -- Choose --
                  </option>
                  {locations.map(function(location){
                    return(
                      <option key={location._id} value={location._id}>
                        {location.display_name}
                      </option>
                    )
                    }
                  )}
                </select>
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
