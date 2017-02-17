import { connect } from 'react-redux'
import { deleteDvd, displayDvd, editDvd } from '../actions'
import { openSidebar } from '../mixins/ToggleSidebar'
import DvdList from '../components/DvdList'

const mapStateToProps = (state) => {
  return {
    dvds: state.dvds,
    locations: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      dispatch(deleteDvd(id))
    },
    displayDvd: (id) => {
      openSidebar()
      dispatch(displayDvd(id))
    },
    editDvd: (id) => {
      openSidebar()
      dispatch(editDvd(id))
    },
  }
}

const VisibleDvds = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DvdList)

export default VisibleDvds
