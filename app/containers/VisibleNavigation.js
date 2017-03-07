import { connect } from 'react-redux'
import { changeDisplay, Displays, refreshLocations } from '../actions'
import Navigation from '../components/Navigation'
import { addSreidsLocations } from '../sreidsLocations'

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
    },
    changeToHomeTheater: () => {
      dispatch(changeDisplay(Displays.HOME_THEATER))
    },
    addMyLocations: () => {
      addSreidsLocations().then(function(){
        dispatch(refreshLocations())
        dispatch(changeDisplay(Displays.LOCATIONS))
      })
    },
  }
}

const VisibleNavigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation)

export default VisibleNavigation
