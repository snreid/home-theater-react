import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

const VisibleSidebar = connect(
  mapStateToProps,
)(Sidebar)

export default VisibleSidebar
