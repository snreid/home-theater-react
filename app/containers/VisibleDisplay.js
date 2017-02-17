import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = (state) => {
  return {
    display: state.display,
    sidebar: state.sidebar
  }
}

const VisibleDisplay = connect(
  mapStateToProps,
)(Display)

export default VisibleDisplay
