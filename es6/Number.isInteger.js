if (!Number.isInteger) {
    Number.isInteger = function(value) {
        return typeof value === 'number' && isFinite(value) &&
            value > -9007199254740992 && value < 9007199254740992 &&
            Math.floor(value) === value;
    }
}