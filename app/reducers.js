import { combineReducers } from 'redux'
import { REFRESHED_LOCATIONS,
         SET_DISPLAY,
         SET_SIDEBAR,
         EDITING_DVD,
         DISPLAYING_DVD,
         REFRESHED_DVDS,
         ADD_ALERT,
         REMOVE_ALERT,
         Sidebars,
         Displays } from './actions'
const { LOCATIONS, DVDS } = Displays
const { ADD_DVD, SHOW_DVD, EDIT_DVD } = Sidebars

const initialState = {
  display: DVDS,
  sidebar: ADD_DVD,
  displayingDvd: [],
  locations: [],
  dvds: [],
  alerts: [],
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

function sidebar(state = ADD_DVD, action) {
  switch(action.type) {
    case SET_SIDEBAR:
      return action.sidebar
    default:
      return state
  }
}

function displayingDvd(state = [], action) {
  switch(action.type){
    case DISPLAYING_DVD:
      return action.dvd
    default:
      return state
  }
}

function editingDvd(state = [], action) {
  switch(action.type){
    case EDITING_DVD:
      return action.dvd
    default:
      return state
  }
}

function alerts(state = [], action) {
  switch(action.type){
    case ADD_ALERT:
      return [
        ...state,
        action.alert
      ]
    case REMOVE_ALERT:
      return state.filter(alert => alert.id != action.alert_id)
    default:
      return state
  }
}

const dvdApp = combineReducers({
  display,
  sidebar,
  dvds,
  locations,
  editingDvd,
  displayingDvd,
  alerts,
})

export default dvdApp
