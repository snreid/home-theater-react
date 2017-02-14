var Datastore = require('nedb')

var db = new Datastore({ filename: 'dvds.db', autoload: true})

class Dvd {
  constructor(args){
    this._id = args._id
    this.DVD_Title = args.DVD_Title
    this.DVD_ReleaseDate = args.DVD_ReleaseDate
    this.Genre = args.Genre
    this.UPC = args.UPC
    this.location_id = args.location_id || 'none'
  }

  static find(){
    return new Promise(function(resolve, reject){
      db.find({}, function(err, docs) {
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

var add_dvd = function(dvd){
  var new_dvd = new Dvd(dvd)
  return new_dvd.insert()
}

var destroy_dvd = function(_id){
  return Dvd.destroy(_id)
}

export { all_dvds, add_dvd, destroy_dvd }
