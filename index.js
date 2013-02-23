var fs = require('fs')
var path = require('path')

var polyfills = {}
polyfills.JSON = path.join(__dirname, 'node_modules/json3/lib/json3.js')

function add(group, names) {
    var base = path.join(__dirname, group)
    names.forEach(function(name) {
        polyfills[name] = path.join(base, name+'.js')
    })
} 
add('es5', [
    'Array.isArray',
    'Array.prototype.every',
    'Array.prototype.filter',
    'Array.prototype.forEach',
    'Array.prototype.indexOf',
    'Array.prototype.lastIndexOf',
    'Array.prototype.map',
    'Array.prototype.reduce',
    'Array.prototype.reduceRight',
    'Array.prototype.some',
    'Date.now',
    'Date.prototype.isISOString',
    'Function.prototype.bind',
    'Object.keys',
    'String.prototype.trim'
])
add('es6', [
    'Number.isFinite',
    'Number.isInteger',
    'Number.isNaN',
    'Number.toInteger',
    'String.fromCodePoint',
    'String.prototype.codePointAt',
    'String.prototype.contains',
    'String.prototype.endsWith',
    'String.prototype.startsWith',
    'String.prototype.toArray'
])
add('non-standard', [ 
    'String.prototype.substr' 
])

module.exports = function getShim(featureName, callback) {
    if (!polyfills[featureName]) return callback(new Error("Unknown feature: "+featureName))
    fs.readFile(polyfills[featureName], 'utf8', callback)
}
module.exports.defines = function(featureName) {
    return !!polyfills[featureName]
}
module.exports.names = Object.keys(polyfills)