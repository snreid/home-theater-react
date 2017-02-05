import React from 'react'
import { connect } from 'react-redux'
import { addDvd } from '../actions'

let AddDvd = ({ dispatch }) => {
  let title
	let date
	let genre

  return (
    <div className='col-md-12'>
      <div className='row'>&nbsp;</div>
      <div className='row'>
        <form className='form-inline' onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim()) {
            return
          }
					var params = {DVD_Title: title.value, DVD_ReleaseDate: date.value, Genre: genre.value}
          dispatch(addDvd(params))
          title.value = ''
          date.value = ''
          genre.value = ''
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
          <button className="btn btn-success" type="submit">
            Add DVD
          </button>
        </form>
        <div className='row'>&nbsp;</div>
      </div>
    </div>
  )
}
AddDvd= connect()(AddDvd)

export default AddDvd
