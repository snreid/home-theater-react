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
      dispatch(displayDvd(id))
      openSidebar()
    },
    editDvd: (id) => {
      dispatch(editDvd(id))
      openSidebar()
    },
  }
}

const VisibleDvds = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DvdList)

export default VisibleDvds
