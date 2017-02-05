import React, { PropTypes } from 'react'

const Dvd = ({ DVD_Title, DVD_ReleaseDate, Genre, onDestroy }) => (
  <tr>
    <td>{DVD_Title}</td>
    <td>{DVD_ReleaseDate}</td>
    <td>{Genre}</td>
    <td>
      <button className='btn btn-danger' onClick={onDestroy}>
        x
      </button>
    </td>
  </tr>

)

Dvd.propTypes = {
  DVD_Title: PropTypes.string.isRequired,
  DVD_ReleaseDate: PropTypes.string,
  Genre: PropTypes.string,
  onDestroy: PropTypes.func.isRequired
}

export default Dvd
