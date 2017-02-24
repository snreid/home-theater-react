import React, { PropTypes } from 'react'
import EditDvd from '../containers/EditDvd'
import DvdDetails from '../containers/DvdDetails'

const Dvd = ({ dvd, locations, onDestroy }) => {
  let year = (isNaN(parseInt(dvd.DVD_ReleaseDate)) ? dvd.DVD_ReleaseDate : parseInt(dvd.DVD_ReleaseDate))

  return(
    <li className='list-group-item'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>
            {`${dvd.DVD_Title} `}
            <br/>
            <small>
              {`Released in ${year}; `}
              {locations.map(function(location){
                    if(location._id == dvd.location_id){
                      return `Located on ${location.display_name}`
                    }
                  }
              )}
            </small>
          </h4>
        </div>
        <div className='col-md-3'>
          <div>
            <button className='pull-right btn btn-danger' onClick={onDestroy}>
              <span className='glyphicon glyphicon-trash' aria-hidden='true'></span>
            </button>
          </div>
          <div>
            <button className='pull-right btn btn-primary'
                    data-toggle='modal'
                    data-target={`#editDvd${dvd._id}Modal`}>
              <span className='glyphicon glyphicon-pencil' aria-hidden='true'></span>
            </button>
          </div>
          <DvdDetails dvd={dvd} />
        </div>
      </div>

      <EditDvd dvd={dvd} locations={locations}/>
    </li>
  )
}

Dvd.propTypes = {
  dvd: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    DVD_Title: PropTypes.string.isRequired,
    DVD_ReleaseDate: PropTypes.string,
    Genre: PropTypes.string,
    location_id: PropTypes.string,
  }).isRequired,
  onDestroy: PropTypes.func.isRequired,
}

export default Dvd
