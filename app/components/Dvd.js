import React, { PropTypes } from 'react'
import EditDvd from '../containers/EditDvd'

const Dvd = ({ _id, DVD_Title, DVD_ReleaseDate, Genre, location_id, locations, onDestroy, displayDvd, editDvd }) => {
  let dvd = {_id: _id, DVD_Title: DVD_Title, DVD_ReleaseDate: DVD_ReleaseDate, Genre: Genre, location_id: location_id }

  return(
    <li className='list-group-item'>
      <div className='row'>
        <div className='col-md-9' onClick={displayDvd}>
          <h4>
            {`${DVD_Title} `}
            <small>
              {`${DVD_ReleaseDate}, `}
              {locations.map(function(location){
                    if(location._id == location_id){
                      return location.display_name
                    }
                  }
              )}
            </small>
          </h4>
        </div>
        <div className='col-md-3'>
          <button className='pull-right btn btn-danger' onClick={onDestroy}>
            <span className='glyphicon glyphicon-trash' aria-hidden='true'></span>
          </button>
          &nbsp;
          <button className='pull-right btn btn-primary'
                  data-toggle='modal'
                  data-target={`#editDvd${_id}Modal`}>
            <span className='glyphicon glyphicon-pencil' aria-hidden='true'></span>
          </button>
        </div>
      </div>

      <EditDvd dvd={dvd} locations={locations}/>
    </li>
  )
}

Dvd.propTypes = {
  _id: PropTypes.string.isRequired,
  DVD_Title: PropTypes.string.isRequired,
  DVD_ReleaseDate: PropTypes.string,
  Genre: PropTypes.string,
  location_id: PropTypes.string,
  onDestroy: PropTypes.func.isRequired,
  displayDvd: PropTypes.func.isRequired,
  editDvd: PropTypes.func.isRequired,
}

export default Dvd
