import { connect } from 'react-redux'
import { changeDisplay, Displays } from '../actions'
import Display from '../components/Display'

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

const VisibleDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display)

export default VisibleDisplay
