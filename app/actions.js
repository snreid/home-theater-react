/*
 * action types
 */

export const SET_DISPLAY = 'SET_DISPLAY'
export const DISPLAYING_DVD = 'DISPLAYING_DVD'
export const EDITING_DVD = 'EDITING_DVD'
export const QUICK_SCANNING = 'QUICK_SCANNING'
export const REFRESHED_LOCATIONS = 'REFRESHED_LOCATIONS'
export const REFRESHED_DVDS = 'REFRESHED_DVDS'
export const ADD_DVD_ALERT= 'ADD_DVD_ALERT'
export const ADD_LOCATION_ALERT = 'ADD_LOCATION_ALERT'
export const ADD_QUICK_SCAN_ALERT = 'ADD_QUICK_SCAN_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

/*
 * other constants
 */

export const Displays = { LOCATIONS: 'LOCATIONS', DVDS: 'DVDS' }
export const Alerts = { LOCATIONS: 'LOCATIONS', DVDS: 'DVDS', QUICK_SCAN:'QUICK_SCAN' }

/*
 * LOCATION action creators
 */

import { all_locations, add_location, destroy_location } from './persist/Location'

export function refreshedLocations(locations){
  return {
    type: REFRESHED_LOCATIONS,
    locations: locations
  }
}

export function refreshLocations(){
  return function(dispatch){
    return all_locations().then(function(locations){
      dispatch(refreshedLocations(locations))
    })
  }
}

export function addLocation(location){
  return function(dispatch){
    return add_location(location).then(function(location){
      dispatch(addLocationSuccessAlert(`Location ${location.display_name} added successfully`))
      dispatch(refreshLocations())
    })
  }
}

export function deleteLocation(location_id){
  return function(dispatch){
    return destroy_location(location_id).then(function(location){
      dispatch(refreshLocations())
    })
  }
}

/*
 * DVD action creators
 */
import { all_dvds, add_dvd, find_dvd, destroy_dvd, update_dvd, search_dvds } from './persist/Dvd'

export function refreshedDvds(dvds){
  return {
    type: REFRESHED_DVDS,
    dvds: dvds
  }
}

export function displayingDvd(dvd){
  return {
    type: DISPLAYING_DVD,
    dvd: dvd
  }
}

export function refreshDvds(){
  return function(dispatch){
    return all_dvds().then(function(dvds){
      dispatch(refreshedDvds(dvds))
    })
  }
}

export function searchDvds(term, filters = {}){
  return function(dispatch){
    return search_dvds(term, filters).then(function(dvds){
      dispatch(refreshedDvds(dvds))
    })
  }
}

export function addDvd(dvd){
  return function(dispatch){
    return add_dvd(dvd).then(function(dvd){
      dispatch(refreshDvds())
      dispatch(addDVDSuccessAlert(`Added "${dvd.DVD_Title}" to library`))
    })
  }
}

export function deleteDvd(dvd_id){
  return function(dispatch){
    return destroy_dvd(dvd_id).then(function(dvd){
      dispatch(refreshDvds())
      dispatch(addDVDSuccessAlert('Removed from library'))
    })
  }
}

export function updateDvd(dvd_id, params){
  return function(dispatch){
    return update_dvd(dvd_id, params).then(function(dvd){
      dispatch(refreshDvds())
      dispatch(displayDvd(dvd_id))
      dispatch(addDVDSuccessAlert(`"${params.DVD_Title}" successfully updated`))
    })
  }
}

export function displayDvd(dvd_id){
  return function(dispatch){
    return find_dvd(dvd_id).then(function(dvd){
      dispatch(displayingDvd(dvd))
    })
  }
}

export function editDvd(dvd_id){
  return function(dispatch){
    return find_dvd(dvd_id).then(function(dvd){
      dispatch(displayingDvd(dvd))
    })
  }
}


/*
 * HomeTheaterInfo action creators
 */

import { find_by_upc } from './persist/HomeTheaterInfo'

export function addDvdFromHomeTheaterInfo(params){
  return function(dispatch){
    return find_by_upc(params.UPC).then(function(dvd){
      if(dvd){
        var new_dvd = Object.assign({location_id: params.location_id}, dvd)
        delete new_dvd['_id']
        dispatch(addDvd(new_dvd))
      }
      else{
        dispatch(addQuickScanFailureAlert(`DVD not found for UPC: ${params.UPC}`))
      }
    })
  }
}

/*
 * DISPLAY action creators
 */

export function changeDisplay(display){
  return {
    type: SET_DISPLAY,
    display: display
  }
}


/*
 * ALERTS action creators
 */

export function addDVDSuccessAlert(message){
  return{
    type: ADD_DVD_ALERT,
    alert: createAlert(message, 'success', Alerts.DVDS)
  }
}

export function addLocationSuccessAlert(message){
  return{
    type: ADD_LOCATION_ALERT,
    alert: createAlert(message, 'success', Alerts.LOCATIONS)
  }
}

export function addQuickScanSuccessAlert(message){
  return{
    type: ADD_QUICK_SCAN_ALERT,
    alert: createAlert(message, 'success', Alerts.QUICK_SCAN)
  }
}

export function addDVDFailureAlert(message){
  return{
    type: ADD_DVD_ALERT,
    alert: createAlert(message, 'danger', Alerts.DVDS)
  }
}

export function addLocationFailureAlert(message){
  return{
    type: ADD_LOCATION_ALERT,
    alert: createAlert(message, 'danger', Alerts.LOCATIONS)
  }
}

export function addQuickScanFailureAlert(message){
  return{
    type: ADD_QUICK_SCAN_ALERT,
    alert: createAlert(message, 'danger', Alerts.QUICK_SCAN)
  }
}

export function removeAlert(alert_id){
  return{
    type: REMOVE_ALERT,
    alert_id: alert_id
  }
}

let nextAlertId = 0

function createAlert(message, level, type){
  return { message: message, type: type, level: level, id: (nextAlertId++).toString() }
}
