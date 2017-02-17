import React, { PropTypes } from 'react'

const DvdDetails = ({ dvd, shouldDisplay }) =>(
  shouldDisplay &&
    <div>
      <h2>{ dvd.DVD_Title }</h2>
      <ul className='list-group'>
        <li className='list-group-item'>
          <strong>Genre:</strong> {dvd.Genre}
        </li>
        <li className='list-group-item'>
          <strong>Release Date:</strong> {dvd.DVD_ReleaseDate}
        </li>
      </ul>
    </div>
)

export default DvdDetails
