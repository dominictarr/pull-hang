# pull-hang

a pull-stream source that does nothing until you abort it.

``` js
var Hang = require('pull-hang')


var hang = Hang()
pull(
  hang
  pull.collect(function (err) {
    //this will never callback, until you call hang(true, cb)
  })
)

//abort the stream after a timeout.
setTimeout(function () {
  hang(true, function () {})
}, 100)

```

## License

MIT
