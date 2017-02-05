import { combineReducers } from 'redux'
import { REFRESHED_LOCATIONS, SET_DISPLAY, Displays } from './actions'

const { LOCATIONS } = Displays

function locations(state = [], action){
  switch (action.type) {
    case REFRESHED_LOCATIONS:
      return action.locations
    default:
      return state
  }
}

function display(state = LOCATIONS, action) {
  switch (action.type) {
    case SET_DISPLAY:
      return action.display
    default:
      return state
  }
}

const dvdApp = combineReducers({
  display,
  locations
})

export default dvdApp
