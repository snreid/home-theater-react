var Datastore = require('nedb')

var db = new Datastore({ filename: 'home_theater_infos.db'})

//db.loadDatabase()

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
	console.log('begin inserting...')
	db.insert(infos, function(err, newDocs){
		console.log('completed inserting')
		console.log(err)
		console.log(newDocs)
		console.log('Compacting datafile...')
		db.persistence.compactDatafile()
	})
}

export { purge, insert, bulk_insert, find_all }
