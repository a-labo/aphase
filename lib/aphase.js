/**
 * @function aphase
 * @param {string} phaseName - Phase name to support
 * @returns {function} - Phase function
 */
'use strict'

const colorprint = require('colorprint')
const amatch = require('amatch')
const co = require('co')

/** @lends aphase */
function aphase (phaseName = '*') {
  let match = amatch(phaseName)

  function phase (phaseName, action) {
    return co(function * () {
      let matched = match(phaseName)
      if (matched) {
        let startAt = new Date()
        colorprint.debug(`*** ${phaseName} start ***`)
        yield Promise.resolve(action())
        let duration = new Date() - startAt
        colorprint.debug(`*** ${phaseName} end(${duration}ms) ***\n`)
      }
      return matched
    })
  }

  Object.assign(phase, {
    parallel (...phaseSets) {
      return Promise.all(
        [ ...phaseSets ].reduce((promises, set) => [
          ...promises, ...Object.keys(set).map((name) =>
            phase(name, set[ name ])
          )
        ], [])
      )
    },
    all (...phaseSets) {
      return co(function * () {
        for (let set of phaseSets) {
          for (let name of Object.keys(set)) {
            yield phase(name, set[ name ])
          }
        }
      })
    }
  })

  return phase
}

module.exports = aphase
