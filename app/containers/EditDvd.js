import React from 'react'
import { connect } from 'react-redux'
import { updateDvd } from '../actions'

const EditDvdComponent = ({ dispatch, shouldDisplay, displayingDvd, locations }) => {
    let title
    let date
    let genre
    let location_node

    return (
      shouldDisplay &&
        <div className='col-md-12'>
          <div className='row'>&nbsp;</div>
          <div className='row'>
            <form onSubmit={e => {
              e.preventDefault()
              if (!title.value.trim()) {
                return
              }
              var params = {DVD_Title: title.value, DVD_ReleaseDate: date.value, Genre: genre.value, location_id: location_node.value}
              dispatch(updateDvd(displayingDvd._id, params))
            }}>
              <div className='form-group'>
                <label>Title: </label>
                <input className='form-control'
                       defaultValue={displayingDvd.DVD_Title}
                       ref={node => {
                         title = node
                       }}
                />
              </div>
              <div className='form-group'>
                <label>Release Date: </label>
                <input className='form-control'
                       defaultValue={displayingDvd.DVD_ReleaseDate}
                        ref={node => {
                          date = node
                        }}
                />
              </div>
              <div className='form-group'>
                <label>Genre: </label>
                <input className='form-control'
                       defaultValue={displayingDvd.Genre}
                       ref={node => {
                        genre= node
                       }}
                />
              </div>
              <div className='form-group'>
                <label>Location: </label>
                <select className='form-control'
                        defaultValue={displayingDvd.location_id}
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
                Update DVD
              </button>
            </form>
            <div className='row'>&nbsp;</div>
          </div>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    displayingDvd: state.displayingDvd
  }
}

let EditDvd = connect(mapStateToProps)(EditDvdComponent)

export default EditDvd
