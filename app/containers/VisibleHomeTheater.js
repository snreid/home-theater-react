import { connect } from 'react-redux'
import { addDvd, searchHomeTheater } from '../actions'
import HomeTheater from '../components/HomeTheater'


const mapStateToProps = (state) => {
  return {
    dvds: state.dvds,
    homeTheaterDvds: state.homeTheaterDvds,
    locations: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDvd: (dvd) => {
      dispatch(addDvd(dvd))
    },
    searchHomeTheater: (term) => {
      dispatch(searchHomeTheater(term))
    },
  }
}

const VisibleHomeTheater = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeTheater)

export default VisibleHomeTheater
