'use strict'

const { app, BrowserWindow } = require('electron')

const main = process.argv[2]

let win

app.on('ready', () => {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html?${main}`)
  // win.webContents.openDevTools()
})

app.on('window-all-closed', () => app.quit())
