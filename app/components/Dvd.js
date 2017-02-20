import React, { PropTypes } from 'react'

const Dvd = ({ DVD_Title, DVD_ReleaseDate, Genre, location_id, locations, onDestroy, displayDvd, editDvd }) => (
  <tr>
    <td onClick={displayDvd}>{DVD_Title}</td>
    <td onClick={displayDvd}>{DVD_ReleaseDate}</td>
    <td onClick={displayDvd}>{Genre}</td>
    <td onClick={displayDvd}>{locations.map(function(location){
            if(location._id == location_id){
              return location.display_name
            }
          }
        )}
    </td>
    <td>
      <button className='btn btn-danger' onClick={onDestroy}>
        <span className='glyphicon glyphicon-trash' aria-hidden='true'></span>
      </button>
      &nbsp;
      <button className='btn btn-primary' onClick={editDvd}>
        <span className='glyphicon glyphicon-pencil' aria-hidden='true'></span>
      </button>
    </td>
  </tr>

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
