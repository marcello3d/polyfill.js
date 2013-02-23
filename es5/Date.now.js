// From https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/now
if (!Date.now) {
    Date.now = function now() {
        return +new Date;
    };
}