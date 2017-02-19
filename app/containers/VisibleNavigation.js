import { connect } from 'react-redux'
import { changeDisplay, Displays } from '../actions'
import Navigation from '../components/Navigation'
import { closeSidebar } from '../mixins/ToggleSidebar'

const mapStateToProps = (state) => {
  return {
    display: state.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeToLocations: () => {
      closeSidebar()
      dispatch(changeDisplay(Displays.LOCATIONS))
    },
    changeToDvds: () => {
      closeSidebar()
      dispatch(changeDisplay(Displays.DVDS))
    }
  }
}

const VisibleNavigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation)

export default VisibleNavigation
