var assert = require('assert')

suite('es5')

var EMPTY_ARRAY = []
var ARRAY_123 = [1,2,3]
var ARRAY_12345 = [1,2,3,4,5]
var NEW_ARRAY = new Array(5)

var SPARSE_ARRAY = []
SPARSE_ARRAY[0] = 'foo'
SPARSE_ARRAY[100] = 'bar'

var SPARSE_ARRAY2 = [1,2,3]
SPARSE_ARRAY2[9] = 10

var SPARSE_ARRAY3 = []
SPARSE_ARRAY3[-5] = 'uh oh'
SPARSE_ARRAY3[0] = 'ok'
SPARSE_ARRAY3[10000] = 'seriously?'

test('Array.isArray', function() {

    require('../es5/Array.isArray.js')
    
    assert.ok(Array.isArray)
    assert.equal(true, Array.isArray([1,2,3]))
    assert.equal(true, Array.isArray([]))
    assert.equal(true, Array.isArray(new Array(5)))
    assert.equal(true, Array.isArray(EMPTY_ARRAY))
    assert.equal(true, Array.isArray(ARRAY_123))
    assert.equal(true, Array.isArray(ARRAY_12345))
    assert.equal(true, Array.isArray(NEW_ARRAY))
    assert.equal(true, Array.isArray(SPARSE_ARRAY))
    assert.equal(true, Array.isArray(SPARSE_ARRAY2))
    assert.equal(true, Array.isArray(SPARSE_ARRAY3))

    assert.equal(false, Array.isArray(45))
    assert.equal(false, Array.isArray(undefined))
    assert.equal(false, Array.isArray(null))
    assert.equal(false, Array.isArray('string'))
    assert.equal(false, Array.isArray(arguments))
})

test('Array.prototype.every', function () {
    require('../es5/Array.prototype.every.js')

    assert.ok(Array.prototype.every)
    
    var count = 0
    ARRAY_123.every(function(x) { count++; return x < 2 })
    assert.equal(2, count)
    
    count = 0
    ARRAY_123.every(function() { count++; return false })
    assert.equal(1, count)
    
    count = 0
    ARRAY_12345.every(function() { count++; return true })
    assert.equal(5, count)
    
    count = 0
    EMPTY_ARRAY.every(function() { count++; return true })
    assert.equal(0, count)
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