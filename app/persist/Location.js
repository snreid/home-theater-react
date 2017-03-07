import { dismiss } from '../mixins/DismissLoader'
var Datastore = require('nedb')

var db = new Datastore({ filename: 'locations.db', autoload: true, onload: function(){
  dismiss()
}})

class Location {
  constructor(args){
    this._id = args._id
    this.shelf = args.shelf
    this.row = args.row
    this.stack = args.stack
    this.display_name = `Shelf ${this.shelf}, Row ${this.row}, Stack ${this.stack}`
  }

  static find(){
    return new Promise(function(resolve, reject){
      db.find({}).sort({shelf: 1, row: 1, stack: 1}).exec(function(err, docs) {
        if(err){
          reject(err)
        }
        else{
          var locations = docs.map(function(doc){
            return new Location(doc)
          })
          resolve(locations)
        }
      })
    })
  }

  static purge(){
		console.log("purging...")
    db.remove({}, { multi: true })
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
    var location = this
    return new Promise(function(resolve, reject){
      db.insert(location, function(err, newDoc){
        if(err){
          reject(err)
        }
        else{
          resolve(new Location(newDoc))
        }
      })
    })
  }
}

var purge = function(){
  Location.purge()
}

var all_locations = function(){
  return Location.find()
}

var add_location = function(location){
  var loc = new Location(location)
  return loc.insert()
}

var destroy_location = function(_id){
  return Location.destroy(_id)
}

export { all_locations, add_location, destroy_location, purge }
