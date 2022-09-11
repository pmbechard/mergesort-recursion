var itFib = function (n) {
    if (n === 0)
        return [0];
    if (n === 1)
        return [0, 1];
    var result = [0, 1];
    var prev = 0;
    var current = 1;
    for (var i = 2; i < n; i++) {
        result.push(prev + current);
        var temp = current;
        current = prev + current;
        prev = temp;
    }
    return result;
};
console.log(itFib(8));
var recursiveFib = function (n, i, prev, current) {
    if (i === void 0) { i = 1; }
    if (prev === void 0) { prev = 0; }
    if (current === void 0) { current = 1; }
    if (i === n - 1)
        return [];
    if (i === 1)
        return [0, 1, 1].concat(recursiveFib(n, i + 1, current, current + prev));
    return [prev + current].concat(recursiveFib(n, i + 1, current, current + prev));
};
console.log(recursiveFib(8));
