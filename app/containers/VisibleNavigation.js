import { connect } from 'react-redux'
import { changeDisplay, Displays } from '../actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return {
    display: state.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeToLocations: () => {
      dispatch(changeDisplay(Displays.LOCATIONS))
    },
    changeToDvds: () => {
      dispatch(changeDisplay(Displays.DVDS))
    }
  }
}

const VisibleNavigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation)

export default VisibleNavigation
