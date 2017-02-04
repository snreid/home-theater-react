var Datastore = require('nedb')

var db = new Datastore({ filename: 'home_theater_infos.db', autoload: true })

class HomeTheaterInfo {
  constructor(args) {
    this.Aspect = args.Aspect
    this.DVD_ReleaseDate = args.DVD_ReleaseDate
    this.DVD_Title = args.DVD_Title
    this.Genre = args.Genre
    this.ID = args.ID
    this.Price = args.Price
    this.Rating = args.Rating
    this.Released = args.Released
    this.Sound = args.Sound
    this.Status = args.Status
    this.Studio = args.Studio
    this.Timestamp = args.Timestamp
    this.UPC = args.UPC
    this.Versions = args.Versions
    this.Year = args.Year
  }

  static purge(){
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
  var hti = new HomeTheaterInfo(args)
  hti.insert()
}

export { purge, insert }
