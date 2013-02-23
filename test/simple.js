var assert = require('assert')

var polyfill = require('../index.js')

suite('Simple')

test('test feature existence', function() {
    assert.ok(polyfill.supports('Array.prototype.every'))
    assert.ok(polyfill.supports('Array.prototype.filter'))
    assert.ok(polyfill.supports('Array.prototype.forEach'))
    assert.ok(polyfill.supports('Array.prototype.reduce'))
    assert.ok(polyfill.supports('Date.now'))
})

test('test feature non-existence', function() {
    assert.ok(!polyfill.supports('String.prototype.blink'))
    assert.ok(!polyfill.supports('foo'))
})

test('check existence of feature code', function(done) {
    polyfill('Array.prototype.every', function(error, code) {
        assert.ifError(error)
        assert.ok(code.indexOf('Array.prototype.every') >= 0)
        done()
    })
})