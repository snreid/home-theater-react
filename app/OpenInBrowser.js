const {shell} = window.require('electron')
global.jQuery = global.$ = require('jquery')

export function openHomeTheater(){
  shell.openExternal('http://www.hometheaterinfo.com/')
}
