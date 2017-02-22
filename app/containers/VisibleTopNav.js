import { connect } from 'react-redux'
import TopNav from '../components/TopNav'

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

const VisibleTopNav = connect(mapStateToProps)(TopNav)

export default VisibleTopNav
