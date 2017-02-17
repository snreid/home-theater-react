var toggleSidebar = function(){
  $("#sidebar-right").toggleClass("collapsed");
  $("#content").toggleClass("col-md-12 col-md-9");
}

export { toggleSidebar }
