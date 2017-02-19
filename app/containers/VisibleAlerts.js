import { connect } from 'react-redux'
import { removeAlert } from '../actions'
import AlertList from '../components/AlertList'


const mapStateToProps = (state) => {
  return {
    alerts: state.alerts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dismissAlert: (id) => {
      dispatch(removeAlert(id))
    }
  }
}


const VisibleAlerts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertList)

export default VisibleAlerts
