var mergeSort = function (arr) {
    if (arr.length === 1)
        return arr;
    return merge(mergeSort(arr.slice(arr.length / 2)), mergeSort(arr.slice(0, arr.length / 2)));
};
var merge = function (left, right) {
    var lI = 0;
    var rI = 0;
    var result = [];
    while (lI < left.length && rI < right.length) {
        left[lI] < right[rI] && lI < left.length
            ? result.push(left[lI++])
            : result.push(right[rI++]);
    }
    lI < left.length && result.push.apply(result, left.slice(lI));
    rI < right.length && result.push.apply(result, right.slice(rI));
    return result;
};
console.log(mergeSort([5, 3, 2, 4, 1]));
