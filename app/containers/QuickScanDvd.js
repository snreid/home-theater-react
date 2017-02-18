import React from 'react'
import { connect } from 'react-redux'
import { addDvdFromHomeTheaterInfo } from '../actions'

const QuickScanDvdComponent = ({dispatch, shouldDisplay, locations}) => {
  let upc_node
  let location_node

  return (
    shouldDisplay &&
      <div className='col-md-12'>
          <form onSubmit={e => {
            e.preventDefault()
            if (!upc_node.value.trim()) {
              return
            }
            var params = {UPC: upc_node.value, location_id: location_node.value}
            dispatch(addDvdFromHomeTheaterInfo(params))
            upc_node.value = ''
          }}>
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
            <button className="btn btn-success" type="submit">
              Add DVD
            </button>
          </form>
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
