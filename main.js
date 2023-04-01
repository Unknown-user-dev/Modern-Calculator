const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 390,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    scrollbar: {
      useContentSize: false,
      alwaysShowScrollbar: false
    },
    autoHideMenuBar: true
  })

  win.loadFile('index.html')
}

app.on('ready', () => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
