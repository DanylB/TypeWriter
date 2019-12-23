
//Window close
const {remote} = require('electron')

document.getElementById('exitBtnId').addEventListener('click',closeWindow);

function closeWindow(){
    localStorage.clear();
    
    var window = remote.getCurrentWindow()
    window.close();
}
