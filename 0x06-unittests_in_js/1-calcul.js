function calculateNumber(type, a, b) {
    const RoundedA = Math.round(a);
    const RoundedB = Math.round(b);
    if (type === 'SUM') {
        return RoundedA + RoundedB;
    } else if (type === 'SUBTRACT') {
        return RoundedA - RoundedB;
    } else if (type === 'DIVIDE') {
        if (RoundedB === 0) {
            return 'Error';
        }
        return RoundedA / RoundedB;
    } else {
        return 'Invalid type';
    }
}

module.exports = calculateNumber;