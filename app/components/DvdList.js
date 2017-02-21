import React, { PropTypes } from 'react'
import Dvd from './Dvd'

const DvdList = ({ dvds, locations, onDestroy, displayDvd, editDvd }) => (
  <ul className='list-group'>
    { dvds.map(dvd=>
        <Dvd
          key={dvd._id}
          dvd={dvd}
          locations={locations}
          onDestroy={() => onDestroy(dvd._id)}
        />
      )
    }
    { dvds.length == 0 &&
      <li className='list-group-item' colSpan='5'>Loading DVD Library...</li>
    }
  </ul>
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
}

export default DvdList
