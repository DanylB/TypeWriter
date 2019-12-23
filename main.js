const path = require('path');
const url = require('url');
const {app,BrowserWindow} = require('electron');


let win = null;

function createWindow(){
    win = new BrowserWindow({
        show:false,
        frame: false,
        resizable:false,
        autoHideMenuBar: true,
        icon: __dirname + "/img/leptop.png" ,
        backgroundColor: '#38424E',

        webPreferences: {
            nodeIntegration: true
          } 

    })
    win.maximize();
    
    win.loadFile('index.html');
    win.once('ready-to-show', () => {
        win.show()
      })

    //win.webContents.openDevTools();

   win.on('closed',() =>{
    win = null;
})
}

app.on('ready', createWindow);
