const test = require('ava')

const { collect } = require('./helpers/helper')

test.cb('comment', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines)
    t.is(lines.length, 1, '1 row')
    t.end()
  }

  collect('comment', { skipComments: true }, verify)
})

test.cb('custom comment', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines)
    t.is(lines.length, 1, '1 row')
    t.end()
  }

  collect('option-comment', { skipComments: '~' }, verify)
})
