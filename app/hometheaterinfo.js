import { purge, insert, bulk_insert } from './persist/HomeTheaterInfo'

const { dialog } = window.require('electron').remote

export function importDvdLibrary(){
  var answer = dialog.showMessageBox({type: 'warning', buttons: ["OK", "Cancel"], title: "Confirm Delete", message: "Are you sure you want import? This may take some time."})
  if(answer == 0) {
    var file_url = 'http://www.hometheaterinfo.com/download/dvd_csv.zip'
    //var file_url = 'http://127.0.0.1/home_theater_infos'
    var http = require('http')
    var admZip = require('adm-zip')
    var csv = require('fast-csv')
    var url = require('url')
    var request = require('request')
    var fs = window.require("fs")

    console.log('starting import')
    var options = {
      host: url.parse(file_url).host,
      port: 80,
      //port: 3000,
      path: url.parse(file_url).pathname
    }

    http.get(options, function(res) {
      var data = [], dataLen = 0

      res.on('data', function(chunk){
        data.push(chunk)
        dataLen += chunk.length
        console.log('getting data...')
      }).on('end', function(){
        console.log('retrieved file. Processing...')
        var buf = new Buffer(dataLen)

        for(var i = 0, len = data.length, pos=0; i < len; i++) {
          data[i].copy(buf, pos)
          pos += data[i].length
        }

        var zip = new admZip(buf)
        var zipEntries = zip.getEntries()
        var stream

        console.log('Extracted zipped files. Opening...')

        console.log('Purging old db...')
        purge()
        console.log('Done purging.')

        for(var i = 0; i < zipEntries.length; i++){
          if(zipEntries[i].name == 'dvd_csv.txt'){
            console.log('gathering records...')
            var records = []
            csv.fromString(zip.readAsText(zipEntries[i]), { headers: true, quote:'"' })
              .on('data', function(data){
                  records.push(data)
                })
              .on('end', function(){
                  console.log('writing ' + records.length + ' records...')
                  bulk_insert(records)
                })
          }
        }
      })

    })
  }
}
