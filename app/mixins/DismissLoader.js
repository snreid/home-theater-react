global.jQuery = global.$ = require('jquery')

const bootstrap = require('bootstrap')
const currentWindow = window.require('electron').remote.getCurrentWindow()
const DATASTORES = 3

let datastoreDismissals = 0

export function dismiss(){
  datastoreDismissals++
  if(datastoreDismissals == DATASTORES){
    currentWindow.show()
  }
}
