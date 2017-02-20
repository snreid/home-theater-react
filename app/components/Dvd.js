import React, { PropTypes } from 'react'

const Dvd = ({ DVD_Title, DVD_ReleaseDate, Genre, location_id, locations, onDestroy, displayDvd, editDvd }) => (
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
        <button className='pull-right btn btn-primary' onClick={editDvd}>
          <span className='glyphicon glyphicon-pencil' aria-hidden='true'></span>
        </button>
      </div>
    </div>
  </li>
)

Dvd.propTypes = {
  DVD_Title: PropTypes.string.isRequired,
  DVD_ReleaseDate: PropTypes.string,
  Genre: PropTypes.string,
  location_id: PropTypes.string,
  onDestroy: PropTypes.func.isRequired,
  displayDvd: PropTypes.func.isRequired,
  editDvd: PropTypes.func.isRequired,
}

export default Dvd
