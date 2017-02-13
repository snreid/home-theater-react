import React from 'react'
import { connect } from 'react-redux'
import { addDvd } from '../actions'

const BrowserWindow = window.require("electron").remote.BrowserWindow
const path = require('path')
const url = require('url')
const $ = require('jquery')

class AddDvdComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $('#new-window').on('click', function(event){
      let win = new BrowserWindow({width: 400, height: 320 })

      // TODO: will this work on win32?
      var file_loc = location.pathname.split('/')
      file_loc.pop()
      file_loc = (file_loc.join('/')) + '/app/containers/add-dvd.html'

      win.loadURL(url.format({
        pathname: file_loc,
        protocol: 'file:',
        slashes: true
      }))
      win.on('close', function(){ win = null })
      win.show()
    })
  }

  render(){
    let title
    let date
    let genre

    return (
      <div className='col-md-12'>
        <div className='row'>&nbsp;</div>
        <button className='btn btn-default' id='new-window'>Add Dvd Modal</button>
        <div className='row'>
          <form className='form-inline' onSubmit={e => {
            e.preventDefault()
            if (!title.value.trim()) {
              return
            }
            var params = {DVD_Title: title.value, DVD_ReleaseDate: date.value, Genre: genre.value}
            this.props.dispatch(addDvd(params))
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
}

let AddDvd = connect()(AddDvdComponent)

export default AddDvd
