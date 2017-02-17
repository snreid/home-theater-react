import { connect } from 'react-redux'
import Display from '../components/Display'
import { Sidebars, changeSidebar } from '../actions'
import { openSidebar } from '../mixins/ToggleSidebar'


const mapStateToProps = (state) => {
  return {
    display: state.display,
    sidebar: state.sidebar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDvd: () => {
      openSidebar()
      dispatch(changeSidebar(Sidebars.ADD_DVD))
    }
  }
}

const VisibleDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display)

export default VisibleDisplay
