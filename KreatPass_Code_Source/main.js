const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 485,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: path.join(__dirname, 'KreatPass.ico')
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});


//  écouteurs d'événements IPC pour le contrôle de la fenêtre
ipcMain.on('window-minimize', (event) => {
    let window = BrowserWindow.getFocusedWindow();
    if (window) window.minimize();
});

ipcMain.on('window-maximize', (event) => {
    let window = BrowserWindow.getFocusedWindow();
    if (window) {
        if (window.isMaximized()) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    }
});

ipcMain.on('window-close', (event) => {
    let window = BrowserWindow.getFocusedWindow();
    if (window) window.close();
});

/*
#####################################
#  .-. .-')       (`-.   _  .-')    #
#  \  ( OO )    _(OO  )_( \( -O )   #
#  ,--. ,--.,--(_/   ,. \,------.   #
#  |  .'   /\   \   /(__/|   /`. '  #
#  |      /, \   \ /   / |  /  | |  #
#  |     ' _) \   '   /, |  |_.' |  #
#  |  .   \    \     /__)|  .  '.'  #
#  |  |\   \    \   /    |  |\  \   #
#  `--' '--'     `-'     `--' '--'  #
#####################################
*/