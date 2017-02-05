import { all_locations, add_location, destroy_location } from './persist/Location'

/*
 * action types
 */

export const SET_DISPLAY = 'SET_DISPLAY'
export const REFRESHED_LOCATIONS = 'REFRESHED_LOCATIONS'


/*
 * other constants
 */

export const Displays = { LOCATIONS: 'LOCATIONS', DVDS: 'DVDS' }

/*
 * action creators
 */

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
