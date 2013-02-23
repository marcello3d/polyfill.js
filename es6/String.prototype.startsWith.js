// From http://wiki.ecmascript.org/doku.php?id=harmony:string_extras
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(s) {
        return this.indexOf(s) === 0;
    };
}
