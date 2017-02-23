import React, { PropTypes } from 'react'
import Location from './Location'

const LocationList = ({ locations, onDestroy }) => (
  <table className='table table-striped'>
    <thead>
      <tr>
        <th>Shelf</th>
        <th>Row</th>
        <th>Stack</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      { locations.map(location =>
          <Location
            key={location._id}
            {...location}
            onDestroy={() => onDestroy(location._id)}
          />
        )
      }
      { locations.length == 0 &&
        <tr><td colSpan='4'><strong>No Locations Found</strong></td></tr>
      }
    </tbody>
  </table>
)

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    row: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDestroy: PropTypes.func.isRequired,
}

export default LocationList
