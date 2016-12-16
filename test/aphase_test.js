/**
 * Test case for aphase.
 * Runs with mocha.
 */
'use strict'

const aphase = require('../lib/aphase.js')
const assert = require('assert')
const co = require('co')

describe('aphase', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Aphase', () => co(function * () {
    let phase = aphase('foo:*,bar:*')
    assert.ok(yield phase('foo:hoge', () => console.log('this is hoge')))
    assert.ok(!(yield phase('quz:yes', () => console.log('this is yes'))))
    assert.ok(phase)

    yield phase.all({
      'foo:all': () => console.log('foo')
    })
  }))
})

/* global describe, before, after, it */
