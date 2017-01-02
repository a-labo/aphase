/**
 * Phase runner
 * @module aphase
 * @version 1.2.0
 */

'use strict'

const aphase = require('./aphase')

let lib = aphase.bind(this)

Object.assign(lib, aphase, {
  aphase
})

module.exports = lib
