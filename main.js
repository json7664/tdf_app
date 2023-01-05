const {app, BrowserWindow} = require('electron')
const path = require('path')
// var ipc = require('electron').ipcMain;
// var os = require('os');
// var {dialog} = require('electron');

function createWindow(){
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,

        }
    });

    window.loadFile('src/index.html');    
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});


