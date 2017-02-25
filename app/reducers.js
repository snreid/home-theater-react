import { combineReducers } from 'redux'
import { REFRESHED_LOCATIONS,
         SET_DISPLAY,
         EDITING_DVD,
         DISPLAYING_DVD,
         REFRESHED_DVDS,
         REFRESHED_HOME_THEATER,
         ADD_DVD_ALERT,
         ADD_LOCATION_ALERT,
         ADD_QUICK_SCAN_ALERT,
         REMOVE_ALERT,
         Alerts,
         Displays } from './actions'

const { LOCATIONS, DVDS } = Displays


const initialState = {
  display: DVDS,
  displayingDvd: [],
  locations: [],
  dvds: [],
  homeTheaterDvds: [],
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

function homeTheaterDvds(state = [], action){
  switch (action.type) {
    case REFRESHED_HOME_THEATER:
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
  let newState
  switch(action.type){
    case ADD_DVD_ALERT:
      newState = state.filter(alert => alert.type != Alerts.DVDS)
      return [
        ...newState,
        action.alert
      ]
    case ADD_LOCATION_ALERT:
      newState = state.filter(alert => alert.type != Alerts.LOCATIONS)
      return [
        ...newState,
        action.alert
      ]
    case ADD_QUICK_SCAN_ALERT:
      newState = state.filter(alert => alert.type != Alerts.QUICK_SCAN)
      return [
        ...newState,
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
  homeTheaterDvds,
  dvds,
  locations,
  editingDvd,
  displayingDvd,
  alerts,
})

export default dvdApp
