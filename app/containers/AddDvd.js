import React from 'react'
import { connect } from 'react-redux'
import { addDvd } from '../actions'
import VisibleAlerts from '../containers/VisibleAlerts'

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')

class AddDvdComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let title
    let notes
    let date
    let genre
    let location_node

    return (

    <div className='modal fade' id='addDvdModal' tabIndex='-1' role='dialog' aria-labelledby='addDvdModalLabel'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="addDvdModalLabel">Add DVD</h4>
          </div>

          <form onSubmit={e => {
            e.preventDefault()
            if (!title.value.trim()) {
              return
            }
            var params = {DVD_Title: title.value, DVD_ReleaseDate: date.value, Genre: genre.value, location_id: location_node.value, notes: notes.value}
            this.props.dispatch(addDvd(params))
            title.value = ''
            date.value = ''
            genre.value = ''
            notes.value = ''
          }}>
            <div className='modal-body'>
              <VisibleAlerts />
              <div className='form-group'>
                <label>Title: </label>
                <input className='form-control' ref={node => {
                  title = node
                }} />
              </div>
              <div className='form-group'>
                <label>Release Date: </label>
                <input className='form-control' ref={node => {
                  date = node
                }} />
              </div>
              <div className='form-group'>
                <label>Genre: </label>
                <input className='form-control' ref={node => {
                  genre= node
                }} />
              </div>
              <div className='form-group'>
                <label>Location: </label>
                <select className='form-control' ref={node => {
                  location_node= node
                }}>
                  {this.props.locations.map(function(location){
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
                  <textarea className='form-control' ref={node => {
                    notes = node
                  }} />
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button className="btn btn-success" type="submit">
                Add DVD
              </button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </form>

        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}
let AddDvd = connect(mapStateToProps)(AddDvdComponent)

export default AddDvd
