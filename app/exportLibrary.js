import { all_dvds } from './persist/Dvd'

const { dialog } = window.require('electron').remote
var fs = window.require('fs')
var json2csv = require('json2csv')


var fields = ['DVD_Title', 'DVD_ReleaseDate', 'Genre', 'UPC', 'notes']

export function exportCsv(){
  var answer = dialog.showOpenDialog({
    properties: ['openDirectory']
  })

  console.log(answer)

  all_dvds().then(function(dvds){
    var result = json2csv({data: dvds, fields: fields})

    fs.writeFile(answer[0] + '/my-dvd-library.csv', result, function(err){
      if(err){
        return console.log(err)
      }
      console.log('file was saved!')
    })
  })

}
