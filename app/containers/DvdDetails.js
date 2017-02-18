import React, { PropTypes } from 'react'

const DvdDetails = ({ dvd, locations, shouldDisplay }) =>(
  shouldDisplay &&
    <div>
      <h2>{ dvd.DVD_Title }</h2>
      <ul className='list-group'>
        <li className='list-group-item'>
          <strong>Location:</strong> {locations.map(function(location){
              if(location._id == dvd.location_id){
                return location.display_name
              }
            }
          )}
        </li>
        <li className='list-group-item'>
          <strong>Genre:</strong> {dvd.Genre}
        </li>
        <li className='list-group-item'>
          <strong>Release Date:</strong> {dvd.DVD_ReleaseDate}
        </li>
        <li className='list-group-item'>
          <strong>Notes:</strong> {dvd.notes}
        </li>
      </ul>
    </div>
)

export default DvdDetails
