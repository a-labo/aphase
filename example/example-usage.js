'use strict'

const aphase = require('aphase')

function run (phaseName) {
  let phase = aphase(phaseName) // Define phase function
  // Run if phase name matches
  phase('foo:sayYeah!', () => Promise.resolve('yeah!'))
  phase('quz:sayYeah!', () => Promise.resolve('yeah!'))
}

run('foo:*,bar:*')
