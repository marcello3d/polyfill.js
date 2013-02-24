var assert = require('assert')

var polyfill = require('../index.js')

suite('Simple')

test('test feature existence', function() {
    assert.ok(polyfill('Array.prototype.every'))
    assert.ok(polyfill('Array.prototype.filter'))
    assert.ok(polyfill('Array.prototype.forEach'))
    assert.ok(polyfill('Array.prototype.reduce'))
    assert.ok(polyfill('Date.now'))
})

test('test feature non-existence', function() {
    assert.ok(!polyfill('String.prototype.blink'))
    assert.ok(!polyfill('foo'))
})

test('check existence of feature code', function(done) {
    polyfill('Array.prototype.every', function(error, code) {
        assert.ifError(error)
        assert.ok(code.indexOf('Array.prototype.every') >= 0)
        done()
    })
})