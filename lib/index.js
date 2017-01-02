/**
 * Phase runner
 * @module aphase
 * @version 1.1.1
 */

'use strict'

const aphase = require('./aphase')

let lib = aphase.bind(this)

Object.assign(lib, aphase, {
  aphase
})

module.exports = lib
