var assert = require('assert')

suite('es5')

test('Date.now', function() {
    require('../es5/Date.now.js')    
    assert.ok(Date.now)
})

test('Date.prototype.isISOString', function() {
    require('../es5/Date.prototype.isISOString.js')    
    assert.ok(Date.prototype.isISOString)
})

test('Function.prototype.bind', function() {
    require('../es5/Function.prototype.bind.js')    
    assert.ok(Function.prototype.bind)
})

test('Object.keys', function() {
    require('../es5/Object.keys.js')    
    assert.ok(Object.keys)
})

test('String.prototype.trim', function() {
    require('../es5/String.prototype.trim.js')    
    assert.ok(String.prototype.trim)
})

