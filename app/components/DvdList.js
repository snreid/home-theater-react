import React, { PropTypes } from 'react'
import Dvd from './Dvd'

const DvdList = ({ dvds, onDestroy }) => (
  <div>
    <h2>DVD Library</h2>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>Genre</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        { dvds.map(dvd=>
            <Dvd
              key={dvd._id}
              {...dvd}
              onDestroy={() => onDestroy(dvd._id)}
            />
          )
        }
        { dvds.length == 0 &&
          <tr><td colSpan='4'>Loading DVD Library...</td></tr>
        }
      </tbody>
    </table>
  </div>
)

DvdList.propTypes = {
  dvds: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    DVD_Title: PropTypes.string.isRequired,
    DVD_ReleaseDate: PropTypes.string.isOptional,
    Genre: PropTypes.string.isOptional,
  }).isRequired).isRequired,
  onDestroy: PropTypes.func.isRequired,
}

export default DvdList
