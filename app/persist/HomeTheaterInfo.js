import { dismiss } from '../mixins/DismissLoader'
import { escapeRegExp, splitTerms } from '../mixins/Escaper'
const { dialog } = window.require('electron').remote

var Datastore = require('nedb')

var db = new Datastore({ filename: 'home_theater_infos.db', autoload: true, onload: function(){
  dismiss()
}})

class HomeTheaterInfo {
  constructor(args) {
		this._id = args._id
    this.DVD_Title = args.DVD_Title
    this.DVD_ReleaseDate = args.DVD_ReleaseDate
    this.Genre = args.Genre
    this.UPC = args.UPC
    //this.Aspect = args.Aspect
    //this.ID = args.ID
    //this.Price = args.Price
    //this.Rating = args.Rating
    //this.Released = args.Released
    //this.Sound = args.Sound
    //this.Status = args.Status
    //this.Studio = args.Studio
    //this.Timestamp = args.Timestamp
    //this.Versions = args.Versions
    //this.Year = args.Year
  }

  static find(){
    return new Promise(function(resolve, reject){
      db.find({}, function(err, docs) {
        if(err){
          reject(err)
        }
        else{
          var infos = docs.map(function(doc){
            return new HomeTheaterInfo(doc)
          })
          resolve(infos)
        }
      })
    })
  }

  static search(term){
    return new Promise(function(resolve, reject){
      var regex = new RegExp(splitTerms(escapeRegExp(term)), 'i')
      db.find({ $where: function() {
          var string = `${this.DVD_Title} ${this.Genre} ${this.DVD_ReleaseDate} ${this.UPC}`
          var results = regex.exec(string)
          if (results == null){
            return false
          }
          else{
            return true
          }
        }
      }).sort({DVD_Title:1}).exec(function(err, docs){
        if(err){
          reject(err)
        }
        else{
          var dvds = docs.map(function(doc){
            return new HomeTheaterInfo(doc)
          })
          resolve(dvds)
        }
      })
    })
  }

  static findOne(args){
    return new Promise(function(resolve, reject){
      db.findOne(args, function(err, doc) {
        if(err){
          reject(err)
        }
        else{
          let dvd
          if(doc){
            dvd = new HomeTheaterInfo(doc)
          }
          resolve(dvd)
        }
      })
    })
  }

  static purge(){
		console.log("purging...")
    db.remove({}, { multi: true })
  }

  insert(){
    db.insert(this)
  }
}

var purge = function(){
  HomeTheaterInfo.purge()
}

var insert = function(args){
	console.log('inserting data...')
  var hti = new HomeTheaterInfo(args)
  hti.insert()
}

var find_all = function(){
	return HomeTheaterInfo.find()
}

var bulk_insert = function(args){
	var infos = args.map(function(doc){
		return new HomeTheaterInfo(doc)
	})
  $('#hti-loading-bar').css('width', '80%')

	db.insert(infos, function(err, newDocs){
    //Step 7
		db.persistence.compactDatafile()
    dialog.showMessageBox({type: 'info', message:"Import complete"})
    $('#hti-loading-bar').css('width', '100%')
    $('#hti-loading-message').html('Finishing...')
    //Hide loading bar

    $('#hti-progress').hide()
    $('#hti-loading-message').html('')
	})
}

var find_by_upc = function(upc){
  return HomeTheaterInfo.findOne({UPC: upc})
}

var search_home_theater = function(term){
  return HomeTheaterInfo.search(term)
}

export {  purge,
          insert,
          bulk_insert,
          find_all,
          find_by_upc,
          search_home_theater }
