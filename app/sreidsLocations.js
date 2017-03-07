import { all_locations, add_location, purge } from './persist/Location'

const { dialog } = window.require('electron').remote
const SHELVES = 4
const ROWS = 6
const STACKS = 3

export function addSreidsLocations(){
  return new Promise(function(resolve, reject){

    all_locations().then(function(locations){
      let answer = 0
      if (locations.length > 0){
        answer = dialog.showMessageBox({
          type: 'warning',
          buttons: ["OK", "Cancel"],
          message:"Are you sure you want to recreate these locations? This action will remove all current locations from your library."
        })
      }

      if(answer == 0){
        purge()
        range(1, ROWS).map(function(row){
          range(1, SHELVES).map(function(shelf){
            range(1, STACKS).map(function(stack){
              add_location({row: `${row}`, shelf: `${shelf}`, stack: `${stack}`})
            })
          })
        })
        resolve()
      }
    })

  })
}

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
