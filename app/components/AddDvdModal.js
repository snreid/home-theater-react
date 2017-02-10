const BrowserWindow = window.require('electron').remote.BrowserWindow
const path = require('path')

//NOTE: button needs to exist before this is rendered.
const newWindowBtn = document.getElementById('modal-add-dvd')
console.log(newWindowBtn)

newWindowBtn.addEventListener('click', function(event){
  const modalPath = path.join('file://', __dirname, '../../add-dvd.html')

})

const AddDvdModal = () => (
  <span></span>
)

export default AddDvdModal
