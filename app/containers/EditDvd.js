import React from 'react'
import { connect } from 'react-redux'
import { updateDvd } from '../actions'

const EditDvdComponent = ({ dispatch, dvd, locations }) => {
    let title
    let date
    let genre
    let notes
    let location_node

    return (
    <div className='modal fade' id={`editDvd${dvd._id}Modal`} tabIndex='-1' role='dialog' aria-labelledby='editDvdModalLabel'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="editDvdModalLabel">{`Editing ${dvd.DVD_Title}`}</h4>
          </div>

          <div className='modal-body'>
            <form onSubmit={e => {
              e.preventDefault()
              if (!title.value.trim()) {
                return
              }
              var params = {DVD_Title: title.value, DVD_ReleaseDate: date.value, Genre: genre.value, location_id: location_node.value, notes: notes.value}
              dispatch(updateDvd(dvd._id, params))
            }}>
              <div className='form-group'>
                <label>Title: </label>
                <input className='form-control'
                       defaultValue={dvd.DVD_Title}
                       ref={node => {
                         title = node
                       }}
                />
              </div>
              <div className='form-group'>
                <label>Release Date: </label>
                <input className='form-control'
                       defaultValue={dvd.DVD_ReleaseDate}
                        ref={node => {
                          date = node
                        }}
                />
              </div>
              <div className='form-group'>
                <label>Genre: </label>
                <input className='form-control'
                       defaultValue={dvd.Genre}
                       ref={node => {
                        genre= node
                       }}
                />
              </div>
              <div className='form-group'>
                <label>Location: </label>
                <select className='form-control'
                        defaultValue={dvd.location_id}
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
                <div className='form-group'>
                  <label>Notes: </label>
                  <textarea className='form-control'
                            defaultValue={dvd.notes}
                            ref={node => {
                              notes = node
                            }}
                  />
                </div>
              </div>
              <button className="btn btn-success" type="submit">
                Update DVD
              </button>
            </form>
          </div>

					<div className='modal-footer'>
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					</div>
        </div>
      </div>
    </div>
    )
}

let EditDvd = connect()(EditDvdComponent)

export default EditDvd
