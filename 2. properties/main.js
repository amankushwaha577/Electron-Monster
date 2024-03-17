const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    // frame:false , 
    // backgroundColor:'#ff0000',
    // alwaysOnTop:true,
    // title:'New Title',
    resizable:false,
  })

  // Load index.html into the window
  win.loadFile('index.html')

  // Dev Tool
  win.webContents.openDevTools();

}

// When Electron has finished initializing and is ready to create browser windows.
app.whenReady().then(createWindow)
