const $ = require('jquery')
var toggleSidebar = function(){
  $("#sidebar-right").toggleClass("collapsed");
  $("#content").toggleClass("col-md-12 col-md-9");
}

var openSidebar = function(){
  let sidebar = $('#sidebar-right')
  let content = $('#content')
  if(sidebar.hasClass('collapsed')){
    sidebar.removeClass("collapsed");
    content.removeClass("col-md-12").addClass('col-md-9');
  }
}

var closeSidebar = function(){
  let sidebar = $('#sidebar-right')
  let content = $('#content')

  if(!sidebar.hasClass('collapsed')){
    sidebar.addClass("collapsed");
    content.removeClass("col-md-9").addClass('col-md-12');
  }
}

export { toggleSidebar, openSidebar, closeSidebar }
