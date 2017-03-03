import { all_dvds } from './persist/Dvd'
import { all_locations } from './persist/Location'

const { dialog } = window.require('electron').remote
var fs = window.require('fs')
var json2csv = require('json2csv')


var fields = ['DVD_Title', 'DVD_ReleaseDate', 'Genre', 'UPC', 'notes', 'location']

export function exportCsv(){
  var answer = dialog.showOpenDialog({
    properties: ['openDirectory']
  })

  all_dvds().then(function(dvds){
    all_locations().then(function(locations){
      var dvds_with_locations = dvds.map(function(dvd){
        var location = locations.filter(function(location){
          return location._id == dvd.location_id
        })
        var location_name = (location.length > 0) ? location[0].display_name : ''
        return Object.assign({location: location_name}, dvd)
      })

      var result = json2csv({data: dvds_with_locations, fields: fields})

      fs.writeFile(answer[0] + '/my-dvd-library.csv', result, function(err){
        if(err){
          return console.log(err)
        }
        console.log('file was saved!')
      })
    })
  })

}
