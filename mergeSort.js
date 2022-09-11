var mergeSort = function (arr) {
    if (arr.length === 1)
        return arr;
    return merge(mergeSort(arr.slice(arr.length / 2)), mergeSort(arr.slice(0, arr.length / 2)));
};
// const merge = (left: number[], right: number[]): number[] => {
//   let lI: number = 0;
//   let rI: number = 0;
//   let result: number[] = [];
//   while (lI < left.length && rI < right.length) {
//     left[lI] < right[rI] && lI < left.length
//       ? result.push(left[lI++])
//       : result.push(right[rI++]);
//   }
//   lI < left.length && result.push(...left.slice(lI));
//   rI < right.length && result.push(...right.slice(rI));
//   return result;
// };
var merge = function (left, right, lIndex, rIndex, result) {
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
            .concat(merge(left, right, lIndex + 1, rIndex, result));
    else
        return result
            .concat(right[rIndex])
            .concat(merge(left, right, lIndex, rIndex + 1, result));
};
console.log(mergeSort([5, 3, 2, 4, 1]));
