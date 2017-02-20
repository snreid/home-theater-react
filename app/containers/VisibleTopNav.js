import { connect } from 'react-redux'
import { addDvd, addLocation, changeSidebar, Sidebars } from '../actions'
import { openSidebar } from '../mixins/ToggleSidebar'
import TopNav from '../components/TopNav'

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDvd: () => {
      dispatch(changeSidebar(Sidebars.ADD_DVD))
      openSidebar()
    },
    openQuickScan: () => {
      dispatch(changeSidebar(Sidebars.QUICK_SCAN))
      openSidebar()
    }
  }
}

const VisibleTopNav = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNav)

export default VisibleTopNav
