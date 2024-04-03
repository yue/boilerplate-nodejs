#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import gui from 'gui';

// Check if it is Yode.
if (!process.versions.yode)
  throw new Error('Can only run under Yode runtime.');

// Show GUI when ready.
if (process.platform == 'darwin') {
  gui.lifetime.onReady = guiMain;
} else {
  guiMain();
}

// Create GUI.
function guiMain() {
  registerCustomProtocol();
  if (process.platform == 'darwin') {
    createAppMenu();
  }

  // Create main window.
  const mainWindow = gui.Window.create({});
  mainWindow.onClose = () => gui.MessageLoop.quit();
  mainWindow.setContentSize({width: 400, height: 250});
  mainWindow.setContentView(createBrowser());
  mainWindow.center();
  mainWindow.activate();

  // Make it global to prevent garbage collection.
  global.mainWindow = mainWindow;
}

// Register a custom protocol that maps to files.
function registerCustomProtocol() {
  gui.Browser.registerProtocol('app', (url) => {
    const u = new URL(url);
    const p = path.resolve(__dirname, '..', 'app', u.pathname.substr(1));
    // realpathSync can convert the path to the real place after packaged.
    return gui.ProtocolFileJob.create(fs.realpathSync(p));
  });
}

// Create a browser view with custom protocol.
function createBrowser() {
  const browser = gui.Browser.create({
    devtools: true,
    contextMenu: true,
    webview2Support: true,
  });
  browser.addBinding('requestNodeVersion', () => {
    browser.executeJavaScript(`reportNodeVersion('${process.version}')`, () => {});
  });
  browser.loadURL('app://host/index.html');
  return browser;
}

// Create application menu.
function createAppMenu() {
  const menu = gui.MenuBar.create([
    {
      label: require('../package.json').build.productName,
      submenu: [
        { role: 'hide' },
        { role: 'hide-others' },
        { role: 'unhide' },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          onClick() { gui.MessageLoop.quit(); },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'select-all' },
      ],
    },
    {
      label: 'Window',
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'maximize' },
        { role: 'close-window' },
      ],
    },
  ]);
  gui.app.setApplicationMenu(menu);
}
