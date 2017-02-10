import React from 'react'
import { connect } from 'react-redux'
import { addDvd } from '../actions'

const BrowserWindow = window.require("electron").remote.BrowserWindow
const path = require('path')
const $ = require('jquery')

class AddDvdComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("this thing mounted")
    const newWindowBtn = document.getElementById('new-window')
    newWindowBtn.addEventListener('click', function(event){
      const modalPath = path.join('file://', __dirname, 'add-dvd.html')
      console.log(modalPath)
      let win = new BrowserWindow({width: 400, height: 320, "web-preferences":{"web-security": false} })
      win.webContents.openDevTools()
      win.on('close', function(){ win = null })
      win.loadURL(modalPath)
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
