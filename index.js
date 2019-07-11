#!/usr/bin/env node
'use strict'
process.title = 'quicktron'

const electron = require('electron')
const { spawn } = require('child_process')
const { resolve } = require('path')

const args = process.argv
  .slice(2)
  .map(arg => (/^-/.test(arg) ? arg : resolve(arg)))

spawn(electron, [`${__dirname}/app`, ...args])
