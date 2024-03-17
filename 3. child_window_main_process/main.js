const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,

  })

  // Load index.html into the window
  win.loadFile('index.html')
  // win.show();

  // Creating child window
  let child = new BrowserWindow({parent: win});
  child.loadFile('child.html');
  // child.show();

  // Dev Tool
  win.webContents.openDevTools();

}

// When Electron has finished initializing and is ready to create browser windows.
app.whenReady().then(createWindow)
