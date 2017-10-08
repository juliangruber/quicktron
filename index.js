#!/usr/bin/env node
'use strict'
process.title = 'electron-quick'

const electron = require('electron')
const { spawn } = require('child_process')
const { resolve } = require('path')

const main = resolve(process.argv[2])

spawn(electron, [`${__dirname}/app`, main, ...process.argv.slice(3)])
