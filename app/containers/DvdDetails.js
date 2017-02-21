import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

var ReactDOM = require('react-dom');
var Overlay = require('react-bootstrap').Overlay;
var Popover = require('react-bootstrap').Popover;
var Button = require('react-bootstrap').Button;

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')


class DvdDetailsComponent extends React.Component{
  constructor(props){
    super(props)
		this.state = {show: false, interval: null}
  }


	delayHide() {
    this.setState({interval: setTimeout(this._toggle.bind(this), 300)});
  }

	_toggle() {
    clearTimeout(this.state.interval)
    this.setState({ show: !this.state.show });
  }

	_show() {
    clearTimeout(this.state.interval);
    this.setState({ show: true });
  }

  render(){
    let dvd = this.props.dvd
    let locations = this.props.locations

    const tooltip = <Popover onMouseOver={this._show.bind(this)}
														onMouseLeave={this._toggle.bind(this)}
														id={dvd._id}
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
		const sharedProps = {
      show: this.state.show,
      container: this,
      target: () => ReactDOM.findDOMNode(this.refs.target)
    }

    return(
      <div>
				<Button ref='target' onMouseOver={this._toggle.bind(this)} onMouseOut={this.delayHide.bind(this)}>Hover over me</Button>
				<Overlay {...sharedProps} placement="right">{ tooltip }</Overlay>
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
