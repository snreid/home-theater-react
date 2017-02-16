import React from 'react'
import { connect } from 'react-redux'
import { addDvd } from '../actions'

//const BrowserWindow = window.require("electron").remote.BrowserWindow
const path = require('path')
const url = require('url')
const $ = require('jquery')

//const ipc = window.require('electron').ipcRenderer
//ipc.on('asynchronous-message', function(event,arg){
//  console.log('received message: ' + arg)
//  event.sender.send('asynchronous-reply', 'pong')
//})

class AddDvdComponent extends React.Component{
  constructor(props){
    super(props)
  }

//  componentDidMount(){
//    $('#new-window').on('click', function(event){
//      let win = new BrowserWindow({width: 400, height: 320 })
//
//      // TODO: will this work on win32?
//      var file_loc = location.pathname.split('/')
//      file_loc.pop()
//      file_loc = (file_loc.join('/')) + '/app/containers/add-dvd.html'

//      win.webContents.openDevTools()
//      win.loadURL(url.format({
//       pathname: file_loc,
//        protocol: 'file:',
//        slashes: true
//      }))
//      win.on('close', function(){ win = null })
//      win.show()
//    })
//<button className='btn btn-default' id='new-window'>Add Dvd Modal</button>
//  }

  render(){
    let title
    let date
    let genre
    let location_node

    return (
      <div className='col-md-12'>
        <div className='row'>&nbsp;</div>
        <div className='row'>
          <form className='form-inline' onSubmit={e => {
            e.preventDefault()
            if (!title.value.trim()) {
              return
            }
            var params = {DVD_Title: title.value, DVD_ReleaseDate: date.value, Genre: genre.value, location_id: location_node.value}
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
