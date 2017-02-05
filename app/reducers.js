import { combineReducers } from 'redux'
import { REFRESHED_LOCATIONS,
         SET_DISPLAY,
         REFRESHED_DVDS,
         Displays } from './actions'
const { LOCATIONS, DVDS } = Displays

const initialState = {
  display: DVDS,
  locations: [],
  dvds: []
}

function locations(state = [], action){
  switch (action.type) {
    case REFRESHED_LOCATIONS:
      return action.locations
    default:
      return state
  }
}

function dvds(state = [], action){
  switch (action.type) {
    case REFRESHED_DVDS:
      return action.dvds
    default:
      return state
  }
}

function display(state = DVDS, action) {
  switch (action.type) {
    case SET_DISPLAY:
      return action.display
    default:
      return state
  }
}

const dvdApp = combineReducers({
  display,
  dvds,
  locations
})

export default dvdApp
