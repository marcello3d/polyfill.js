// from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/trim
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g,'');
    };
}