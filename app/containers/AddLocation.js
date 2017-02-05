import React from 'react'
import { connect } from 'react-redux'
import { addLocation } from '../actions'

let AddLocation = ({ dispatch }) => {
  let row
	let shelf
	let stack

  return (
    <div className='col-md-12'>
      <div className='row'>&nbsp;</div>
      <div className='row'>
        <form className='form-inline' onSubmit={e => {
          e.preventDefault()
          if (!shelf.value.trim() || !row.value.trim() || !stack.value.trim()) {
            return
          }
					var params = {shelf: shelf.value, stack: stack.value, row: row.value}
          dispatch(addLocation(params))
        }}>
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
          <button className="btn btn-success" type="submit">
            Add Location
          </button>
        </form>
        <div className='row'>&nbsp;</div>
      </div>
    </div>
  )
}
AddLocation= connect()(AddLocation)

export default AddLocation
