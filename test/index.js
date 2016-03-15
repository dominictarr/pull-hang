
var tape = require('tape')
var hang = require('../')

tape('hang does nothing until you abort', function (t) {
  var aborted, ended
  var read = hang()

  read(null, function (end) {
    t.ok(end)
    t.ok(aborted)
    ended = true
  })

  aborted = true

  read(true, function (end) {
    t.ok(ended)
    t.end()
  })

})
