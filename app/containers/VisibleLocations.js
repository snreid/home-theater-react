import { connect } from 'react-redux'
import { deleteLocation } from '../actions'
import LocationList from '../components/LocationList'

const { dialog } = window.require('electron').remote

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      var answer = dialog.showMessageBox({type: 'warning', buttons: ["OK", "Cancel"], title: "Confirm Delete", message: "Are you sure you want to delete this location?"})
      if(answer == 0) {
        dispatch(deleteLocation(id))
      }
    }
  }
}

const VisibleLocations = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationList)

export default VisibleLocations
