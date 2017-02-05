import { connect } from 'react-redux'
import { deleteLocation } from '../actions'
import LocationList from '../components/LocationList'

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      dispatch(deleteLocation(id))
    }
  }
}

const VisibleLocations = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationList)

export default VisibleLocations
