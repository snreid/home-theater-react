/*
 * action types
 */

export const SET_DISPLAY = 'SET_DISPLAY'
export const SET_SIDEBAR = 'SET_SIDEBAR'
export const DISPLAYING_DVD = 'DISPLAYING_DVD'
export const REFRESHED_LOCATIONS = 'REFRESHED_LOCATIONS'
export const REFRESHED_DVDS = 'REFRESHED_DVDS'

/*
 * other constants
 */

export const Displays = { LOCATIONS: 'LOCATIONS', DVDS: 'DVDS' }
export const Sidebars = {ADD_DVD: 'ADD_DVD', SHOW_DVD: 'SHOW_DVD'}

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
import { all_dvds, add_dvd, find_dvd, destroy_dvd } from './persist/Dvd'

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

export function addDvd(dvd){
  return function(dispatch){
    return add_dvd(dvd).then(function(dvd){
      dispatch(refreshDvds())
    })
  }
}

export function deleteDvd(dvd_id){
  return function(dispatch){
    return destroy_dvd(dvd_id).then(function(dvd){
      dispatch(refreshDvds())
    })
  }
}

export function displayDvd(dvd_id){
  return function(dispatch){
    return find_dvd(dvd_id).then(function(dvd){
      dispatch(displayingDvd(dvd))
      dispatch(changeSidebar(Sidebars.SHOW_DVD))
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
 * SIDEBAR action creators
 */

export function changeSidebar(sidebar){
  return {
    type: SET_SIDEBAR,
    sidebar: sidebar
  }
}
