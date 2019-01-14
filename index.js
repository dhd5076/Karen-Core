// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
var web = require('./web');
var notify = require('./utils/notify');
const path = require('path');

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({ 
    resizable: true,
    height: 1080,
    width: 1920,
    icon: path.join(__dirname, 'utils/img/Icon.jpg'), 
    frame: true,
    backgroundColor: "#000"
  });

  mainWindow.setMenu(null)

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closed', function () {

    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})