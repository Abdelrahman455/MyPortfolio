export function load(){
  
  var loadspinner = document.querySelector("#load")
  
  if(window.navigator.onLine){
   loadspinner.style.display = "none"
    return true
  }
}