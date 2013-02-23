Polyfill [![Build Status](https://travis-ci.org/marcello3d/polyfill.js.png)](https://travis-ci.org/marcello3d/polyfill.js)
==================
A collection of polyfills for standard JavaScript features.

Notes
-----

This is intended for use with [node-shimmy](https://github.com/marcello3d/node-shimmy), and not really a standalone 
module.

Usage
-----

```js
var polyfill = require('polyfill')

polyfill('Array.prototype.forEach', function(error, polyfillSource) {
  // return the JavaScript source for the given polyfill
})

if (polyfill.defines('Date.now')) {
  // check if a polyfill is defined for a given feature name
}

// Print out list of defined polyfill names
console.dir(polyfill.names)
```



License
-------
Open source software under the [zlib license](LICENSE).

Many polyfills based on documentation on [MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference) and
[ecmascript.org](http://wiki.ecmascript.org/doku.php).