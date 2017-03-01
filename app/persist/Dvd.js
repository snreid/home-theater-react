import { dismiss } from '../mixins/DismissLoader'
import { escapeRegExp, splitTerms } from '../mixins/Escaper'
var Datastore = require('nedb')

var db = new Datastore({ filename: 'dvds.db', autoload: true, onload: function(){
  dismiss()
}})

class Dvd {
  constructor(args){
    this._id = args._id
    this.DVD_Title = args.DVD_Title
    this.DVD_ReleaseDate = args.DVD_ReleaseDate
    this.Genre = args.Genre
    this.UPC = args.UPC
    this.location_id = args.location_id || 'none'
    this.notes = args.notes
  }

  static find(){
    return new Promise(function(resolve, reject){
      db.find({}).sort({DVD_Title: 1}).exec(function(err, docs) {
        if(err){
          reject(err)
        }
        else{
          var dvds = docs.map(function(doc){
            return new Dvd(doc)
          })
          resolve(dvds)
        }
      })
    })
  }

  static search(term, filters){
    return new Promise(function(resolve, reject){
      var regex = new RegExp(splitTerms(escapeRegExp(term)), 'ig')
      db.find({ $where: function() {
          var string = `${this.DVD_Title} ${this.Genre} ${this.notes} ${this.DVD_ReleaseDate} ${this.UPC}`
          var results = regex.exec(string)
          if (results == null){
            return false
          }
          else{
            return true
          }
        }
      }).sort({DVD_Title: 1}).exec(function(err, docs){
        if(err){
          reject(err)
        }
        else{
          var dvds = docs.map(function(doc){
            return new Dvd(doc)
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
          var dvd = new Dvd(doc)
          resolve(dvd)
        }
      })
    })
  }

  static update(_id, args){
    return new Promise(function(resolve, reject){
      db.update({_id: _id}, {$set: args}, function(err, numReplaced){
        if(err){
          reject(err)
        }
        else{
          resolve(numReplaced)
        }
      })
    })
  }

	static destroy(_id){
    return new Promise(function(resolve, reject){
      db.remove({_id: _id}, function(err, numDeleted){
        if(err){
          reject(err)
        }
        else{
          resolve(numDeleted)
        }
      })
    })
	}

  insert(){
    var dvd = this
    return new Promise(function(resolve, reject){
      db.insert(dvd, function(err, newDoc){
        if(err){
          reject(err)
        }
        else{
          resolve(new Dvd(newDoc))
        }
      })
    })
  }
}

var all_dvds = function(){
  return Dvd.find()
}

var find_dvd = function(id){
  return Dvd.findOne({_id: id})
}

var add_dvd = function(dvd){
  var new_dvd = new Dvd(dvd)
  return new_dvd.insert()
}

var destroy_dvd = function(_id){
  return Dvd.destroy(_id)
}

var update_dvd = function(_id, args){
  return Dvd.update(_id, args)
}

var search_dvds = function(term, filters){
  return Dvd.search(term, filters)
}

export { all_dvds, add_dvd, find_dvd, destroy_dvd, update_dvd, search_dvds }
