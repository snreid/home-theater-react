global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')

const DATASTORES = 3
const messages = ["Loading your library...", "Almost there...", "Awesomeness is coming..."]
let datastoreDismissals = 0

export function dismiss(){
  datastoreDismissals++
  if(datastoreDismissals == DATASTORES){
    $('#loader').hide()
    $('#loader-message').hide()
    $('#wrapper').removeClass('hidden')
  }
  else{
    $('#loader-message').html(messages[datastoreDismissals])
  }
}
