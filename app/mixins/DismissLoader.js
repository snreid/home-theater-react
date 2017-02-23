global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')

const DATASTORES = 3
let datastoreDismissals = 0

export function dismiss(){
  datastoreDismissals++
  if(datastoreDismissals == DATASTORES){
    $('#loader').hide()
    $('#wrapper').removeClass('hidden')
  }
}
