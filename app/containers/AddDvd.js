import React from 'react'
import { connect } from 'react-redux'
import { addDvd } from '../actions'

const path = require('path')
const url = require('url')
const $ = require('jquery')


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
      this.props.shouldDisplay &&
        <div className='col-md-12'>
          <div className='row'>&nbsp;</div>
          <div className='row'>
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
              <button className="btn btn-success" type="submit">
                Add DVD
              </button>
            </form>
            <div className='row'>&nbsp;</div>
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
