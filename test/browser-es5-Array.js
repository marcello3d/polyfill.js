var assert = require('assert')

suite('es5-Array')

test('Array.isArray', function() {

    require('../es5/Array.isArray.js')
    
    assert.ok(Array.isArray)
    assert.equal(true, Array.isArray([1,2,3]))
    assert.equal(true, Array.isArray([]))
    assert.equal(true, Array.isArray(new Array(5)))

    assert.equal(false, Array.isArray(45))
    assert.equal(false, Array.isArray(undefined))
    assert.equal(false, Array.isArray(null))
    assert.equal(false, Array.isArray('string'))
    assert.equal(false, Array.isArray(arguments))
})

test('Array.prototype.every', function () {
    require('../es5/Array.prototype.every.js')

    assert.ok(Array.prototype.every)
})

test('Array.prototype.filter', function () {
    require('../es5/Array.prototype.filter.js')

    assert.ok(Array.prototype.filter)
})

test('Array.prototype.forEach', function () {
    require('../es5/Array.prototype.forEach.js')

    assert.ok(Array.prototype.forEach)
})

test('Array.prototype.indexOf', function () {
    require('../es5/Array.prototype.indexOf.js')

    assert.ok(Array.prototype.indexOf)
})

test('Array.prototype.lastIndexOf', function () {
    require('../es5/Array.prototype.lastIndexOf.js')

    assert.ok(Array.prototype.lastIndexOf)
})

test('Array.prototype.map', function () {
    require('../es5/Array.prototype.map.js')

    assert.ok(Array.prototype.every)
})

test('Array.prototype.reduce', function () {
    require('../es5/Array.prototype.reduce.js')

    assert.ok(Array.prototype.reduce)
})

test('Array.prototype.reduceRight', function () {
    require('../es5/Array.prototype.reduceRight.js')

    assert.ok(Array.prototype.reduceRight)
})

test('Array.prototype.some', function () {
    require('../es5/Array.prototype.some.js')

    assert.ok(Array.prototype.some)
})