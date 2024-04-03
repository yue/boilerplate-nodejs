#!/usr/bin/env node

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

// Create main window.
let mainWindow: gui.Window;
function guiMain() {
  mainWindow = gui.Window.create({});
  mainWindow.setContentSize({width: 400, height: 400});
  mainWindow.center();
  mainWindow.activate();
}
