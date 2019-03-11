var assert = require('assert');

suite('es6');

test('Number.isFinite', function() {
  require('../es6/Number.isFinite.js');
  assert.ok(Number.isFinite);
  assert.ok(Number.isFinite(45));
  assert.ok(Number.isFinite(-45));
  assert.ok(Number.isFinite(0));
  assert.ok(!Number.isFinite(NaN));
  assert.ok(!Number.isFinite(-Infinity));
  assert.ok(!Number.isFinite(Infinity));
  assert.ok(!Number.isFinite('hi'));
  assert.ok(!Number.isFinite('45'));
  assert.ok(!Number.isFinite({ foo: 'bar' }));
  assert.ok(!Number.isFinite(null));
  assert.ok(!Number.isFinite(undefined));
});

test('Number.isInteger', function() {
  require('../es6/Number.isInteger.js');
  assert.ok(Number.isInteger);
  assert.ok(Number.isInteger(1));
  assert.ok(Number.isInteger(100));
  assert.ok(Number.isInteger(2345));
  assert.ok(Number.isInteger(-2345));
  assert.ok(Number.isInteger(0));
  assert.ok(Number.isInteger(-0));
  assert.ok(!Number.isInteger(0.5));
  assert.ok(!Number.isInteger('five'));
  assert.ok(!Number.isInteger('0.5'));
  assert.ok(!Number.isInteger('50'));
  assert.ok(!Number.isInteger(null));
  assert.ok(!Number.isInteger(undefined));
});

test('Number.isNaN', function() {
  require('../es6/Number.isNaN.js');
  assert.ok(Number.isNaN);
  assert.ok(Number.isNaN(NaN));
  assert.ok(!Number.isNaN(Infinity));
  assert.ok(!Number.isNaN(0));
  assert.ok(!Number.isNaN(null));
  assert.ok(!Number.isNaN(undefined));
  assert.ok(!Number.isNaN(2134));
});

test('Number.toInteger', function() {
  require('../es6/Number.toInteger.js');
  assert.ok(Number.toInteger);
  assert.equal(34, Number.toInteger(34));
  assert.equal(34, Number.toInteger(34.5));
  assert.equal(34, Number.toInteger(34.9));
  assert.equal(-45, Number.toInteger(-45.3));
  assert.equal(0, Number.toInteger(0));
});

test('String.fromCodePoint', function() {
  require('../es6/String.fromCodePoint.js');
  assert.ok(String.fromCodePoint);
});

test('String.prototype.codePointAt', function() {
  require('../es6/String.prototype.codePointAt.js');
  assert.ok(String.prototype.codePointAt);
});

test('String.prototype.contains', function() {
  require('../es6/String.prototype.contains.js');
  assert.ok(String.prototype.contains);
  assert.ok('foo'.contains('oo'));
  assert.ok(!'teamwork'.contains('i'));
  assert.ok(!'blah'.contains('blargh'));
  assert.ok('blah'.contains('bla'));
  assert.ok('blah'.contains('ah'));
  assert.ok('blah'.contains('a'));
  assert.ok('blah'.contains('l'));
  assert.ok('blah'.contains(''));
});

test('String.prototype.endsWith', function() {
  require('../es6/String.prototype.endsWith.js');
  assert.ok(String.prototype.endsWith);
  assert.ok('foo'.endsWith('o'));
  assert.ok('foo'.endsWith('oo'));
  assert.ok('foo'.endsWith('foo'));
  assert.ok('foo'.endsWith(''));
  assert.ok(!'foo'.endsWith('fo'));
  assert.ok(!'foo'.endsWith('f'));
});

test('String.prototype.startsWith', function() {
  require('../es6/String.prototype.startsWith.js');
  assert.ok(String.prototype.startsWith);
  assert.ok('foo'.startsWith('foo'));
  assert.ok('foo'.startsWith('fo'));
  assert.ok('foo'.startsWith('f'));
  assert.ok('foo'.startsWith(''));
  assert.ok(!'foo'.startsWith('o'));
  assert.ok(!'foo'.startsWith('oo'));
});

test('String.prototype.toArray', function() {
  require('../es6/String.prototype.toArray.js');
  assert.ok(String.prototype.toArray);
  assert.ok('foo'.toArray());
  assert.equal('f', 'foo'.toArray()[0]);
  assert.equal('o', 'foo'.toArray()[1]);
  assert.equal('o', 'foo'.toArray()[2]);
  assert.equal(undefined, 'foo'.toArray()[3]);
});

test('String.prototype.repeat', function() {
  require('../es6/String.prototype.repeat.js');
  assert.ok(String.prototype.repeat);
  assert.ok('foo'.repeat(1));
  assert.equal('foo'.repeat(0), '');
  assert.equal('foo'.repeat(1), 'foo');
  assert.equal('foo'.repeat(2), 'foofoo');
});
