import React from 'react'
import { connect } from 'react-redux'
import { addDvdFromHomeTheaterInfo } from '../actions'

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')

const QuickScanDvdComponent = ({dispatch, shouldDisplay, locations}) => {
  let upc_node
  let location_node

  return(
    <div className='modal fade' id='myModal' tabIndex='-1' role='dialog' aria-labelledby='myModalLabel'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">Modal title</h4>
          </div>

          <div className='modal-body'>
            This is the body of the modal. Pretty cool, huh?
          </div>
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
