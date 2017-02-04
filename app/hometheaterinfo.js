export function importDvdLibrary(){
	//var file_url = 'http://www.hometheaterinfo.com/download/dvd_csv.zip'
  var file_url = 'http://127.0.0.1/home_theater_infos'
	var http = require('http')
	var admZip = require('adm-zip')
	var csv = require('fast-csv')
	var url = require('url')
	var request = require('request')
	var fs = window.require("fs")

	var options = {
		host: url.parse(file_url).host,
		//port: 80,
		port: 3000,
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
			for(var i = 0; i < zipEntries.length; i++){
				if(zipEntries[i].name == 'dvd_csv.txt'){
					console.log('opened dvd_csv.txt')
					console.log('Data type:')
					//debugger
					//csv.fromString(zip.readAsText(zipEntries[i]), { headers: true })
					//	 .on('data', function(data){
					//			console.log(data)
					//		})
					//	 .on('end', function(){
					//			console.log(done)
					//		})
					data = zip.readAsText(zipEntries[i])
					console.log(data.constructor)
				}
				else{
					console.log('opened copyright.txt')
					console.log('Data type:')
					data = zip.readAsText(zipEntries[i])
					console.log(data.constructor)
				}
			}
		})

	})
}
