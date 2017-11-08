'use strict'

const { app, BrowserWindow } = require('electron')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2), { boolean: ['dev'] })

let win

const index = /\.js$/.test(argv._[0])
  ? `${__dirname}/index.html?${argv._[0]}`
  : argv._[0]

app.on('ready', () => {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${index}`)
  if (argv.dev) win.webContents.openDevTools()
})

app.on('window-all-closed', () => app.quit())
