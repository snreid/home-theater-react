import React, { PropTypes } from 'react'
import Dvd from './Dvd'

const DvdList = ({ dvds, locations, onDestroy, displayDvd, editDvd }) => (
  <table className='table list-group'>
    <thead>
      <tr>
        <th>Title</th>
        <th>Release Date</th>
        <th>Genre</th>
        <th>Location</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        { dvds.map(dvd=>
            <Dvd
              key={dvd._id}
              {...dvd}
              locations={locations}
              onDestroy={() => onDestroy(dvd._id)}
              displayDvd={() => displayDvd(dvd._id)}
              editDvd={() => editDvd(dvd._id)}
            />
          )
        }
        { dvds.length == 0 &&
          <tr><td colSpan='5'>Loading DVD Library...</td></tr>
        }
    </tbody>
  </table>
)

DvdList.propTypes = {
  dvds: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    DVD_Title: PropTypes.string.isRequired,
    DVD_ReleaseDate: PropTypes.string,
    Genre: PropTypes.string,
    location_id: PropTypes.string,
  }).isRequired).isRequired,
  onDestroy: PropTypes.func.isRequired,
  displayDvd: PropTypes.func.isRequired,
  editDvd: PropTypes.func.isRequired,
}

export default DvdList
