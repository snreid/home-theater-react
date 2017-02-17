import React, { PropTypes } from 'react'

const DvdDetails = ({ dvd, shouldDisplay }) =>(
  shouldDisplay &&
    <h2>{ dvd.DVD_Title }</h2>
)

export default DvdDetails
