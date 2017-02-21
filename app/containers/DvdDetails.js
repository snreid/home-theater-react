import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;
var Button = require('react-bootstrap').Button;

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')


class DvdDetailsComponent extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    let dvd = this.props.dvd
    let locations = this.props.locations

    const tooltip = <Popover id={dvd._id}
														title={dvd.DVD_Title}>
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
												<li className='list-group-item'>
													<strong>UPC:</strong> {dvd.UPC}
												</li>
											</ul>
									</Popover>

    return(
      <div>
				<OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={tooltip}>
					<Button ref='target' className='btn btn-default pull-right' >
						<span className='glyphicon glyphicon-film' aria-hidden='true'></span>
					</Button>
				</OverlayTrigger>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

let DvdDetails = connect(mapStateToProps)(DvdDetailsComponent)

export default DvdDetails
