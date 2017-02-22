/*
 * action types
 */

export const SET_DISPLAY = 'SET_DISPLAY'
export const DISPLAYING_DVD = 'DISPLAYING_DVD'
export const EDITING_DVD = 'EDITING_DVD'
export const QUICK_SCANNING = 'QUICK_SCANNING'
export const REFRESHED_LOCATIONS = 'REFRESHED_LOCATIONS'
export const REFRESHED_DVDS = 'REFRESHED_DVDS'
export const ADD_ALERT = 'ADD_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

/*
 * other constants
 */

export const Displays = { LOCATIONS: 'LOCATIONS', DVDS: 'DVDS' }

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
      dispatch(addSuccessAlert(`Location ${location.display_name} added successfully`))
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

export function searchDvds(term){
  return function(dispatch){
    return search_dvds(term).then(function(dvds){
      dispatch(refreshedDvds(dvds))
    })
  }
}

export function addDvd(dvd){
  return function(dispatch){
    return add_dvd(dvd).then(function(dvd){
      dispatch(refreshDvds())
      dispatch(addSuccessAlert(`Added "${dvd.DVD_Title}" to library`))
    })
  }
}

export function deleteDvd(dvd_id){
  return function(dispatch){
    return destroy_dvd(dvd_id).then(function(dvd){
      dispatch(refreshDvds())
      dispatch(addSuccessAlert('Removed from library'))
    })
  }
}

export function updateDvd(dvd_id, params){
  return function(dispatch){
    return update_dvd(dvd_id, params).then(function(dvd){
      dispatch(refreshDvds())
      dispatch(displayDvd(dvd_id))
      dispatch(addSuccessAlert(`"${params.DVD_Title}" successfully updated`))
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
        dispatch(addFailureAlert(`DVD not found for UPC: ${params.UPC}`))
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

export function addFailureAlert(message){
  return{
    type: ADD_ALERT,
    alert: createAlert(message, 'danger')
  }
}

export function addSuccessAlert(message){
  return{
    type: ADD_ALERT,
    alert: createAlert(message, 'success')
  }
}

export function removeAlert(alert_id){
  return{
    type: REMOVE_ALERT,
    alert_id: alert_id
  }
}

let nextAlertId = 0
function createAlert(message, level){
  return { message: message, level: level, id: (nextAlertId++).toString() }
}
