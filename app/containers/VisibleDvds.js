import { connect } from 'react-redux'
import { deleteDvd, displayDvd, editDvd } from '../actions'
import DvdList from '../components/DvdList'

const { dialog } = window.require('electron').remote

const mapStateToProps = (state) => {
  return {
    dvds: state.dvds,
    locations: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      var answer = dialog.showMessageBox({type: 'warning', buttons: ["OK", "Cancel"], title: "Confirm Delete", message: "Are you sure you want to delete this DVD?"})
      if(answer == 0) {
        dispatch(deleteDvd(id))
      }
    },
  }
}

const VisibleDvds = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DvdList)

export default VisibleDvds
