var mergeSort2 = function (arr) {
    if (arr.length === 1)
        return arr;
    return merge2(mergeSort2(arr.slice(arr.length / 2)), mergeSort2(arr.slice(0, arr.length / 2)));
};
var merge2 = function (left, right, lIndex, rIndex, result) {
    if (lIndex === void 0) { lIndex = 0; }
    if (rIndex === void 0) { rIndex = 0; }
    if (result === void 0) { result = []; }
    if (lIndex === left.length)
        return result.concat(right.slice(rIndex));
    else if (rIndex === right.length)
        return result.concat(left.slice(lIndex));
    else if (left[lIndex] < right[rIndex])
        return result
            .concat(left[lIndex])
            .concat(merge2(left, right, lIndex + 1, rIndex, result));
    else
        return result
            .concat(right[rIndex])
            .concat(merge2(left, right, lIndex, rIndex + 1, result));
};
console.log(mergeSort2([5, 3, 2, 4, 1]));
