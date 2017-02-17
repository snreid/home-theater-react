import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    displayingDvd: state.displayingDvd,
    locations: state.locations,
  }
}

const VisibleSidebar = connect(
  mapStateToProps,
)(Sidebar)

export default VisibleSidebar
