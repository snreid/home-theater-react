import { purge, insert, bulk_insert } from './persist/HomeTheaterInfo'
global.jQuery = global.$ = require('jquery')

const { dialog } = window.require('electron').remote

export function importDvdLibrary(){
  var answer = dialog.showMessageBox({type: 'warning', buttons: ["OK", "Cancel"], title: "Confirm Delete", message: "Are you sure you want import? This may take some time."})
  //step 1
  $('#hti-progress').addClass('progress').show()
  $('#hti-loading-bar').addClass('progress-bar progress-bar-success progress-bar-striped active')

  $('#hti-loading-bar').css('width', '5%')
  $('#hti-loading-message').html('Downloading Home Theater Info database...')

  if(answer == 0) {
    var file_url = 'http://www.hometheaterinfo.com/download/dvd_csv.zip'
    //var file_url = 'http://127.0.0.1/home_theater_infos'
    var http = require('http')
    var admZip = require('adm-zip')
    var csv = require('fast-csv')
    var url = require('url')
    var request = require('request')
    var fs = window.require("fs")

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
      }).on('end', function(){
        //step 2
        $('#hti-loading-bar').css('width', '20%')

        var buf = new Buffer(dataLen)

        for(var i = 0, len = data.length, pos=0; i < len; i++) {
          data[i].copy(buf, pos)
          pos += data[i].length
        }

        var zip = new admZip(buf)
        var zipEntries = zip.getEntries()
        var stream


        //Step 4
        $('#hti-loading-bar').css('width', '35%')
        $('#hti-loading-message').html('Dumping outdated Home Theater Info database...')
        purge()

        for(var i = 0; i < zipEntries.length; i++){
          if(zipEntries[i].name == 'dvd_csv.txt'){
            //Step 5
            $('#hti-loading-bar').css('width', '50%')
            $('#hti-loading-message').html('Gathering DVDs...')

            var records = []
            csv.fromString(zip.readAsText(zipEntries[i]), { headers: true, quote:'"' })
              .on('data', function(data){
                  records.push(data)
                })
              .on('end', function(){
                  //Step 6
                  $('#hti-loading-bar').css('width', '65%')
                  $('#hti-loading-message').html('Writing DVDs to database...')
                  bulk_insert(records)
                })
          }
        }
      })

    })
  }
}
