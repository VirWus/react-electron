import { useRecoilState } from "recoil";
import { productDialogAtom } from './States/Atoms/buttons'

const { app, BrowserWindow,nativeTheme  } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const { globalShortcut } = require('electron');

require('@electron/remote/main').initialize()


function NewuserButton () { 
  const [productDialog, setProductDialog] = useRecoilState(productDialogAtom);  
  console.log(productDialog)
  setProductDialog(true)
  console.log(productDialog)
}

function createWindow() {
 
  // Create the browser window.
  const win = new BrowserWindow({
  
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 400,
    resizable: false,
   
    center: true,
    autoHideMenuBar: true
  })


  nativeTheme.themeSource = 'dark'
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  win.maximize();
}

app.on('ready', createWindow)

app.on('browser-window-focus', function () {
  globalShortcut.register("CommandOrControl+R", () => {
      console.log("CommandOrControl+R is pressed: Shortcut Disabled");
      NewuserButton();
  });
  globalShortcut.register("F5", () => {
      console.log("F5 is pressed: Shortcut Disabled");
  });
});
app.on('browser-window-blur', function () {
  globalShortcut.unregister('CommandOrControl+R');
  globalShortcut.unregister('F5');
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
