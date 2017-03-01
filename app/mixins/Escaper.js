export function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function splitTerms(string){
  var new_string = string.split(' ').map(function(term){
    return "(?=.*" + term + ")"
  })
  return new_string.join("")
}
