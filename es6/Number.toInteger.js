// From http://wiki.ecmascript.org/doku.php?id=harmony:number.tointeger
if (!Number.toInteger) {
    Number.toInteger = function toInteger(value) {
        function sign(n) { 
            return (n < 0) ? -1 : 1; 
        }
        
        var n = +value;
        if (isNaN(n)) {
            return +0;
        }
        if (n === 0 || !isFinite(n)) {
            return n;
        }
        return sign(n) * Math.floor(Math.abs(n));
    }
}