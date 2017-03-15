import React from 'react'
import { connect } from 'react-redux'
import { addDvdFromHomeTheaterInfo } from '../actions'
import VisibleModalAlerts from '../containers/VisibleModalAlerts'
import { openHomeTheater } from '../OpenInBrowser'

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')

const QuickScanDvdComponent = ({dispatch, shouldDisplay, locations}) => {
  let upc_node
  let location_node

  return(
    <div className='modal fade' id='quickScanModal' tabIndex='-1' role='dialog' aria-labelledby='quickScanModalLabel'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="quickScanModalLabel">
              Quick Scanner
              <small>
                <div>Powered by <a onClick={openHomeTheater}>Home Theater Info </a></div>
              </small>
            </h4>
          </div>

          <form onSubmit={e => {
            e.preventDefault()
            if (!upc_node.value.trim()) {
              return
            }
            var params = {UPC: upc_node.value, location_id: location_node.value}
            dispatch(addDvdFromHomeTheaterInfo(params))
            upc_node.value = ''
          }}>
            <div className='modal-body'>
              <VisibleModalAlerts />
							<div className='form-group'>
								<label>UPC: </label>
								<input className='form-control'
												ref={node => {
													upc_node = node
												}}
								/>
							</div>
							<div className='form-group'>
								<label>Location: </label>
								<select className='form-control'
												ref={node => {
													location_node= node
												}}
								>
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
            <div className='modal-footer'>
							<button className="btn btn-success" type="submit">
								Add DVD
							</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>

            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}
let QuickScanDvd = connect(mapStateToProps)(QuickScanDvdComponent)

export default QuickScanDvd
