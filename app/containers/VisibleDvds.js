import { connect } from 'react-redux'
import { deleteDvd } from '../actions'
import DvdList from '../components/DvdList'

const mapStateToProps = (state) => {
  return {
    dvds: state.dvds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      dispatch(deleteDvd(id))
    }
  }
}

const VisibleDvds = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DvdList)

export default VisibleDvds
