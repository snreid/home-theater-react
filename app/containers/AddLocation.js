import React from 'react'
import { connect } from 'react-redux'
import { addLocation } from '../actions'
import VisibleModalAlerts from '../containers/VisibleModalAlerts'

let AddLocation = ({ dispatch }) => {
  let row
	let shelf
	let stack

  return (
    <div className='modal fade' id='addLocationModal' tabIndex='-1' role='dialog' aria-labelledby='addLocationModalLabel'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="addLocationModalLabel">Add Location</h4>
          </div>

          <form onSubmit={e => {
            e.preventDefault()
            if (!shelf.value.trim() || !row.value.trim() || !stack.value.trim()) {
              return
            }
            var params = {shelf: shelf.value, stack: stack.value, row: row.value}
            dispatch(addLocation(params))
          }}>
            <div className='modal-body'>
              <VisibleModalAlerts />
              <div className='form-group'>
                <label>Shelf: </label>
                <input className='form-control' ref={node => {
                  shelf = node
                }} />
              </div>
              <div className='form-group'>
                <label>Row: </label>
                <input className='form-control' ref={node => {
                  row = node
                }} />
              </div>
              <div className='form-group'>
                <label>Stack: </label>
                <input className='form-control' ref={node => {
                  stack = node
                }} />
              </div>
            </div>
            <div className='modal-footer'>
              <button className="btn btn-success" type="submit">
                Add Location
              </button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
AddLocation= connect()(AddLocation)

export default AddLocation
