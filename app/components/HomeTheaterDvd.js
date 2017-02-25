import React, { PropTypes } from 'react'
import DvdDetails from '../containers/DvdDetails'

const HomeTheaterDvd = ({ dvd, addDvd }) => {
  let year = (isNaN(parseInt(dvd.DVD_ReleaseDate)) ? dvd.DVD_ReleaseDate : parseInt(dvd.DVD_ReleaseDate))

  return (
    <li className='list-group-item disabled'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>
            {`${dvd.DVD_Title} `}
            <br/>
            <small>
              {`Released in ${year}`}
            </small>
          </h4>
        </div>
        <div className='col-md-3'>
          <div>
            <button className='pull-right btn btn-success' onClick={addDvd}>
              <span className='glyphicon glyphicon-plus' aria-hidden='true'></span>
            </button>
          </div>
          <DvdDetails dvd={dvd} />
        </div>
      </div>
    </li>
  )
}

export default HomeTheaterDvd
